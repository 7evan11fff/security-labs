import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      openapi: "3.0.0",
      info: {
        title: "DevPulse API",
        version: "2.4.1",
        description: "Internal API documentation for DevPulse platform",
      },
      servers: [
        { url: "/api/v1", description: "Production API" },
      ],
      paths: {
        "/health": {
          get: {
            summary: "Health check endpoint",
            description: "Returns the health status of all services",
            responses: { "200": { description: "Service health status" } },
          },
        },
        "/users": {
          get: {
            summary: "List all users",
            description: "Returns paginated list of platform users",
            responses: { "200": { description: "User list" } },
          },
        },
        "/deployments": {
          get: {
            summary: "List deployments",
            description: "Returns recent deployment history",
            responses: { "200": { description: "Deployment list" } },
          },
        },
        "/metrics": {
          get: {
            summary: "Get platform metrics",
            description: "Returns aggregated platform metrics",
            responses: { "200": { description: "Metrics data" } },
          },
        },
      },
      "x-internal-endpoints": {
        note: "The following endpoints are for internal use only and are not publicly documented.",
        endpoints: [
          "/api/admin/secret - Internal configuration endpoint (restricted)",
        ],
      },
    },
    {
      headers: {
        "X-Powered-By": "Express 4.18.2",
        "Server": "DevPulse/2.4.1 (Node.js 20.11)",
      },
    }
  );
}
