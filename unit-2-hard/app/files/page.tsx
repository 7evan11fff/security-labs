"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function FilesPage() {
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/session").then(r => {
      if (!r.ok) router.push("/login");
    });
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-950">
      <nav className="border-b border-gray-800 px-6 py-3 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">VD</span>
          </div>
          <span className="font-semibold text-white">VaultDrive</span>
        </div>
        <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition">My Files</Link>
        <Link href="/files" className="text-sm text-indigo-400">Browse</Link>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">Shared Files</h1>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
          <p className="text-gray-400 mb-2">No shared files available.</p>
          <p className="text-sm text-gray-500">Files shared with you by team members will appear here.</p>
        </div>
      </main>
    </div>
  );
}
