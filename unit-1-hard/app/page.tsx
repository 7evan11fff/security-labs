import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-violet-950 to-gray-950">
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-violet-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">NX</span>
          </div>
          <span className="font-bold text-white text-xl">Nexora</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/status" className="text-violet-200 hover:text-white transition text-sm">Status</Link>
          <Link href="/login" className="text-violet-200 hover:text-white transition text-sm">Sign In</Link>
          <Link href="/login" className="bg-violet-500 hover:bg-violet-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition">Start Free</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Infrastructure as Code,<br />
            <span className="text-violet-400">simplified.</span>
          </h1>
          <p className="text-xl text-violet-200/80 max-w-2xl mx-auto mb-10">
            Nexora automates provisioning, deployment, and monitoring across any cloud provider. Define, deploy, and manage with confidence.
          </p>
          <Link href="/login" className="bg-violet-500 hover:bg-violet-400 text-white px-8 py-3 rounded-lg font-medium transition text-lg inline-block">
            Get Started
          </Link>
        </div>

        <div className="mt-28 grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-2">Multi-Cloud</h3>
            <p className="text-violet-200/70">AWS, GCP, Azure — manage all your infrastructure from one platform with unified templates.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-2">GitOps Native</h3>
            <p className="text-violet-200/70">Every change through version control. Audit trails, rollbacks, and drift detection built-in.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-2">Policy Engine</h3>
            <p className="text-violet-200/70">Enforce compliance before deployment with OPA-based policy checks and guardrails.</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 text-center">
        <p className="text-violet-200/50 text-sm">&copy; 2025 Nexora Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}
