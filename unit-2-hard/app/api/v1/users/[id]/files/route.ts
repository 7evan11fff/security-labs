import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { files } from "@/lib/data";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const cookieStore = await cookies();
  const session = cookieStore.get("vd_session");
  if (!session) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const { id } = await params;
  const userId = parseInt(id, 10);

  // VULNERABILITY: No authorization check — any authenticated user can read any user's files
  const userFiles = files.filter(f => f.userId === userId);

  if (userFiles.length === 0) {
    return NextResponse.json({ files: [], message: "No files found for this user" });
  }

  return NextResponse.json({ files: userFiles });
}
