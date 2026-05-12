import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { code } = body;

  if (!code || !code.startsWith("code_")) {
    return NextResponse.json({ error: "Invalid authorization code" }, { status: 400 });
  }

  return NextResponse.json({
    access_token: "at_admin_" + Math.random().toString(36).slice(2, 12),
    token_type: "Bearer",
    expires_in: 3600,
    scope: "openid profile admin",
  });
}
