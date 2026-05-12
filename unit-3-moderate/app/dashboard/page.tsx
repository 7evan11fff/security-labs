"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState<Record<string, unknown> | null>(null);
  const [token, setToken] = useState("");
  const [endpoints, setEndpoints] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const t = localStorage.getItem("mv_token");
    if (!t) { router.push("/login"); return; }
    setToken(t);
    fetch("/api/auth/me", { headers: { Authorization: `Bearer ${t}` } })
      .then(r => { if (!r.ok) { router.push("/login"); return; } return r.json(); })
      .then(d => { if (d) { setUser(d.user); setEndpoints(d.available_endpoints || []); } });
  }, [router]);

  if (!user) return <div className="min-h-screen bg-gray-900" />;

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="border-b border-gray-800 px-6 py-3 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">MV</span>
          </div>
          <span className="font-semibold text-white">MetricVault</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        <h1 className="text-2xl font-bold text-white">Welcome, {String(user.name)}</h1>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3">Session Info</h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div><span className="text-gray-400">Role:</span> <span className="text-white ml-2">{String(user.role)}</span></div>
            <div><span className="text-gray-400">Tier:</span> <span className="text-white ml-2">{String(user.tier)}</span></div>
            <div><span className="text-gray-400">Email:</span> <span className="text-white ml-2">{String(user.email)}</span></div>
            <div><span className="text-gray-400">User ID:</span> <span className="text-white ml-2">{String(user.sub)}</span></div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3">Your JWT Token</h2>
          <div className="bg-gray-900 rounded-lg p-4 break-all">
            <code className="text-xs text-rose-300 font-mono">{token}</code>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3">Available API Endpoints</h2>
          <ul className="space-y-2">
            {endpoints.map((ep, i) => (
              <li key={i} className="text-sm text-gray-300 font-mono bg-gray-900 rounded px-3 py-2">{ep}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
