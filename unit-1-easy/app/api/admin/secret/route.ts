import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "access_granted",
      environment: "production",
      config: {
        database_host: "db-prod-01.internal.devpulse.io",
        cache_cluster: "redis-prod.internal.devpulse.io:6379",
        feature_flags: {
          new_dashboard: true,
          beta_analytics: false,
        },
      },
      flag: "FLAG{api_docs_admin_endpoint}",
      message: "Congratulations! You discovered the undocumented admin endpoint through API reconnaissance.",
    },
    {
      headers: {
        "X-Powered-By": "Express 4.18.2",
        "Server": "DevPulse/2.4.1 (Node.js 20.11)",
      },
    }
  );
}
