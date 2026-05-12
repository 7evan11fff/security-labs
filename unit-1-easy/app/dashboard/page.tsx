import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DP</span>
            </div>
            <span className="font-semibold text-white">DevPulse</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm text-indigo-400">Dashboard</Link>
            <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition">Deployments</Link>
            <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition">Alerts</Link>
            <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition">Settings</Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">dev@devpulse.io</span>
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-xs text-white font-medium">DV</div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <p className="text-sm text-gray-400 mb-1">Total Deploys</p>
            <p className="text-2xl font-bold text-white">1,247</p>
            <p className="text-xs text-green-400 mt-1">+12% this month</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <p className="text-sm text-gray-400 mb-1">Success Rate</p>
            <p className="text-2xl font-bold text-white">98.3%</p>
            <p className="text-xs text-green-400 mt-1">+0.5% this month</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <p className="text-sm text-gray-400 mb-1">Avg Lead Time</p>
            <p className="text-2xl font-bold text-white">4.2m</p>
            <p className="text-xs text-yellow-400 mt-1">-0.3m this month</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <p className="text-sm text-gray-400 mb-1">Active Services</p>
            <p className="text-2xl font-bold text-white">23</p>
            <p className="text-xs text-gray-400 mt-1">3 new this month</p>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Deployments</h2>
          <div className="space-y-3">
            {[
              { service: "api-gateway", env: "production", status: "success", time: "2 min ago" },
              { service: "auth-service", env: "staging", status: "success", time: "15 min ago" },
              { service: "user-service", env: "production", status: "failed", time: "1 hour ago" },
              { service: "notification-svc", env: "production", status: "success", time: "3 hours ago" },
              { service: "analytics-api", env: "staging", status: "success", time: "5 hours ago" },
            ].map((d, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${d.status === 'success' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  <span className="text-sm text-white font-medium">{d.service}</span>
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">{d.env}</span>
                </div>
                <span className="text-xs text-gray-500">{d.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
