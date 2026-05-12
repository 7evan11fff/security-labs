import { NextRequest, NextResponse } from "next/server";

const ALLOWED_PREFIX = "https://dashboard.authbridge.io";

export async function GET(request: NextRequest) {
  const redirectUri = request.nextUrl.searchParams.get("redirect_uri");
  const clientId = request.nextUrl.searchParams.get("client_id") || "default";

  if (!redirectUri) {
    return NextResponse.json(
      { error: "Missing redirect_uri", usage: "GET /api/oauth/authorize?redirect_uri=<URL>&client_id=<ID>" },
      { status: 400 }
    );
  }

  // VULNERABILITY: Prefix matching — checks if redirect_uri starts with the allowed prefix
  // Bypass: https://dashboard.authbridge.io.evil.com/steal works
  if (!redirectUri.startsWith(ALLOWED_PREFIX)) {
    return NextResponse.json(
      { error: "Invalid redirect_uri", detail: `Must start with: ${ALLOWED_PREFIX}`, provided: redirectUri },
      { status: 400 }
    );
  }

  const authCode = "code_" + Math.random().toString(36).slice(2, 14);

  return NextResponse.json({
    authorization_code: authCode,
    redirect_to: `${redirectUri}?code=${authCode}`,
    client_id: clientId,
    note: "Authorization code issued. Exchange at /api/oauth/token",
  });
}
