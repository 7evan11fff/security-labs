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
      body: JSON.stringify({ email: form.get("email"), password: form.get("password") }),
    });
    if (res.ok) router.push("/dashboard");
    else setError("Invalid credentials");
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">CH</span>
          </div>
          <h1 className="text-xl font-bold text-white">Sign in to CloudHub</h1>
        </div>
        <form onSubmit={handleSubmit} className="bg-slate-800 rounded-xl p-6 space-y-4 border border-slate-700">
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <div>
            <label className="text-sm text-gray-400 block mb-1">Email</label>
            <input name="email" type="email" defaultValue="taylor@cloudhub.dev" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="text-sm text-gray-400 block mb-1">Password</label>
            <input name="password" type="password" defaultValue="cloudpass1" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <button type="submit" className="w-full bg-teal-500 hover:bg-teal-400 text-white py-2 rounded-lg font-medium transition">Sign In</button>
        </form>
      </div>
    </div>
  );
}
