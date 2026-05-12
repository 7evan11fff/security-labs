import { NextRequest, NextResponse } from "next/server";

// VULNERABILITY: Open redirect endpoint on the same origin
// This allows OAuth redirect_uri validation bypass via chaining
export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({
      description: "URL redirect service for partner integrations",
      usage: "GET /api/redirect?url=<destination>",
      note: "Redirects to the specified URL. Used for tracking outbound partner links.",
    });
  }

  // In a real app this would do a 302 redirect. In our simulation, we return where it would go.
  return NextResponse.json({
    action: "redirect",
    destination: url,
    status: 302,
    note: "This endpoint performs a server-side redirect to the provided URL.",
    leaked_params: Object.fromEntries(request.nextUrl.searchParams.entries()),
  });
}
