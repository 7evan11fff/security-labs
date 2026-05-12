"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminPage() {
  const [result, setResult] = useState<{ flag?: string; error?: string; role_provided?: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { router.push("/login"); return; }
    fetch("/api/admin", { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json())
      .then(d => setResult(d));
  }, [router]);

  if (!result) return <div className="min-h-screen bg-gray-900" />;

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="border-b border-gray-800 px-6 py-3 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PB</span>
          </div>
          <span className="font-semibold text-white">PulseBoard</span>
        </div>
        <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition">Dashboard</Link>
        <Link href="/admin" className="text-sm text-orange-400">Admin</Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">Admin Panel</h1>

        {result.error ? (
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-6">
            <p className="text-red-400 font-medium mb-2">Access Denied</p>
            <p className="text-red-300 text-sm">{result.error}</p>
            {result.role_provided && (
              <p className="text-red-400/70 text-xs mt-2">Your current role: <code>{result.role_provided}</code></p>
            )}
          </div>
        ) : (
          <div className="bg-green-900/30 border border-green-700 rounded-xl p-6">
            <p className="text-green-400 font-medium mb-2">Admin Access Granted</p>
            <p className="text-green-300 text-lg font-mono mt-4">{result.flag}</p>
          </div>
        )}
      </main>
    </div>
  );
}
