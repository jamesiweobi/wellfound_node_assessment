import { Response, Request, NextFunction } from "express";
import { sendResponse } from "./responder";
import { logger } from "./logger";
import { ValidationError as InputError } from "joi";

export const handleValidationError = (error: InputError) => {
  const { details } = error;
  const errorMessage = details[0].message;
  throw new ValidationError(errorMessage);
};

class ErrorObject extends Error {
  constructor(public name: string, public statusCode: number) {
    super();
  }
}

export class UserError extends ErrorObject {
  constructor(message: string) {
    super("USER_ERROR", 400);
    this.message = message;
  }
}

export class UnauthorizedError extends ErrorObject {
  constructor(message: string) {
    super("AUTH_ERROR", 401);
    this.message = message;
  }
}

export class ForbiddenError extends ErrorObject {
  constructor(message: string) {
    super("FORBIDDEN_ERROR", 403);
    this.message = message;
  }
}

export class NotFoundError extends ErrorObject {
  constructor(message: string) {
    super("NOT_FOUND_ERROR", 404);
    this.message = message;
  }
}

export class DuplicateResourceError extends ErrorObject {
  constructor(message: string) {
    super("DUPLICATE_RESOURCE_ERROR", 409);
    this.message = message;
  }
}

export class ValidationError extends ErrorObject {
  constructor(message: string) {
    super("VALIDATION_ERROR", 422);
    this.message = message;
  }
}

export class ServerError extends ErrorObject {
  constructor(message: string) {
    super("SERVER_ERROR", 500);
    this.message = message;
  }
}

export class DatabaseError extends ErrorObject {
  constructor(message: string) {
    super("DATABASE_ERROR", 503);
    this.message = message;
  }
}

export const NotFoundErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  throw new NotFoundError("Resource not found.");
};

export const ServerErrorHandler = (
  error: ErrorObject,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { statusCode = 500, message } = error;
  logger.error(message, { STACK_TRACE: error, DATE: new Date() });

  return sendResponse({
    res,
    message,
    statusCode,
  });
};
