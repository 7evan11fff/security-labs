import Link from "next/link";

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <nav className="border-b border-gray-800 px-6 py-3 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">NX</span>
          </div>
          <span className="font-semibold text-white">Nexora Status</span>
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <h1 className="text-2xl font-bold text-white">All Systems Operational</h1>
        </div>

        <div className="space-y-4 mb-12">
          {[
            { name: "API Gateway", status: "operational" },
            { name: "Compute Engine", status: "operational" },
            { name: "Policy Engine", status: "operational" },
            { name: "State Storage", status: "operational" },
            { name: "Web Dashboard", status: "operational" },
          ].map((s) => (
            <div key={s.name} className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-lg px-5 py-3">
              <span className="text-white">{s.name}</span>
              <span className="text-sm text-green-400 capitalize">{s.status}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Incidents</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Elevated API Latency</span>
                <span className="text-xs text-gray-400">July 10, 2025</span>
              </div>
              <p className="text-sm text-gray-400">Resolved — caused by misconfigured rate limiter. Diagnostics captured via internal debug tooling at <code className="text-violet-300">/api/.well-known/api-meta</code></p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Deployment Pipeline Stall</span>
                <span className="text-xs text-gray-400">June 28, 2025</span>
              </div>
              <p className="text-sm text-gray-400">Resolved — state lock conflict in prod-us-east-1 stack.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
