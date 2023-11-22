import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db";
import { notFound, errorHandler } from "./middleware/errorMiddleware";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import path from 'path'

declare global {
  namespace Express {
    interface Request {
      user?: any; 
    }
  }
}

const PORT = process.env.PORT || 3002;

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")))

  app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  )
} else {
  app.get("/", (req, res) => {
    res.send("API is running")
  })
}

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
