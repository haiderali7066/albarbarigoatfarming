import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/Blog";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    console.log("Connecting to MongoDB...");
    await connectDB();

    console.log("Fetching blogs...");
    const blogs = await Blog.find().sort({
      createdAt: -1,
    });

    console.log(`Found ${blogs.length} blogs`);

    return NextResponse.json({
      success: true,
      blogs,
    });
  } catch (error: any) {
    console.error("GET BLOGS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Unknown error",
        stack:
          process.env.NODE_ENV === "development"
            ? error?.stack
            : undefined,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const existing = await Blog.findOne({
      slug: body.slug,
    });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug already exists",
        },
        {
          status: 400,
        }
      );
    }

    const blog = await Blog.create({
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      image: body.image,
      category: body.category,
      tags: body.tags,
      author: body.author || "Admin",
      status: body.status,
    });

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (error: any) {
    console.error("CREATE BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}