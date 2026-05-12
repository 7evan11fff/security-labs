"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FileItem { id: number; filename: string; createdAt: string; }

export default function Dashboard() {
  const [user, setUser] = useState<{ id: number; name: string } | null>(null);
  const [myFiles, setMyFiles] = useState<FileItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/session").then(r => {
      if (!r.ok) { router.push("/login"); return; }
      return r.json();
    }).then(d => {
      if (d) {
        setUser(d.user);
        fetch(`/api/v1/users/${d.user.id}/files`).then(r => r.json()).then(f => setMyFiles(f.files || []));
      }
    });
  }, [router]);

  if (!user) return <div className="min-h-screen bg-gray-950" />;

  return (
    <div className="min-h-screen bg-gray-950">
      <nav className="border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VD</span>
            </div>
            <span className="font-semibold text-white">VaultDrive</span>
          </div>
          <Link href="/dashboard" className="text-sm text-indigo-400">My Files</Link>
          <Link href="/files" className="text-sm text-gray-400 hover:text-white transition">Browse</Link>
        </div>
        <span className="text-sm text-gray-400">{user.name}</span>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">My Files</h1>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          {myFiles.length === 0 ? (
            <p className="p-6 text-gray-400">No files found.</p>
          ) : (
            myFiles.map(f => (
              <div key={f.id} className="flex items-center justify-between px-6 py-4 border-b border-gray-800 last:border-0">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <span className="text-white">{f.filename}</span>
                </div>
                <span className="text-sm text-gray-500">{f.createdAt}</span>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
