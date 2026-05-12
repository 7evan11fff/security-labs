import { NextRequest, NextResponse } from "next/server";
import { signToken } from "@/lib/jwt";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (username === "user" && password === "user123") {
    const token = await signToken({
      sub: "1",
      username: "user",
      role: "user",
    });

    return NextResponse.json({
      success: true,
      token,
      message: "Login successful. Use this token for authenticated requests.",
    });
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
