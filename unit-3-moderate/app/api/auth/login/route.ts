import { NextRequest, NextResponse } from "next/server";
import { signToken } from "@/lib/jwt";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (email === "analyst@metricvault.io" && password === "metrics2025") {
    const token = await signToken({
      sub: "204",
      email: "analyst@metricvault.io",
      name: "Data Analyst",
      role: "analyst",
      tier: "standard",
    });

    return NextResponse.json({ token });
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
