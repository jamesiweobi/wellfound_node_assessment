"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = ({ res, data, message, statusCode = 200, }) => {
    res.status(statusCode).json({
        success: statusCode < 400,
        message,
        data,
    });
};
exports.sendResponse = sendResponse;
