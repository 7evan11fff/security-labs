"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TeamPage() {
  const [team, setTeam] = useState<{ name: string; department: string; role: string }[]>([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/session").then(r => {
      if (!r.ok) { router.push("/login"); return; }
      return r.json();
    }).then(() => {
      fetch("/api/team").then(r => r.json()).then(d => {
        setTeam(d.team);
        setTotal(d.total);
      });
    });
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="border-b border-slate-800 px-6 py-3 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CH</span>
          </div>
          <span className="font-semibold text-white">CloudHub</span>
        </div>
        <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition">Dashboard</Link>
        <Link href="/profile" className="text-sm text-gray-400 hover:text-white transition">Profile</Link>
        <Link href="/team" className="text-sm text-teal-400">Team</Link>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Team Directory</h1>
          <span className="text-sm text-gray-400">{total} members total</span>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
          {team.map((m, i) => (
            <div key={i} className="flex items-center justify-between px-6 py-4 border-b border-slate-700 last:border-0">
              <div>
                <p className="text-white font-medium">{m.name}</p>
                <p className="text-sm text-gray-400">{m.role} &middot; {m.department}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">Showing first 7 of {total} team members.</p>
      </main>
    </div>
  );
}
