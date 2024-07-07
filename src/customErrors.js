export default class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.status = "Bad request";
    this.statusCode = 400
  }
}

export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.field = "Validation";
    this.statusCode = 422;
  }
}


