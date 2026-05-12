import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json(
      { error: "Missing required parameter: token" },
      { status: 401 }
    );
  }

  return NextResponse.json(
    {
      platform: "ShipStack",
      environment: "production",
      internal_services: {
        database: "postgres://admin:s3cur3p@ss@db-prod.internal:5432/shipstack",
        redis: "redis://:r3d1s_s3cr3t@cache-prod.internal:6379",
        queue: "amqp://queue-prod.internal:5672",
      },
      feature_flags: {
        multi_region: true,
        gpu_instances: false,
        custom_domains_v2: true,
      },
      flag: "FLAG{api_docs_admin_endpoint}",
      message: "You found the management configuration endpoint by reading the internal API documentation. Nice recon work!",
    },
    {
      headers: {
        "X-Powered-By": "ShipStack/3.1.0",
        "Server": "nginx/1.24.0",
      },
    }
  );
}
