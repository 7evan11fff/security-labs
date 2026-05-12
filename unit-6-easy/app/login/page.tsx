"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: form.get("username"), password: form.get("password") }),
    });
    const data = await res.json();
    setQuery(data.debug_query || "");
    if (res.ok) router.push("/dashboard");
    else setError(data.error);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">SD</span>
          </div>
          <h1 className="text-xl font-bold text-white">Sign in to ShopDB</h1>
        </div>
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-6 space-y-4 border border-gray-700">
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <div>
            <label className="text-sm text-gray-400 block mb-1">Username</label>
            <input name="username" type="text" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter username" />
          </div>
          <div>
            <label className="text-sm text-gray-400 block mb-1">Password</label>
            <input name="password" type="text" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter password" />
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-lg font-medium transition">Sign In</button>
        </form>
        {query && (
          <div className="mt-4 bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1">SQL Query Executed:</p>
            <code className="text-xs text-green-300 font-mono break-all">{query}</code>
          </div>
        )}
      </div>
    </div>
  );
}
