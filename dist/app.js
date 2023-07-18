"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const app_startup_1 = require("./app_startup");
const errorHandlers_1 = require("./utils/errorHandlers");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
(0, app_startup_1.connectDB)();
// Handle Errors
app.use(errorHandlers_1.NotFoundErrorHandler);
app.use(errorHandlers_1.ServerErrorHandler);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
process.on("uncaughtException", function (err) {
    logger.error(err);
    logger.error(err.stack);
});
