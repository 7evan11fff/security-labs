"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">NX</span>
          </div>
          <h1 className="text-xl font-bold text-white">Sign in to Nexora</h1>
        </div>
        <form className="bg-gray-900 rounded-xl p-6 space-y-4 border border-gray-800">
          <div>
            <label className="text-sm text-gray-400 block mb-1">Email</label>
            <input type="email" defaultValue="engineer@nexora.dev" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="text-sm text-gray-400 block mb-1">Password</label>
            <input type="password" defaultValue="nexora2025" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <button type="button" onClick={() => window.location.href = '/dashboard'} className="w-full bg-violet-500 hover:bg-violet-400 text-white py-2 rounded-lg font-medium transition">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
