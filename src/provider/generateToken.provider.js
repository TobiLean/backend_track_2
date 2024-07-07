import jwt from 'jsonwebtoken';

export default class GenerateToken {
  async execute(userId) {
    const token = jwt.sign(
      {userId: userId},
      `${process.env.JWT_SECRET}`,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    return token;
  }
}