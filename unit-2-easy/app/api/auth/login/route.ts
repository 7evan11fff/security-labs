import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  if (email === "jordan@taskflow.io" && password === "jordan123") {
    const response = NextResponse.json({ success: true, user: { id: 1, name: "Jordan Hayes" } });
    response.cookies.set("session", "1", { httpOnly: true, path: "/", maxAge: 86400 });
    return response;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete("session");
  return response;
}
