import jwt from 'jsonwebtoken';

export default class GenerateToken {
  async execute(userId) {
    const token = jwt.sign(
      {userId: userId},
      `${process.env.JWT_SECRET}`,
      { expiresIn: "1d"}
    );
    return token;
  }
}