"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");
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
    if (res.ok) router.push("/dashboard");
    else setError(data.error + (data.debug_query ? ` [Query: ${data.debug_query}]` : ""));
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-lime-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">DM</span>
          </div>
          <h1 className="text-xl font-bold text-white">DataMarket Login</h1>
          <p className="text-sm text-gray-400 mt-2">SQL debug mode is enabled for this environment</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-6 space-y-4 border border-gray-700">
          {error && <p className="text-red-400 text-sm break-all">{error}</p>}
          <div>
            <label className="text-sm text-gray-400 block mb-1">Username</label>
            <input name="username" type="text" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-lime-500" placeholder="Enter username" />
          </div>
          <div>
            <label className="text-sm text-gray-400 block mb-1">Password</label>
            <input name="password" type="text" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-lime-500" placeholder="Enter password" />
          </div>
          <button type="submit" className="w-full bg-lime-500 hover:bg-lime-400 text-white py-2 rounded-lg font-medium transition">Sign In</button>
        </form>
        <p className="text-xs text-gray-600 mt-4 text-center">Hint: Valid accounts exist. The login form uses raw SQL queries.</p>
      </div>
    </div>
  );
}
