import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      platform: "Nexora",
      api_version: "v3",
      documentation: "Contact platform-team@nexora.dev for API access",
      internal_tooling: {
        diagnostics: {
          endpoint: "/api/debug/diagnostics",
          description: "Runtime diagnostics and configuration dump",
          authentication: "Requires X-Debug-Token header. Token value is the platform build hash visible in service responses.",
          note: "Build hash format: sha256 of version string. Current version: 4.2.0-rc1",
        },
      },
      support: "https://nexora.dev/support",
    },
    {
      headers: {
        "Server": "nexora-gateway/4.2.0",
      },
    }
  );
}
