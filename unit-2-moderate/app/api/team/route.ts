import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { users } from "@/lib/data";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session_token");

  if (!session) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  // Returns limited info — name and department only (no IDs exposed here)
  const team = users.slice(0, 7).map(u => ({
    name: u.name,
    department: u.department,
    role: u.role,
  }));

  return NextResponse.json({ team, total: users.length });
}
