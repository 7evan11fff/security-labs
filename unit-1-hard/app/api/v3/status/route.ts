import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "operational",
      version: "4.2.0-rc1",
      region: "us-east-1",
      uptime_seconds: 1209600,
    },
    {
      headers: {
        "Server": "nexora-gateway/4.2.0",
        "X-Platform-Version": "4.2.0-rc1",
        "X-Trace-Id": "trace_" + Math.random().toString(36).slice(2, 14),
      },
    }
  );
}
