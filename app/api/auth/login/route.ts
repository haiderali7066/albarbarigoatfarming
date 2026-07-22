import {
  NextRequest,
  NextResponse,
} from "next/server";
import { generateToken } from "@/lib/auth";

export async function POST(
  req: NextRequest
) {
  try {
    const {
      email,
      password,
    } = await req.json();

    if (
      email !==
        process.env.ADMIN_EMAIL ||
      password !==
        process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const token =
      generateToken();

    const response =
      NextResponse.json({
        success: true,
        message:
          "Login successful",
      });

    response.cookies.set(
      "admin_token",
      token,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV ===
          "production",
        sameSite: "lax",
        path: "/",
        maxAge:
          60 *
          60 *
          24 *
          7,
      }
    );

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Server error",
      },
      {
        status: 500,
      }
    );
  }
}