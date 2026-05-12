import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      openapi: "3.0.0",
      info: {
        title: "ShipStack Internal API",
        version: "3.1.0",
        description: "Internal API documentation — DO NOT expose publicly",
        contact: { email: "platform-team@shipstack.io" },
      },
      servers: [
        { url: "/api/v2", description: "Public API v2" },
        { url: "/api/management", description: "Management API (restricted)" },
      ],
      paths: {
        "/health": {
          get: { summary: "Health check", tags: ["Public"] },
        },
        "/projects": {
          get: { summary: "List projects", tags: ["Public"] },
        },
        "/deployments": {
          get: { summary: "List deployments", tags: ["Public"] },
        },
      },
      "x-management-api": {
        description: "Management endpoints require elevated permissions. These are used by the platform team for configuration and diagnostics.",
        endpoints: {
          "/api/management/config": {
            method: "GET",
            description: "Returns platform configuration including internal service URLs and secrets. Access restricted to platform-admin role.",
            parameters: [
              { name: "token", in: "query", description: "Management API token (currently accepts any non-empty value during migration)", required: true },
            ],
          },
        },
      },
    },
    {
      headers: {
        "X-Powered-By": "ShipStack/3.1.0",
        "Server": "nginx/1.24.0",
      },
    }
  );
}
