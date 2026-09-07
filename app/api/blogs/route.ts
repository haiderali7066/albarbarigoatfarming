import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/Blog";
import { connectDB } from "@/lib/mongodb";

/* =========================================================
   GET BLOGS
   Supports:
   /api/blogs?page=1&limit=10
   /api/blogs?page=2&limit=10
========================================================= */

export async function GET(req: NextRequest) {
  try {
    console.log("Connecting to MongoDB...");
    await connectDB();

    const { searchParams } = new URL(req.url);

    const page = Math.max(
      1,
      Number(searchParams.get("page")) || 1
    );

    const limit = Math.min(
      10,
      Math.max(
        1,
        Number(searchParams.get("limit")) || 10
      )
    );

    const skip = (page - 1) * limit;

    console.log(
      `Fetching blogs - page: ${page}, limit: ${limit}, skip: ${skip}`
    );

    /*
     * Fetch one extra blog.
     *
     * Example:
     * limit = 10
     * We fetch 11.
     *
     * If 11 exist → there is another page.
     * If only 10 or less → this is the last page.
     */
    const blogs = await Blog.find({
      status: "published",
    })
      .sort({
        createdAt: -1,
      })
      .skip(skip)
      .limit(limit + 1)
      .lean();

    const hasMore = blogs.length > limit;

    const paginatedBlogs = hasMore
      ? blogs.slice(0, limit)
      : blogs;

    console.log(
      `Found ${paginatedBlogs.length} blogs. Has more: ${hasMore}`
    );

    return NextResponse.json({
      success: true,
      blogs: JSON.parse(
        JSON.stringify(paginatedBlogs)
      ),
      page,
      limit,
      hasMore,
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


/* =========================================================
   CREATE BLOG
========================================================= */

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    /*
     * Check duplicate slug
     */
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

    /*
     * Create blog
     */
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

    return NextResponse.json(
      {
        success: true,
        blog,
      },
      {
        status: 201,
      }
    );

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
