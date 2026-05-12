import { NextRequest, NextResponse } from "next/server";

const ALLOWED_DOMAIN = "app.connectid.local";

export async function GET(request: NextRequest) {
  const redirectUri = request.nextUrl.searchParams.get("redirect_uri");
  const responseType = request.nextUrl.searchParams.get("response_type");

  if (!redirectUri) {
    return NextResponse.json({ error: "redirect_uri parameter required" }, { status: 400 });
  }

  if (responseType !== "code") {
    return NextResponse.json({ error: "Only response_type=code is supported" }, { status: 400 });
  }

  // VULNERABILITY: Uses .includes() — checks if the URL *contains* the domain anywhere
  if (!redirectUri.includes(ALLOWED_DOMAIN)) {
    return NextResponse.json(
      { error: "Invalid redirect_uri", detail: `redirect_uri must contain ${ALLOWED_DOMAIN}`, provided: redirectUri },
      { status: 400 }
    );
  }

  // "User authenticates" — auto-approve for this simulation
  const authCode = "authcode_" + Math.random().toString(36).slice(2, 14);

  // Redirect to the provided URI with the auth code
  const redirectUrl = new URL(redirectUri);
  redirectUrl.searchParams.set("code", authCode);

  return NextResponse.json({
    message: "Authorization granted",
    redirect_to: redirectUrl.toString(),
    authorization_code: authCode,
    note: "In a real flow, the server would redirect. Here we return the code directly for the simulation.",
  });
}
