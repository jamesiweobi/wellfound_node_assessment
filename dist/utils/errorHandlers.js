"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerErrorHandler = exports.NotFoundErrorHandler = exports.DatabaseError = exports.ServerError = exports.ValidationError = exports.DuplicateResourceError = exports.NotFoundError = exports.ForbiddenError = exports.UnauthorizedError = exports.UserError = void 0;
const main_logger_1 = require("./main.logger");
const responder_1 = require("./responder");
class ErrorObject extends Error {
    constructor(name, statusCode) {
        super();
        this.name = name;
        this.statusCode = statusCode;
    }
}
class UserError extends ErrorObject {
    constructor(message) {
        super("USER_ERROR", 400);
        this.message = message;
    }
}
exports.UserError = UserError;
class UnauthorizedError extends ErrorObject {
    constructor(message) {
        super("AUTH_ERROR", 401);
        this.message = message;
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends ErrorObject {
    constructor(message) {
        super("FORBIDDEN_ERROR", 403);
        this.message = message;
    }
}
exports.ForbiddenError = ForbiddenError;
class NotFoundError extends ErrorObject {
    constructor(message) {
        super("NOT_FOUND_ERROR", 404);
        this.message = message;
    }
}
exports.NotFoundError = NotFoundError;
class DuplicateResourceError extends ErrorObject {
    constructor(message) {
        super("DUPLICATE_RESOURCE_ERROR", 409);
        this.message = message;
    }
}
exports.DuplicateResourceError = DuplicateResourceError;
class ValidationError extends ErrorObject {
    constructor(message) {
        super("VALIDATION_ERROR", 422);
        this.message = message;
    }
}
exports.ValidationError = ValidationError;
class ServerError extends ErrorObject {
    constructor(message) {
        super("SERVER_ERROR", 500);
        this.message = message;
    }
}
exports.ServerError = ServerError;
class DatabaseError extends ErrorObject {
    constructor(message) {
        super("DATABASE_ERROR", 503);
        this.message = message;
    }
}
exports.DatabaseError = DatabaseError;
const NotFoundErrorHandler = (req, res, next) => {
    throw new NotFoundError("Resource not found.");
};
exports.NotFoundErrorHandler = NotFoundErrorHandler;
const ServerErrorHandler = (error, req, res, next) => {
    const { statusCode = 500, message } = error;
    main_logger_1.logger.error(message, { STACK_TRACE: error, DATE: new Date() });
    return (0, responder_1.sendResponse)({
        res,
        message,
        statusCode,
    });
};
exports.ServerErrorHandler = ServerErrorHandler;
