import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "No token provided" }, { status: 401 });
  }

  const token = authHeader.slice(7);
  const payload = await verifyToken(token);

  if (!payload) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
  }

  if (payload.role !== "admin") {
    return NextResponse.json({ error: "Access denied. Admin role required.", role_provided: payload.role }, { status: 403 });
  }

  return NextResponse.json({
    message: "Welcome to the admin panel!",
    flag: "FLAG{jwt_admin_escalation}",
    admin_data: {
      total_users: 1247,
      revenue_mtd: "$48,320",
      system_health: "all_green",
    },
  });
}
