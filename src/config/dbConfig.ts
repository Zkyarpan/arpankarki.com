import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "Message",
      bufferCommands: false,
    });
    isConnected = true;
    console.log("Connected to the database!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};
