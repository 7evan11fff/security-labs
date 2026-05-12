import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900">
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">SS</span>
          </div>
          <span className="font-bold text-white text-xl">ShipStack</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-emerald-200 hover:text-white transition text-sm">Sign In</Link>
          <Link href="/login" className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition">Deploy Now</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ship faster.<br />
            <span className="text-emerald-400">Scale effortlessly.</span>
          </h1>
          <p className="text-xl text-emerald-200/80 max-w-2xl mx-auto mb-10">
            ShipStack handles your deployments, auto-scaling, and monitoring so you can focus on building great products.
          </p>
          <Link href="/login" className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-lg font-medium transition text-lg inline-block">
            Get Started Free
          </Link>
        </div>

        <div className="mt-28 grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-2">Zero-Config Deploys</h3>
            <p className="text-emerald-200/70">Push to git and we handle the rest. Automatic builds, previews, and rollbacks.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-2">Global Edge Network</h3>
            <p className="text-emerald-200/70">Deploy to 40+ regions worldwide with automatic edge caching and CDN.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-2">Built-in Observability</h3>
            <p className="text-emerald-200/70">Logs, metrics, and tracing built into every deployment. No extra setup needed.</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 text-center">
        <p className="text-emerald-200/50 text-sm">&copy; 2025 ShipStack Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
