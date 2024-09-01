import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => console.log("Connected to the database!"));
    connection.on("error", (error) => {
      console.error("Connection error:", error);
      process.exit(1);
    });
  } catch (error) {
    console.log("Somthing went wrong while connecting to the database", error);
  }
};
