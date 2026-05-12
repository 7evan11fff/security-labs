import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (username === "dev_riley" && password === "riley2025!") {
    const response = NextResponse.json({ success: true, message: "Authenticated" });
    response.cookies.set("vd_session", "1001", { httpOnly: true, path: "/", maxAge: 86400 });
    return response;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
