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
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TF</span>
            </div>
            <span className="font-semibold text-white">TaskFlow</span>
          </div>
          <Link href="/dashboard" className="text-sm text-sky-400">Dashboard</Link>
          <Link href="/profile" className="text-sm text-gray-400 hover:text-white transition">My Profile</Link>
        </div>
        <span className="text-sm text-gray-400">{user.name}</span>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">Welcome, {user.name.split(" ")[0]}</h1>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <p className="text-sm text-gray-400">My Tasks</p>
            <p className="text-2xl font-bold text-white mt-1">12</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <p className="text-sm text-gray-400">Completed</p>
            <p className="text-2xl font-bold text-white mt-1">47</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <p className="text-sm text-gray-400">Team Members</p>
            <p className="text-2xl font-bold text-white mt-1">50</p>
          </div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-3 text-sm">
            {["Completed task: Update API documentation", "Assigned to: Fix login timeout bug", "Comment on: Database migration plan", "Created task: Add rate limiting"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-slate-700 last:border-0">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
