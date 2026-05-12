import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "healthy",
      version: "2.4.1",
      uptime: "14d 3h 22m",
      services: {
        database: "connected",
        cache: "connected",
        queue: "connected",
      },
    },
    {
      headers: {
        "X-Powered-By": "Express 4.18.2",
        "Server": "DevPulse/2.4.1 (Node.js 20.11)",
        "X-Request-Id": "req_a7f2b3c4d5e6",
      },
    }
  );
}
