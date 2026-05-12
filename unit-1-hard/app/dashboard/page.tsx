import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950">
      <nav className="border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NX</span>
            </div>
            <span className="font-semibold text-white">Nexora</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm text-violet-400">Stacks</Link>
            <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition">Pipelines</Link>
            <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition">Policies</Link>
            <Link href="/status" className="text-sm text-gray-400 hover:text-white transition">Status</Link>
          </div>
        </div>
        <span className="text-sm text-gray-400">engineer@nexora.dev</span>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">Infrastructure Stacks</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "prod-us-east-1", provider: "AWS", resources: 47, status: "healthy" },
            { name: "prod-eu-west-1", provider: "AWS", resources: 32, status: "healthy" },
            { name: "staging-gcp", provider: "GCP", resources: 18, status: "drifted" },
            { name: "dev-azure", provider: "Azure", resources: 12, status: "healthy" },
          ].map((s) => (
            <div key={s.name} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">{s.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${s.status === 'healthy' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'}`}>{s.status}</span>
              </div>
              <p className="text-sm text-gray-400">{s.provider} &middot; {s.resources} resources</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
