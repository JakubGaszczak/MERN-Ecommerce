import express, { Request, Response } from "express";
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db";
import { notFound, errorHandler } from "./middleware/errorMiddleware"
import userRoute from "./routes/userRoute"
import productRoute from "./routes/productRoute"

const PORT = process.env.PORT || 3002;

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser())

app.use("/api/users", userRoute)
app.use("/api/products", productRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
