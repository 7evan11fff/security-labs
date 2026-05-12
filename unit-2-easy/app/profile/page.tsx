"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface UserProfile {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  notes: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [sessionUserId, setSessionUserId] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/session").then(r => {
      if (!r.ok) { router.push("/login"); return; }
      return r.json();
    }).then(d => {
      if (d) {
        setSessionUserId(d.user.id);
        fetch(`/api/users/${d.user.id}`).then(r => r.json()).then(data => setUser(data.user));
      }
    });
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
          <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition">Dashboard</Link>
          <Link href="/profile" className="text-sm text-sky-400">My Profile</Link>
        </div>
        <span className="text-sm text-gray-400">{user.name}</span>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">My Profile</h1>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center text-xl font-bold text-white">
              {user.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{user.name}</h2>
              <p className="text-gray-400">{user.role} &middot; {user.department}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm text-gray-500 block mb-1">Email</label>
              <p className="text-white">{user.email}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500 block mb-1">User ID</label>
              <p className="text-white">{user.id}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500 block mb-1">Department</label>
              <p className="text-white">{user.department}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500 block mb-1">Role</label>
              <p className="text-white capitalize">{user.role}</p>
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-500 block mb-1">Notes</label>
            <p className="text-white bg-slate-700 rounded-lg px-4 py-3">{user.notes}</p>
          </div>
        </div>

        <div className="mt-4 bg-sky-900/30 border border-sky-700 rounded-xl p-4 text-sm text-sky-300">
          Profile data loaded from: <code className="bg-sky-900/50 px-1.5 py-0.5 rounded">/api/users/{sessionUserId}</code>
        </div>
      </main>
    </div>
  );
}
