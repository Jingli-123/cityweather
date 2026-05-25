"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const backend_1 = require("@clerk/backend");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function authMiddleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader?.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                error: "Unauthorized",
            });
        }
        await (0, backend_1.verifyToken)(token, {
            secretKey: process.env.CLERK_SECRET_KEY,
        });
        next();
    }
    catch (error) {
        return res.status(401).json({
            error: "Invalid token",
        });
    }
}
