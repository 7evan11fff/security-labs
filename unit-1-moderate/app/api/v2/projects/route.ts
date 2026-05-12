import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      projects: [
        { id: "proj_001", name: "frontend-app", framework: "nextjs", status: "active" },
        { id: "proj_002", name: "api-service", framework: "express", status: "active" },
        { id: "proj_003", name: "worker-queue", framework: "nodejs", status: "active" },
      ],
    },
    {
      headers: {
        "X-Powered-By": "ShipStack/3.1.0",
        "Server": "nginx/1.24.0",
      },
    }
  );
}
