import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    isConnected = true;
    console.log("Connected to the database!");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};
