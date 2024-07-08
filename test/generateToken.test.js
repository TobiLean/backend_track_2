// import GenerateToken from "../src/provider/generateToken.provider.js";

// const GenerateToken = require('../src/provider/generateToken.provider.js');
import GenerateToken from '../src/provider/generateToken.provider.js'
import {authenticatedMiddleware} from "../src/middleware/ensureAuthenticated.middleware.js";
const jwt = require('jsonwebtoken');

test('JWT token should expire at the correct time', async () => {

  const id = 'mikey23'
  const generateToken = new GenerateToken();
  const token = await generateToken.execute(id);

  // const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // const expirationTime = decoded.exp;

  const payload = jwt.decode(token, process.env.JWT_SECRET);
  const exp = payload['exp'];
  console.log(exp)

  let time = 86400;

  expect(Number(exp)).toBeGreaterThanOrEqual(Number(time));
});

jest.mock('jwt');

const mockReq = () => {
  const req = {};
  return req;
};

const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}

test('Users cannot access organizations they do not belong to', async () => {
  const mockedNext = jest.fn();
  const mockedReq = mockReq();
  const mockedRes = mockRes();
  const mockedEntries = {
    date: {}
  }

  request.get.mockResolvedValue(mockedEntries);

  const result = get(mockedReq, mockedRes, mockedNext);

  expect(result).to.equal(mockedEntires.data);
  expect(mockedNext.mock.calls.length).toBe(1);
  expect(mockedRest.json).toHaveBeenCalledWith(mockedRes.data)
})





// jest.mock('@prisma/client', () => ({
//   PrismaClient: jest.fn(() => ({
//     user: {
//       findUnique: jest.fn(),
//     },
//   })),
// }));
//
// describe('authenticatedMiddleware', () => {
//   const mockNext = jest.fn();
//   const mockRes = { status: jest.fn(), json: jest.fn() };
//
//   afterEach(() => {
//     jest.clearAllMocks();
//   });
//
//   it('should handle missing token', async () => {
//     const mockReq = { headers: {} };
//
//     await authenticatedMiddleware(mockReq, mockRes, mockNext);
//
//     expect(mockRes.status).toHaveBeenCalledWith(401);
//     expect(mockRes.json).toHaveBeenCalledWith({ message: 'Unauthorized access' });
//     expect(mockNext).not.toHaveBeenCalled();
//   });
//
//   it('should handle invalid token', async () => {
//     const mockReq = { headers: { authorization: 'invalidToken' } };
//     jwt.verify = jest.fn(() => {
//       throw new Error('Invalid token');
//     });
//
//     await authenticatedMiddleware(mockReq, mockRes, mockNext);
//
//     expect(mockRes.status).toHaveBeenCalledWith(403);
//     expect(mockRes.json).toHaveBeenCalledWith({ message: 'Invalid Token' });
//     expect(mockNext).not.toHaveBeenCalled();
//   });
//
//   it('should handle valid token and user not found', async () => {
//     const mockReq = { headers: { authorization: 'validToken' } };
//     jwt.verify = jest.fn(() => ({ userId: 'someUserId' }));
//     const mockFindUnique = jest.fn(() => null);
//     const mockPrisma = new PrismaClient();
//     mockPrisma.user.findUnique = mockFindUnique;
//
//     await authenticatedMiddleware(mockReq, mockRes, mockNext);
//
//     expect(mockFindUnique).toHaveBeenCalledWith({ where: { userId: 'someUserId' } });
//     expect(mockRes.status).toHaveBeenCalledWith(401);
//     expect(mockRes.json).toHaveBeenCalledWith({ message: 'Unauthorized access' });
//     expect(mockNext).not.toHaveBeenCalled();
//   });
//
//   it('should handle valid token and user found', async () => {
//     const mockReq = { headers: { authorization: 'validToken' } };
//     jwt.verify = jest.fn(() => ({ userId: 'someUserId' }));
//     const mockFindUnique = jest.fn(() => ({ userId: 'someUserId' }));
//     const mockPrisma = new PrismaClient();
//     mockPrisma.user.findUnique = mockFindUnique;
//
//     await authenticatedMiddleware(mockReq, mockRes, mockNext);
//
//     expect(mockFindUnique).toHaveBeenCalledWith({ where: { userId: 'someUserId' } });
//     expect(mockNext).toHaveBeenCalled();
//   });
// });

