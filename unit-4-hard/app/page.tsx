import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-fuchsia-950 to-gray-950">
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-fuchsia-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">VA</span>
          </div>
          <span className="font-bold text-white text-xl">VeriAuth</span>
        </div>
        <Link href="/login" className="bg-fuchsia-500 hover:bg-fuchsia-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition">Dev Console</Link>
      </nav>
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Identity verification<br /><span className="text-fuchsia-400">you can trust.</span>
        </h1>
        <p className="text-xl text-fuchsia-200/80 max-w-2xl mx-auto mb-10">
          VeriAuth provides hardened OAuth 2.0 flows with strict redirect URI validation and advanced security controls.
        </p>
        <Link href="/login" className="bg-fuchsia-500 hover:bg-fuchsia-400 text-white px-8 py-3 rounded-lg font-medium transition text-lg inline-block">Explore API</Link>
      </main>
    </div>
  );
}
