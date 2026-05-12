import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader?.startsWith("Bearer at_admin_")) {
    return NextResponse.json({ error: "Valid access token required" }, { status: 401 });
  }

  return NextResponse.json({
    resource: "admin_panel",
    user: { name: "Enterprise Admin", email: "admin@authbridge.io", role: "admin" },
    flag: "FLAG{oauth_redirect_bypass_token_theft}",
    message: "You exploited prefix-matching redirect_uri validation to steal an authorization code and obtain an admin token.",
  });
}
