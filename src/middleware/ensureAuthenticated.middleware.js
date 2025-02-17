import pkg from 'jsonwebtoken';

const {verify} = pkg;

import prscl from '@prisma/client';
const {PrismaClient} = prscl;
// import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient()

export const authenticatedMiddleware = async function (req, res, next) {
  const authHeader = req.headers.authorization;
  const auth = authHeader?.split(' ')[1];

  if (!auth) {
    return res.status(401).json({message: 'Unauthorized access/no auth'});
  }

  try {
    const user_id = verify(auth, process.env.JWT_SECRET);
    console.log("From middleware: ", user_id);

    const isValid = await prisma.user.findUnique({
      where: {userId: user_id.userId},
    });

    if (!isValid) {
      return res.status(401).json({message: 'Unauthorized access'});
    }
    next()

  } catch (err) {
    return res.status(403).json({message: 'Invalid Token'});
  }
};
