import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      users: [
        { id: 1, username: "dev_user", role: "developer", email: "dev@devpulse.io" },
        { id: 2, username: "pm_sarah", role: "product_manager", email: "sarah@devpulse.io" },
        { id: 3, username: "admin_ops", role: "admin", email: "admin@devpulse.io" },
      ],
      total: 3,
      page: 1,
    },
    {
      headers: {
        "X-Powered-By": "Express 4.18.2",
        "Server": "DevPulse/2.4.1 (Node.js 20.11)",
      },
    }
  );
}
