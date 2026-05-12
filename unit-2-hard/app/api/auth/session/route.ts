import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { users } from "@/lib/data";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("vd_session");
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  const userId = parseInt(session.value, 10);
  const user = users.find(u => u.id === userId);
  if (!user) {
    return NextResponse.json({ error: "Invalid session" }, { status: 401 });
  }
  return NextResponse.json({ user: { id: user.id, username: user.username, name: user.name } });
}
