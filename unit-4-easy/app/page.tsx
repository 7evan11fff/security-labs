import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-950 to-gray-900">
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">CI</span>
          </div>
          <span className="font-bold text-white text-xl">ConnectID</span>
        </div>
        <Link href="/login" className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition">Developer Portal</Link>
      </nav>
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          OAuth 2.0<br /><span className="text-cyan-400">made simple.</span>
        </h1>
        <p className="text-xl text-cyan-200/80 max-w-2xl mx-auto mb-10">
          ConnectID provides secure OAuth 2.0 authentication for your applications. Integrate sign-in with just a few API calls.
        </p>
        <Link href="/login" className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-medium transition text-lg inline-block">Get Started</Link>

        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto text-left">
          <h2 className="text-lg font-semibold text-white mb-4">OAuth Flow</h2>
          <div className="space-y-3 text-sm text-cyan-200/70">
            <p>1. Client redirects user to <code className="bg-cyan-900/50 px-1.5 rounded">/api/oauth/authorize?redirect_uri=YOUR_URL&response_type=code</code></p>
            <p>2. User authenticates and grants access</p>
            <p>3. Server redirects back to your <code className="bg-cyan-900/50 px-1.5 rounded">redirect_uri</code> with an authorization code</p>
            <p>4. Exchange code at <code className="bg-cyan-900/50 px-1.5 rounded">/api/oauth/callback?code=CODE</code> for an access token</p>
            <p>5. Use token at <code className="bg-cyan-900/50 px-1.5 rounded">/api/oauth/userinfo</code> with Bearer auth</p>
          </div>
          <p className="mt-4 text-xs text-cyan-300/50">Registered redirect URI: https://app.connectid.local/callback</p>
        </div>
      </main>
    </div>
  );
}
