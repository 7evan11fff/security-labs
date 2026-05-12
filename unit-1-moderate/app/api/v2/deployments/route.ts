import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      deployments: [
        { id: "dpl_a1b2c3", project: "frontend-app", status: "success", created_at: "2025-07-15T10:30:00Z" },
        { id: "dpl_d4e5f6", project: "api-service", status: "success", created_at: "2025-07-15T09:15:00Z" },
        { id: "dpl_g7h8i9", project: "worker-queue", status: "failed", created_at: "2025-07-14T22:00:00Z" },
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
