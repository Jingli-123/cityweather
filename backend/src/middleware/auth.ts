import { verifyToken } from "@clerk/backend";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers.authorization;

    const token = authHeader?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }
    await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    next();
  } catch (error) {
    return res.status(401).json({
      error: "Invalid token",
    });
  }
}
