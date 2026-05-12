"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: form.get("username"), password: form.get("password") }),
    });
    if (res.ok) router.push("/dashboard");
    else setError("Invalid credentials");
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">VD</span>
          </div>
          <h1 className="text-xl font-bold text-white">Sign in to VaultDrive</h1>
        </div>
        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-xl p-6 space-y-4 border border-gray-800">
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <div>
            <label className="text-sm text-gray-400 block mb-1">Username</label>
            <input name="username" type="text" defaultValue="dev_riley" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="text-sm text-gray-400 block mb-1">Password</label>
            <input name="password" type="password" defaultValue="riley2025!" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-400 text-white py-2 rounded-lg font-medium transition">Sign In</button>
        </form>
      </div>
    </div>
  );
}
