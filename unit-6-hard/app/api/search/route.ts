import { NextRequest, NextResponse } from "next/server";
import { simulateSearch } from "@/lib/db";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");
  if (!session) {
    return NextResponse.json({ error: "Login required" }, { status: 401 });
  }

  const q = request.nextUrl.searchParams.get("q") || "";
  const result = simulateSearch(q);

  // No debug query in hard mode — just results
  return NextResponse.json({
    results: result.results,
    count: result.results.length,
  });
}
