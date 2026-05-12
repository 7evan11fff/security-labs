import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "operational",
      version: "3.1.0",
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        "X-Powered-By": "ShipStack/3.1.0",
        "Server": "nginx/1.24.0",
        "X-Documentation": "/api/internal/documentation",
        "X-Request-Id": "req_" + Math.random().toString(36).slice(2, 10),
      },
    }
  );
}
