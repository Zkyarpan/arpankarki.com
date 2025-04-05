import mongoose from "mongoose";

// Track connection state
let isConnected = false;

export const connectDB = async () => {
  // If already connected, don't connect again
  if (isConnected) {
    return;
  }

  // Check if MONGO_URL is defined
  const mongoUrl = process.env.MONGODB_URI;
  if (!mongoUrl) {
    console.error("MONGO_URL is not defined in environment variables");
    throw new Error("MongoDB connection string is missing");
  }

  try {
    // Configure mongoose options
    const options = {
      bufferCommands: false, // Disable mongoose buffering
      autoIndex: process.env.NODE_ENV !== "production", // Build indexes in development only
    };

    // Attempt connection
    const connection = await mongoose.connect(mongoUrl, options);

    // Update connection status
    isConnected = true;

    console.log("Connected to the database!");

    // Optional: Log DB name
    const dbName = connection.connection.db?.databaseName ?? 'unknown';
    console.log(`Database name: ${dbName}`);

    return connection;
  } catch (error) {
    // Better error handling
    console.error("Database connection error:", error);
    isConnected = false;

    // Retry logic instead of exiting process
    // This gives the app a chance to recover or retry
    throw error;
  }
};

// Optional: Add a disconnect function
export const disconnectDB = async () => {
  if (!isConnected) {
    return;
  }

  try {
    await mongoose.disconnect();
    isConnected = false;
    console.log("Disconnected from the database");
  } catch (error) {
    console.error("Error disconnecting from database:", error);
    throw error;
  }
};
