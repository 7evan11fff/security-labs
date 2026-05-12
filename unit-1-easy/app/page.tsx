import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-indigo-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">DP</span>
          </div>
          <span className="font-bold text-white text-xl">DevPulse</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-indigo-200 hover:text-white transition text-sm">Sign In</Link>
          <Link href="/login" className="bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition">Get Started</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Developer Analytics<br />
            <span className="text-indigo-400">Built for Speed</span>
          </h1>
          <p className="text-xl text-indigo-200/80 max-w-2xl mx-auto mb-10">
            Track deployments, monitor performance, and gain insights into your team&apos;s development workflow. All in one platform.
          </p>
          <Link href="/login" className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-3 rounded-lg font-medium transition text-lg inline-block">
            Start Free Trial
          </Link>
        </div>

        <div className="mt-28 grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Deploy Metrics</h3>
            <p className="text-indigo-200/70">Track deployment frequency, lead time, and failure rates across all your services.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Real-Time Alerts</h3>
            <p className="text-indigo-200/70">Get notified instantly when deployments fail or performance degrades.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Team Insights</h3>
            <p className="text-indigo-200/70">Understand team velocity and identify bottlenecks in your development process.</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 text-center">
        <p className="text-indigo-200/50 text-sm">&copy; 2025 DevPulse Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
