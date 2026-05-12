import { NextRequest, NextResponse } from "next/server";

const VALID_TOKEN = "a]Fk9#2xPl7!wQ"; // Hardcoded debug token

export async function GET(request: NextRequest) {
  const debugToken = request.headers.get("X-Debug-Token");

  if (!debugToken) {
    return NextResponse.json(
      { error: "Missing X-Debug-Token header", hint: "Refer to api-meta for authentication details" },
      { status: 401 }
    );
  }

  // The "sha256 of version string" is a red herring / misdirection.
  // The actual check accepts the build hash OR a specific hardcoded token.
  // But to make it solvable: any non-empty token that matches a simple pattern works.
  // Real check: accepts the version string itself as the token (the sha256 hint is misleading)
  if (debugToken !== "4.2.0-rc1" && debugToken !== VALID_TOKEN) {
    return NextResponse.json(
      { error: "Invalid debug token", detail: "Token does not match current build hash" },
      { status: 403 }
    );
  }

  return NextResponse.json(
    {
      diagnostics: {
        environment: "production",
        node_version: "20.11.0",
        memory_usage_mb: 384,
        active_connections: 1247,
        database: {
          host: "db-cluster-prod.internal.nexora.dev",
          pool_size: 50,
          active_queries: 12,
        },
        secrets_vault: {
          provider: "HashiCorp Vault",
          address: "https://vault.internal.nexora.dev:8200",
          status: "unsealed",
        },
        internal_api_keys: {
          stripe: "sk_live_nexora_4f7a8b2c...",
          sendgrid: "SG.nexora_prod_key...",
          datadog: "dd_api_nexora_prod...",
        },
      },
      flag: "FLAG{api_docs_admin_endpoint}",
      message: "Excellent reconnaissance! You chained together multiple discovery steps: status page → api-meta → debug endpoint with correct auth token.",
    },
    {
      headers: {
        "Server": "nexora-gateway/4.2.0",
      },
    }
  );
}
