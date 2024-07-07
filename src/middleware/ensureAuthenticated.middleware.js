import {verify} from 'jsonwebtoken';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const authenticatedMiddleware = async function (req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({message: 'Unauthorized'});
  }

  try {
    const user = verify(auth, process.env.JWT_SECRET);
    const isValid = await prisma.user.findUnique({
      where: {userId: user.userId},
    });

    if (!isValid) {
      return res.status(401).json({message: 'Unauthorized'});
    }
    next();

  } catch (err) {
    return res.status(401).json({message: 'Invalid Token'});
  }
}