import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  if (process.env.MONGO_URI !== undefined) {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected ${conn.connection.host}`);
    } catch (error: any) {
      console.log(`Error: ${error.message}`);
      process.exit(1);
    }
  }
};

export default connectDB;
