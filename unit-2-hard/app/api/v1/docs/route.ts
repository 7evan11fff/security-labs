import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    api: "VaultDrive API",
    version: "1.0",
    base_path: "/api/v1",
    endpoints: {
      "GET /api/v1/users/:id": {
        description: "Get user profile by ID",
        auth: "Session cookie required",
      },
      "GET /api/v1/users/:id/files": {
        description: "List files belonging to a user",
        auth: "Session cookie required",
        note: "Returns file metadata and content for the specified user",
      },
    },
  });
}
