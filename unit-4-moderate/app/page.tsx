import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-950 to-gray-900">
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">AB</span>
          </div>
          <span className="font-bold text-white text-xl">AuthBridge</span>
        </div>
        <Link href="/login" className="bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition">Console</Link>
      </nav>
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Enterprise SSO<br /><span className="text-amber-400">secure & compliant.</span>
        </h1>
        <p className="text-xl text-amber-200/80 max-w-2xl mx-auto mb-10">
          AuthBridge provides OAuth 2.0 and SAML-based single sign-on for enterprise applications with strict redirect validation.
        </p>
        <Link href="/login" className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-3 rounded-lg font-medium transition text-lg inline-block">View Docs</Link>
      </main>
    </div>
  );
}
