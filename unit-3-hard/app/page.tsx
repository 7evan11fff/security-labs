import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-red-950 to-gray-950">
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">SO</span>
          </div>
          <span className="font-bold text-white text-xl">SentinelOps</span>
        </div>
        <Link href="/login" className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition">Operator Login</Link>
      </nav>
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Security Operations<br /><span className="text-red-400">Unified.</span>
        </h1>
        <p className="text-xl text-red-200/80 max-w-2xl mx-auto mb-10">
          SentinelOps is the SOC platform that unifies threat detection, incident response, and security automation for enterprise teams.
        </p>
        <Link href="/login" className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-medium transition text-lg inline-block">Access Console</Link>
      </main>
    </div>
  );
}
