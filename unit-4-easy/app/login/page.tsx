"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">CI</span>
          </div>
          <h1 className="text-xl font-bold text-white">ConnectID Developer Portal</h1>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 space-y-4">
          <h2 className="text-white font-medium">OAuth 2.0 Test Console</h2>
          <p className="text-sm text-gray-400">Use the authorization endpoint to start an OAuth flow:</p>
          <div className="bg-gray-900 rounded-lg p-4">
            <code className="text-xs text-cyan-300 break-all">
              GET /api/oauth/authorize?redirect_uri=https://app.connectid.local/callback&response_type=code
            </code>
          </div>
          <p className="text-sm text-gray-400">The registered app redirect URI is:</p>
          <div className="bg-gray-900 rounded-lg p-3">
            <code className="text-xs text-gray-300">https://app.connectid.local/callback</code>
          </div>
          <p className="text-xs text-gray-500">Try the flow using curl or your browser&apos;s address bar.</p>
        </div>
      </div>
    </div>
  );
}
