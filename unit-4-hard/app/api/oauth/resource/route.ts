import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader?.startsWith("Bearer vat_admin_")) {
    return NextResponse.json({ error: "Valid access token required" }, { status: 401 });
  }

  return NextResponse.json({
    user: { name: "System Admin", email: "sysadmin@veriauth.io" },
    flag: "FLAG{oauth_redirect_bypass_token_theft}",
    message: "You chained an open redirect with the OAuth flow to bypass same-origin redirect_uri validation!",
  });
}
