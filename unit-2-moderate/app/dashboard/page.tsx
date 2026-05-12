"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const [user, setUser] = useState<{ id: number; name: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/session").then(r => {
      if (!r.ok) { router.push("/login"); return; }
      return r.json();
    }).then(d => d && setUser(d.user));
  }, [router]);

  if (!user) return <div className="min-h-screen bg-slate-900" />;

  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="border-b border-slate-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CH</span>
            </div>
            <span className="font-semibold text-white">CloudHub</span>
          </div>
          <Link href="/dashboard" className="text-sm text-teal-400">Dashboard</Link>
          <Link href="/profile" className="text-sm text-gray-400 hover:text-white transition">Profile</Link>
          <Link href="/team" className="text-sm text-gray-400 hover:text-white transition">Team</Link>
        </div>
        <span className="text-sm text-gray-400">{user.name}</span>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <p className="text-sm text-gray-400">Active Projects</p>
            <p className="text-2xl font-bold text-white mt-1">8</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <p className="text-sm text-gray-400">Open Issues</p>
            <p className="text-2xl font-bold text-white mt-1">23</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <p className="text-sm text-gray-400">Deployments Today</p>
            <p className="text-2xl font-bold text-white mt-1">5</p>
          </div>
        </div>
      </main>
    </div>
  );
}
