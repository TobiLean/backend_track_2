import express from 'express';
import bodyParser from 'body-parser';
import prscl from '@prisma/client';
const {PrismaClient} = prscl;
// import {PrismaClient} from '@prisma/client';
import crypto from 'node:crypto';
import GenerateToken from "../src/provider/generateToken.provider.js";
import BadRequestError, {ValidationError} from '../src/customErrors.js';
import {authenticatedMiddleware} from "../src/middleware/ensureAuthenticated.middleware.js";
import jwt from 'jsonwebtoken';
import Validator from 'validatorjs';

//initialise Generate token object
const generateToken = new GenerateToken();

//instantiating PrismaClient
const prisma = new PrismaClient().$connect().then((client) => {
  console.log('Connected to Prisma Client');
}).catch(err=>{
  console.log("Failed to connect to prisma: ",err);
});

//initialize server
const app = express();
const PORT = process.env.PORT || 3456;

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send({message: 'endpoint working'})
});

function makeId(seed1, seed2 = "") {
  let seed = seed2.length > 0 ? seed1.substring(0, 2).toLowerCase() + seed2.substring(0, 2).toLowerCase()
    : seed1.substring(0, 2).toLowerCase();
  const bytes = crypto.randomBytes(4).toString('hex');
  let userId = seed + bytes
  return userId;
}

app.post('/auth/register', async (req, res) => {

  const newUserId = makeId(req.body.firstName, req.body.lastName);

  let input = {
    userId: newUserId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
  }

  const rules = {
    userId: 'required|string',
    firstName: 'required|string',
    lastName: 'required|string',
    email: 'required|email',
    password: 'required|min:6', // Minimum 6 characters
    phone: 'string',
  };

  const validation = new Validator(input, rules);

  if(validation.fails()) {
    const errors = validation.errors.all();

    const errorDetails = errors.map((error) => ({
      field: error.field,
      message: error.message,
    }));

    res.status(422).json({
      errors: errorDetails,
    });
  }

  const password = req.body.password;
  const hash = crypto.createHash('sha256');
  hash.update(password);
  const hashedPassword = hash.digest('hex');

  const newOrgId = makeId(req.body.firstName);

  try {
    const user = await prisma.user.create({
      data: {
        userId: newUserId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        phone: req.body.phone,
      },
    })

    const organisation = await prisma.organisation.create({
      data: {
        orgId: newOrgId,
        name: `${req.body.firstName}'s Organisation`,
        description: '',
      },
    })

    console.log("The organization", organisation)

    const orgUser = await prisma.organisationsAndUsers.create({
      data: {
        user_id: newUserId,
        org_id: newOrgId,
      },
    })

    console.log("The ordUser", orgUser)

    const token = await generateToken.execute(newUserId)

    res.status(201).json({
      "status": "success",
      "message": "Registration successful",
      "data": {
        "accessToken": token,
        "user": user,
      }
    });

  } catch (err) {

    if (err instanceof BadRequestError) {

      res.status(400).send({
        "status": err.status,
        "message": err.message,
        "statusCode": err.statusCode,
      })
    }
  }
})

app.post('/auth/login', async (req, res) => {
  try {

    const password = req.body.password;
    const hash = crypto.createHash('sha256');
    hash.update(password);
    const hashedPassword = hash.digest('hex');

    const userExist = await prisma.user.findUnique(
      {
        where: {
          email: req.body.email,
          password: hashedPassword,
        }
      });

    if (userExist) {
      const token = await generateToken.execute(userExist.userId);

      res.status(200).json({
        "status": "success",
        "message": "Login successful",
        "data": {
          "accessToken": token,
          "user": userExist,
        },
      });
    } else {
      res.status(401).json({
        "status": "Bad Request",
        "message": "Authentication failed",
        "statusCode": 401,
      })
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
})

app.get('/api/users/:id', authenticatedMiddleware, async (req, res) => {
  const id = req.params.id;
  const aUser = await prisma.user.findUnique({
    where: {userId: id},
  }) !== null ? await prisma.user.findUnique({
    where: {userId: id},
  }) : await prisma.organisation.findUnique({
    where: {userId: id},
  });

  res.status(200).json({
    "status": "success",
    "message": "Record retreived successfully",
    "data": {
      aUser
    }
  })
})

app.get('/api/organisations', authenticatedMiddleware, async (req, res) => {
  const authHeader = req.headers.authorization
  const auth = authHeader?.split(' ')[1];
  const decoded = jwt.verify(auth, process.env.JWT_SECRET);
  const uId = decoded.userId;

  console.log("org auth: ", req.headers.authorization);
  console.log("USER ID: ", uId);

  const orgUserRecs = await prisma.organisationsAndUsers.findMany({
    where: {user_id: uId},
    select: {org_id: true},
  })
  console.log("Org recs", orgUserRecs);

  const orgIds = orgUserRecs.map((rec) => rec.org_id);
  console.log("Org ids", orgIds);

  const organisations = await prisma.organisation.findMany({
    where: {orgId: {in: orgIds}},
  })

  // const orgDetails = await prisma.organisation.findMany()

  res.status(200).json({
    "status": "success",
    "message": "Organisations retrieved successfully",
    "data": {
      "organisations": organisations
    }
  });
})

app.get('/api/organisations/:orgId', authenticatedMiddleware, async (req, res) => {
  const id = req.params.orgId;

  const anOrganisation = await prisma.organisation.findUnique({
    where: {orgId: id},
  })

  res.status(200).json({
    "status": "success",
    "message": "An organisation was retrieved successfully",
    "data": anOrganisation
  })
})

app.post('/api/organisations', authenticatedMiddleware, async (req, res) => {
  const authHeader = req.headers.authorization
  const auth = authHeader?.split(' ')[1];
  const decoded = jwt.verify(auth, process.env.JWT_SECRET);
  const uId = decoded.userId;

  const newOrgId = makeId(uId);

  try {
    const newOrg = await prisma.organisation.create({
      data: {
        orgId: newOrgId,
        name: req.body.name,
        description: req.body.description,
      },
    })

    res.status(201).json({
      "status": "success",
      "message": "Organisation created successfully",
      "data": newOrg,
    })
  } catch (err) {
    res.status(400).json({
      status: 'Bad Request',
      message: 'Client error',
      statusCode: 400
    });
  }
})

app.post('/api/organisations/:orgId/users', async (req, res) => {
  const orgUser = await prisma.organisationsAndUsers.create({
    data: {
      user_id: req.body.userId,
      org_id: req.params.orgId,
    },
  })

  res.status(200).json({
    "status": "success",
    "message": "User added to organisation successfully",
  })
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
