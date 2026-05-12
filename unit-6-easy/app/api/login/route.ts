import { NextRequest, NextResponse } from "next/server";
import { simulateLogin } from "@/lib/db";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Username and password required" }, { status: 400 });
  }

  const result = simulateLogin(username, password);

  if (result.success) {
    const response = NextResponse.json({
      success: true,
      user: { id: result.user!.id, username: result.user!.username, role: result.user!.role },
      debug_query: result.query,
    });
    response.cookies.set("session", String(result.user!.id), { httpOnly: true, path: "/" });
    return response;
  }

  return NextResponse.json({ success: false, error: "Invalid credentials", debug_query: result.query }, { status: 401 });
}
