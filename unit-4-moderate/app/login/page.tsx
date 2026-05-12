"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">AB</span>
          </div>
          <h1 className="text-xl font-bold text-white">AuthBridge OAuth Console</h1>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 space-y-4">
          <h2 className="text-white font-medium">OAuth 2.0 Authorization Code Flow</h2>
          <div className="space-y-3 text-sm text-gray-300">
            <div>
              <p className="text-gray-400 mb-1">Step 1: Authorize</p>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-xs text-amber-300 break-all">GET /api/oauth/authorize?redirect_uri=https://dashboard.authbridge.io/callback&client_id=app1</code>
              </div>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Step 2: Exchange code for token</p>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-xs text-amber-300 break-all">POST /api/oauth/token {`{"code": "CODE_FROM_STEP_1"}`}</code>
              </div>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Step 3: Access protected resource</p>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-xs text-amber-300 break-all">GET /api/oauth/protected (Authorization: Bearer TOKEN)</code>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-xs text-gray-500">Registered redirect URI prefix: <code>https://dashboard.authbridge.io</code></p>
            <p className="text-xs text-gray-500 mt-1">Validation: redirect_uri must start with the registered prefix.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
