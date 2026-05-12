import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const payload = await verifyToken(authHeader.slice(7));
  if (!payload) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
  }

  if (payload.role !== "admin") {
    return NextResponse.json({ error: "Insufficient role", required: "admin", provided: payload.role }, { status: 403 });
  }
  if (payload.department !== "security") {
    return NextResponse.json({ error: "Insufficient department access", required: "security", provided: payload.department }, { status: 403 });
  }
  if (payload.clearance !== "level-5") {
    return NextResponse.json({ error: "Insufficient clearance", required: "level-5", provided: payload.clearance }, { status: 403 });
  }

  return NextResponse.json({
    classification: "TOP SECRET",
    flag: "FLAG{jwt_admin_escalation}",
    operational_secrets: {
      incident_response_key: "IR-KEY-2025-ALPHA",
      threat_feed_api: "tf_live_sentinel_9x8z7y6w",
      soc_admin_password: "S3nt1n3l_Adm1n_2025!",
    },
    message: "You escalated privileges by forging a JWT with the required claims: role=admin, department=security, clearance=level-5",
  });
}
