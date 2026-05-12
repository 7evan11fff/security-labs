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
  phone: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/session").then(r => {
      if (!r.ok) { router.push("/login"); return; }
      return r.json();
    }).then(d => {
      if (d) {
        fetch(`/api/users/${d.user.id}`).then(r => r.json()).then(data => setProfile(data.user));
      }
    });
  }, [router]);

  if (!profile) return <div className="min-h-screen bg-slate-900" />;

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
        <Link href="/profile" className="text-sm text-teal-400">Profile</Link>
        <Link href="/team" className="text-sm text-gray-400 hover:text-white transition">Team</Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">My Profile</h1>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div><label className="text-sm text-gray-500">Name</label><p className="text-white">{profile.name}</p></div>
            <div><label className="text-sm text-gray-500">Email</label><p className="text-white">{profile.email}</p></div>
            <div><label className="text-sm text-gray-500">Role</label><p className="text-white capitalize">{profile.role}</p></div>
            <div><label className="text-sm text-gray-500">Department</label><p className="text-white">{profile.department}</p></div>
            <div><label className="text-sm text-gray-500">Phone</label><p className="text-white">{profile.phone}</p></div>
          </div>
          <div>
            <label className="text-sm text-gray-500">Notes</label>
            <p className="text-white mt-1">{profile.notes}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
