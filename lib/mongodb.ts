import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables.");
}

export async function connectDB() {
  try {
    // Already connected
    if (mongoose.connection.readyState === 1) {
      console.log("🟢 MongoDB: Already connected");
      return;
    }

    // Connecting
    if (mongoose.connection.readyState === 2) {
      console.log("🟡 MongoDB: Connection in progress...");
      return;
    }

    console.log("🔄 MongoDB: Connecting...");

    await mongoose.connect(MONGODB_URI, {
      dbName: "aistblogs", // Optional if already included in URI
    });

    console.log("✅ MongoDB Connected Successfully!");
    console.log(`📂 Database: ${mongoose.connection.name}`);
    console.log(`🌐 Host: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed!");
    console.error(error);

    process.exit(1);
  }
}