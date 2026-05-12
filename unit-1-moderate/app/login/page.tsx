"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">SS</span>
          </div>
          <h1 className="text-xl font-bold text-white">Sign in to ShipStack</h1>
        </div>
        <form className="bg-gray-800 rounded-xl p-6 space-y-4 border border-gray-700">
          <div>
            <label className="text-sm text-gray-400 block mb-1">Email</label>
            <input type="email" defaultValue="developer@shipstack.io" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="text-sm text-gray-400 block mb-1">Password</label>
            <input type="password" defaultValue="ship2025" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <button type="button" onClick={() => window.location.href = '/dashboard'} className="w-full bg-emerald-500 hover:bg-emerald-400 text-white py-2 rounded-lg font-medium transition">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
