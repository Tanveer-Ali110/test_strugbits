import HttpStatusCodes from "http-status-codes";

export abstract class HttpException extends Error {
  public readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;
  constructor(httpStatus: number, msg: string) {
    super(msg);
    this.HttpStatus = httpStatus;
  }
}
export class BadRequestException extends HttpException {
  public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;
  constructor(msg: string) {
    super(BadRequestException.HttpStatus, msg);
  }
}
export class NotFoundException extends HttpException {
  public static readonly HttpStatus = HttpStatusCodes.NOT_FOUND;
  constructor(msg: string) {
    super(NotFoundException.HttpStatus, msg);
  }
}
export class UnAuthorizedException extends HttpException {
  public static readonly HttpStatus = HttpStatusCodes.UNAUTHORIZED;
  constructor(msg: string) {
    super(UnAuthorizedException.HttpStatus, msg);
  }
}
export class ValidationException extends HttpException {
  public static readonly HttpStatus = HttpStatusCodes.FORBIDDEN;
  constructor(msg: string) {
    super(ValidationException.HttpStatus, msg);
  }
}
