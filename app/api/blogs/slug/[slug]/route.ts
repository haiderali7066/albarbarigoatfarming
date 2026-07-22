import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/Blog";
import { connectDB } from "@/lib/mongodb";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(
  req: NextRequest,
  { params }: Params
) {
  try {
    await connectDB();

    const { slug } =
      await params;

    const blog =
      await Blog.findOne({
        slug,
      });

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}