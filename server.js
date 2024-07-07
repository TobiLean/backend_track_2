import express from 'express';
import bodyParser from 'body-parser';
import {PrismaClient} from '@prisma/client';
import crypto from 'node:crypto';
import {Buffer} from 'node:buffer';
import GenerateToken from "./src/provider/generateToken.provider.js";
import BadRequestError, {ValidationError} from './src/customErrors.js';
import {authenticatedMiddleware} from "./src/middleware/ensureAuthenticated.middleware.js";

//initialise Generate token object
const generateToken = new GenerateToken();

//instantiating PrismaClient
const prisma = new PrismaClient();

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
  console.log("Random bytes:", userId);
  return userId;
}

app.post('/auth/register', async (req, res) => {
  const password = req.body.password;
  const hash = crypto.createHash('sha256');
  hash.update(password);
  const hashedPassword = hash.digest('hex');

  const newUserId = makeId(req.body.firstName, req.body.lastName);

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
        orgId: makeId(req.body.firstName),
        name: `${req.body.firstName}'s Oraganisation`,
        description: '',
      },
    })

    const token = await generateToken.execute(newUserId)

    res.status(201).json({
      "status": "success",
      "message": "Registration successful",
      "data": {
        "accessToken": token,
        "user": user,
      }
    });

    // throw new BadRequestError("Registration unsuccessful");
    // throw new ValidationError("Validation Error");
  } catch (err) {

    if (err instanceof BadRequestError) {

      res.status(400).send({
        "status": err.status,
        "message": err.message,
        "statusCode": err.statusCode,
      })
    } else if (err instanceof ValidationError) {

      res.status(422).send({
        "field": err.field,
        "message": err.message,
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
      const token = await generateToken.execute(userExist);

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
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
