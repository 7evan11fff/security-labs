import { NextRequest, NextResponse } from "next/server";
import { simulateLogin } from "@/lib/db";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Credentials required" }, { status: 400 });
  }

  const result = simulateLogin(username, password);

  if (result.success) {
    const response = NextResponse.json({
      success: true,
      message: "Authentication successful",
      user: { username: result.user!.username, role: result.user!.role },
    });
    response.cookies.set("session", String(result.user!.id), { httpOnly: true, path: "/" });
    return response;
  }

  // No query echo in hard mode
  return NextResponse.json({ success: false, error: "Authentication failed" }, { status: 401 });
}
