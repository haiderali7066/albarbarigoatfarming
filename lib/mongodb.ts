import mongoose from "mongoose";

function getMongoDBURI(): string {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "❌ MONGODB_URI is not defined in environment variables."
    );
  }

  return uri;
}

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("🟢 MongoDB: Already connected");
      return;
    }

    if (mongoose.connection.readyState === 2) {
      console.log("🟡 MongoDB: Connection in progress...");
      return;
    }

    console.log("🔄 MongoDB: Connecting...");

    const MONGODB_URI = getMongoDBURI();

    await mongoose.connect(MONGODB_URI, {
      dbName: "aistblogs",
    });

    console.log("✅ MongoDB Connected Successfully!");
    console.log(`📂 Database: ${mongoose.connection.name}`);
    console.log(`🌐 Host: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed!");
    console.error(error);

    throw error;
  }
}