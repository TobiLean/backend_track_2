const request = require('supertest');
const {app} = require('../api/index.js');
const {describe, it, test, expect} = require("@jest/globals");
const jwt = require("jsonwebtoken");
// import crypto from 'node:crypto';
const crypto = require("node:crypto");

const SECONDS = 1000;


describe('auth test sign up', () => {
  test("It Should Register User Successfully with Default Organisation", async () => {
    const user = {
      firstName: 'L',
      lastName: 'Wei',
      email: 'l@email.com',
      password: '123123',
      phone: '1234567890'
    };

    // const uId = res.data.user.userId;

    const res = await request(app)
      .post('/auth/register')
      .send(user);

    expect(res.status).toBe(201);
    expect(res.body.message).toEqual('Registration successful');

  }, 20 * SECONDS);
})

describe('GET: /auth/login', () => {
  test("It Should Log user in successfully", async () => {
    const user = {
      email: 'l@email.com',
      password: '123123',
    }

    const res = await request(app)
      .post('/auth/login')
      .send(user);

    expect(res.status).toBe(200);
    expect(res.body.data.user.firstName).toEqual("L");
    expect(res.body.data.accessToken).toBeTruthy()

  })
  test("Check for required user fields", async () => {
    const user = {
      email: 'l@email.com',
      password: '123123',
    }

    const res = await request(app)
      .post('/auth/login')
      .send(user);

    const password = res.body.data.user.password;
    const hash = crypto.createHash('sha256');
    hash.update(password);
    const hashedPassword = hash.digest('hex');

    expect(res.status).toBe(200);
    expect(res.body.data.user.firstName).toEqual("L");
    expect(res.body.data.user.lastName).toEqual("Wei");
    expect(res.body.data.user.email).toEqual("l@email.com");
    expect(res.body.data.user.password).toEqual(hashedPassword);
  })
})
