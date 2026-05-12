import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Token required" }, { status: 401 });
  }

  const payload = await verifyToken(authHeader.slice(7));
  if (!payload) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  return NextResponse.json({
    platform: "SentinelOps",
    version: "5.3.1",
    endpoints: {
      public: ["/api/auth/login", "/api/auth/verify", "/api/v2/config"],
      restricted: [
        {
          path: "/api/v2/admin/secrets",
          method: "GET",
          required_claims: { role: "admin", department: "security", clearance: "level-5" },
          description: "Returns classified operational secrets",
        },
      ],
    },
    jwt_info: {
      algorithm: "HS256",
      issuer: "sentinelops-auth",
      note: "Secret rotation pending — current secret has been flagged as weak by automated scan",
    },
  });
}
