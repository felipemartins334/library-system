"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const AppError_1 = require("../../errors/AppError");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.routes);
app.use((error, request, response, next) => {
    if (error instanceof AppError_1.AppError) {
        return response.status(error.statusCode).json({
            error: error.message
        });
    }
    return response.status(500).json({
        status: "Error",
        message: `Internal Server Error - ${error.message}`
    });
});
app.listen(3333, () => {
    console.log("Server is running");
});
