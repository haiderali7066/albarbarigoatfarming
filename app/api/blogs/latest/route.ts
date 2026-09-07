import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import BlogModel from "@/models/Blog";

export async function GET() {
  try {
    await connectDB();

    const blogs = await BlogModel.find({
      status: "published",
    })
      .sort({ createdAt: -1 })
      .limit(3)
      .lean();

    return NextResponse.json(
      JSON.parse(JSON.stringify(blogs))
    );
  } catch (error) {
    console.error("Error fetching latest blogs:", error);

    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}