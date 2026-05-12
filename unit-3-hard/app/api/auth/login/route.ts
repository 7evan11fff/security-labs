import { NextRequest, NextResponse } from "next/server";
import { signToken } from "@/lib/jwt";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (username === "operator" && password === "sentinel!ops") {
    const token = await signToken({
      sub: "op-3391",
      username: "operator",
      role: "operator",
      department: "monitoring",
      clearance: "level-2",
    });

    return NextResponse.json({ token, expires_in: 3600 });
  }

  return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
}
