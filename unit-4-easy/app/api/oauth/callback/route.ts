import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if (!code || !code.startsWith("authcode_")) {
    return NextResponse.json({ error: "Invalid or missing authorization code" }, { status: 400 });
  }

  // Exchange code for access token
  const accessToken = "access_admin_" + Math.random().toString(36).slice(2, 10);

  return NextResponse.json({
    access_token: accessToken,
    token_type: "Bearer",
    expires_in: 3600,
    scope: "read:profile read:admin",
  });
}
