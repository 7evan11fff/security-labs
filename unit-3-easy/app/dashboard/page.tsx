"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const t = localStorage.getItem("token");
    if (!t) { router.push("/login"); return; }
    setToken(t);
    fetch("/api/auth/me", { headers: { Authorization: `Bearer ${t}` } })
      .then(r => { if (!r.ok) { router.push("/login"); return; } return r.json(); })
      .then(d => d && setUser(d.user));
  }, [router]);

  if (!user) return <div className="min-h-screen bg-gray-900" />;

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PB</span>
            </div>
            <span className="font-semibold text-white">PulseBoard</span>
          </div>
          <Link href="/dashboard" className="text-sm text-orange-400">Dashboard</Link>
          <Link href="/admin" className="text-sm text-gray-400 hover:text-white transition">Admin</Link>
        </div>
        <span className="text-sm text-gray-400">{user.username} ({user.role})</span>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <p className="text-sm text-gray-400">Tasks Completed</p>
            <p className="text-2xl font-bold text-white mt-1">32</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <p className="text-sm text-gray-400">Goals Met</p>
            <p className="text-2xl font-bold text-white mt-1">8/10</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <p className="text-sm text-gray-400">Streak</p>
            <p className="text-2xl font-bold text-white mt-1">14 days</p>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3">Your Auth Token</h2>
          <p className="text-sm text-gray-400 mb-2">This JWT token is used for API authentication:</p>
          <div className="bg-gray-900 rounded-lg p-4 break-all">
            <code className="text-xs text-orange-300 font-mono">{token}</code>
          </div>
          <p className="text-xs text-gray-500 mt-3">Token is sent as: Authorization: Bearer &lt;token&gt;</p>
        </div>
      </main>
    </div>
  );
}
