import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      services: [
        { name: "api-gateway", version: "4.2.0", healthy: true },
        { name: "compute-engine", version: "4.1.8", healthy: true },
        { name: "policy-engine", version: "4.2.0", healthy: true },
        { name: "state-storage", version: "4.0.3", healthy: true },
      ],
    },
    {
      headers: {
        "Server": "nexora-gateway/4.2.0",
      },
    }
  );
}
