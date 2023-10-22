import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db";

const PORT = process.env.PORT || 3002;

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
