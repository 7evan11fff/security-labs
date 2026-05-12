import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      changelog: [
        {
          version: "4.2.0-rc1",
          date: "2025-07-12",
          changes: [
            "Added multi-region state replication",
            "Improved policy evaluation performance by 40%",
            "Fixed drift detection false positives",
            "Internal: migrated debug diagnostics to new endpoint scheme (see api-meta for details)",
          ],
        },
        {
          version: "4.1.8",
          date: "2025-06-28",
          changes: [
            "Fixed state lock deadlock in concurrent deployments",
            "Added ARM64 compute support",
            "Updated TLS certificates",
          ],
        },
        {
          version: "4.1.7",
          date: "2025-06-15",
          changes: [
            "Performance improvements for large stack diffs",
            "Added webhook retry configuration",
          ],
        },
      ],
    },
    {
      headers: {
        "Server": "nexora-gateway/4.2.0",
      },
    }
  );
}
