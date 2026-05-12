import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redirectUri = request.nextUrl.searchParams.get("redirect_uri");

  if (!redirectUri) {
    return NextResponse.json(
      { error: "redirect_uri required", registered_uris: ["Any path under this application's origin is allowed"] },
      { status: 400 }
    );
  }

  // "Proper" validation: checks that the redirect_uri is on the same origin
  // But this is the SAME application — and this app has an open redirect at /api/redirect
  let parsedUrl: URL;
  try {
    parsedUrl = new URL(redirectUri);
  } catch {
    return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
  }

  const appHost = request.nextUrl.host;
  if (parsedUrl.host !== appHost) {
    return NextResponse.json(
      { error: "redirect_uri must be on the same origin", allowed_host: appHost, provided_host: parsedUrl.host },
      { status: 400 }
    );
  }

  const authCode = "vericode_" + Math.random().toString(36).slice(2, 14);

  return NextResponse.json({
    authorization_code: authCode,
    redirect_to: `${redirectUri}${redirectUri.includes("?") ? "&" : "?"}code=${authCode}`,
    message: "Code issued. Exchange at /api/oauth/exchange",
  });
}
