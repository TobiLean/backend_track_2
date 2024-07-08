import pkg from 'jsonwebtoken';

const {verify} = pkg;

import prscl from '@prisma/client';
const {PrismaClient} = prscl;
// import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient().$connect().then((client) => {
  console.log('Connected to Prisma Client from middleware');
}).catch(err=>{
  console.log("Failed to connect to prisma from middleware: ",err);
});

export const authenticatedMiddleware = async function (req, res, next) {
  const authHeader = req.headers.authorization;
  const auth = authHeader?.split(' ')[1];

  if (!auth) {
    return res.status(401).json({message: 'Unauthorized access'});
  }

  try {
    const user_id = verify(auth, process.env.JWT_SECRET);
    console.log("From middleware: ", user_id);

    const isValid = await prisma.user.findUnique({
      where: {userId: user_id.userId},
    });

    if (!isValid) {
      return res.status(401).json({message: 'Unauthorized'});
    }
    next()

  } catch (err) {
    return res.status(403).json({message: 'Invalid Token'});
  }
};
