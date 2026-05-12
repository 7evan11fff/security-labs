import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader?.startsWith("Bearer access_admin_")) {
    return NextResponse.json({ error: "Invalid or missing access token" }, { status: 401 });
  }

  return NextResponse.json({
    user: {
      id: "admin-001",
      name: "Platform Administrator",
      email: "admin@connectid.io",
      role: "admin",
    },
    flag: "FLAG{oauth_redirect_bypass_token_theft}",
    message: "You bypassed redirect_uri validation to obtain an admin access token!",
  });
}
