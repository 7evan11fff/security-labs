import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function POST(request: NextRequest) {
  const { token } = await request.json();

  if (!token) {
    return NextResponse.json({ error: "Token required" }, { status: 400 });
  }

  const payload = await verifyToken(token);
  if (!payload) {
    return NextResponse.json({ valid: false, error: "Token invalid or expired" });
  }

  return NextResponse.json({
    valid: true,
    claims: payload,
    note: "Token verification uses HS256 algorithm",
  });
}
