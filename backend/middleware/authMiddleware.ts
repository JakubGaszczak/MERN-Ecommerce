import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler";
import { NextFunction, Request, Response } from "express";
import User from "../models/userModel";

interface Decoded {
  userId?: string;
  iat?: Date;
  exp?: Date;
}

const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token: string;

    token = req.cookies.jwt;

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as Decoded

        req.user = await User.findById(decoded.userId).select("-password");

        next();
      } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error("Not authorized, token failed");
      }
    } else {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);

const admin = asyncHandler( async(req: Request, res: Response, next: NextFunction) => {
    if (req.user && req.user.isAdmin) {
        next()
    } else {
        res.status(401)
        throw new Error("Not authorized as an admin")
    }
})

export { protect, admin };
