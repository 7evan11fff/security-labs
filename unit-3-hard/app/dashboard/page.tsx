"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [token, setToken] = useState("");
  const [claims, setClaims] = useState<Record<string, unknown> | null>(null);
  const router = useRouter();

  useEffect(() => {
    const t = localStorage.getItem("so_token");
    if (!t) { router.push("/login"); return; }
    setToken(t);
    fetch("/api/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: t }),
    }).then(r => r.json()).then(d => {
      if (!d.valid) { router.push("/login"); return; }
      setClaims(d.claims);
    });
  }, [router]);

  if (!claims) return <div className="min-h-screen bg-gray-950" />;

  return (
    <div className="min-h-screen bg-gray-950">
      <nav className="border-b border-gray-800 px-6 py-3 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SO</span>
          </div>
          <span className="font-semibold text-white">SentinelOps</span>
        </div>
        <span className="text-sm text-gray-500 ml-auto">Operator Console</span>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        <h1 className="text-2xl font-bold text-white">Operator Dashboard</h1>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3">Active Session</h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div><span className="text-gray-400">ID:</span> <span className="text-white ml-2">{String(claims.sub)}</span></div>
            <div><span className="text-gray-400">Role:</span> <span className="text-white ml-2">{String(claims.role)}</span></div>
            <div><span className="text-gray-400">Department:</span> <span className="text-white ml-2">{String(claims.department)}</span></div>
            <div><span className="text-gray-400">Clearance:</span> <span className="text-white ml-2">{String(claims.clearance)}</span></div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3">Session Token</h2>
          <div className="bg-gray-950 rounded-lg p-4 break-all">
            <code className="text-xs text-red-300 font-mono">{token}</code>
          </div>
          <p className="text-xs text-gray-500 mt-3">Algorithm: HS256 | Expires in 1 hour</p>
        </div>

        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-xl p-4">
          <p className="text-sm text-yellow-300">
            <strong>System Notice:</strong> Platform configuration available at <code className="bg-yellow-900/50 px-1 rounded">/api/v2/config</code> — includes endpoint documentation and access requirements.
          </p>
        </div>
      </main>
    </div>
  );
}
