import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="font-semibold text-white">ShipStack</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm text-emerald-400">Projects</Link>
            <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition">Deployments</Link>
            <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition">Domains</Link>
            <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition">Analytics</Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">developer@shipstack.io</span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "frontend-app", framework: "Next.js", status: "active", deploys: 45 },
            { name: "api-service", framework: "Express", status: "active", deploys: 128 },
            { name: "worker-queue", framework: "Node.js", status: "active", deploys: 23 },
            { name: "marketing-site", framework: "Astro", status: "paused", deploys: 12 },
          ].map((p) => (
            <div key={p.name} className="bg-gray-800 border border-gray-700 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-medium">{p.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${p.status === 'active' ? 'bg-emerald-900 text-emerald-300' : 'bg-gray-700 text-gray-400'}`}>{p.status}</span>
              </div>
              <p className="text-sm text-gray-400 mb-2">{p.framework}</p>
              <p className="text-xs text-gray-500">{p.deploys} deployments</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
