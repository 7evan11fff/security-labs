import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (email === "taylor@cloudhub.dev" && password === "cloudpass1") {
    const response = NextResponse.json({ success: true, user: { id: 101, name: "Taylor Morgan" } });
    response.cookies.set("session_token", "101", { httpOnly: true, path: "/", maxAge: 86400 });
    return response;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete("session_token");
  return response;
}
