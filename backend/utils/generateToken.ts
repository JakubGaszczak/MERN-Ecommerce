import jwt, { SignOptions } from "jsonwebtoken";
import { Response } from "express"; 
import { Types } from "mongoose"

const generateToken = (res: Response, userId: Types.ObjectId): void => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: "2h",
  } as SignOptions); 

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 2 * 60 * 60 * 1000, // 2h
  });
};

export default generateToken;