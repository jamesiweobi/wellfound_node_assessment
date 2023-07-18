"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDB = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const process_1 = require("process");
const errorHandlers_1 = require("../utils/errorHandlers");
const { database_url } = process_1.config;
const connectDB = () => {
    mongoose_1.default
        .connect(database_url)
        .then(() => console.log(`Connected to Database!!! `))
        .catch((e) => {
        throw new errorHandlers_1.DatabaseError(e.message);
    });
};
exports.connectDB = connectDB;
const disconnectDB = () => {
    mongoose_1.default.connection
        .close()
        .then(() => console.log(`Disconnected 💃`))
        .catch((e) => {
        throw new errorHandlers_1.DatabaseError(e.message);
    });
};
exports.disconnectDB = disconnectDB;
