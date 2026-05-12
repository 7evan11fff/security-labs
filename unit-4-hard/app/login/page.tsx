"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-fuchsia-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">VA</span>
          </div>
          <h1 className="text-xl font-bold text-white">VeriAuth API Documentation</h1>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 space-y-4">
          <h2 className="text-white font-medium">OAuth 2.0 Endpoints</h2>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-400 mb-1">1. Authorization (issues code)</p>
              <div className="bg-gray-950 rounded-lg p-3">
                <code className="text-xs text-fuchsia-300 break-all">GET /api/oauth/authorize?redirect_uri=&lt;same-origin URL&gt;</code>
              </div>
              <p className="text-xs text-gray-500 mt-1">redirect_uri must be on the same origin as this application.</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">2. Token Exchange</p>
              <div className="bg-gray-950 rounded-lg p-3">
                <code className="text-xs text-fuchsia-300 break-all">POST /api/oauth/exchange {`{"code":"..."}`}</code>
              </div>
            </div>
            <div>
              <p className="text-gray-400 mb-1">3. Protected Resource</p>
              <div className="bg-gray-950 rounded-lg p-3">
                <code className="text-xs text-fuchsia-300 break-all">GET /api/oauth/resource (Authorization: Bearer TOKEN)</code>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-4">
            <p className="text-xs text-gray-500">Other available endpoints:</p>
            <div className="bg-gray-950 rounded-lg p-3 mt-2">
              <code className="text-xs text-gray-400 break-all">GET /api/redirect?url=&lt;destination&gt; — Partner link redirect service</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
