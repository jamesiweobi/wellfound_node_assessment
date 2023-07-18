"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/logger.ts
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
// Create a write stream to log to the txt file
const logFileStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, 'logs.txt'), { flags: 'a' });
// Function to log requests to console and write to a txt file
const logger = (0, morgan_1.default)((tokens, req, res) => {
    const logMessage = `${new Date().toISOString()} - ${tokens.method(req, res)} - ${tokens.url(req, res)} - ${tokens['remote-addr'](req, res)}\n`;
    // Log to console
    console.log(logMessage);
    // Write to a txt file
    logFileStream.write(logMessage);
    return null;
});
exports.default = logger;
