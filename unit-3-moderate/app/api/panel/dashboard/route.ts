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
    return NextResponse.json(
      { error: "Forbidden: admin role required", your_role: payload.role },
      { status: 403 }
    );
  }

  return NextResponse.json({
    panel: "admin_dashboard",
    flag: "FLAG{jwt_admin_escalation}",
    system_stats: {
      queries_today: 14892,
      active_reports: 67,
      storage_used_gb: 234.7,
    },
    message: "You forged an admin JWT by discovering the weak signing secret.",
  });
}
