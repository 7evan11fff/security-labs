import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900">
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-sky-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">TF</span>
          </div>
          <span className="font-bold text-white text-xl">TaskFlow</span>
        </div>
        <Link href="/login" className="bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition">Sign In</Link>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Project management,<br /><span className="text-sky-400">simplified.</span>
        </h1>
        <p className="text-xl text-sky-200/80 max-w-2xl mx-auto mb-10">
          TaskFlow helps teams plan, track, and deliver projects on time. Built for speed, designed for clarity.
        </p>
        <Link href="/login" className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-3 rounded-lg font-medium transition text-lg inline-block">
          Get Started
        </Link>
      </main>
    </div>
  );
}
