import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">IT</span>
          </div>
          <span className="font-bold text-white text-xl">InvenTrack</span>
        </div>
        <Link href="/login" className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition">Sign In</Link>
      </nav>
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Inventory control,<br /><span className="text-blue-400">simplified.</span>
        </h1>
        <p className="text-xl text-blue-200/80 max-w-2xl mx-auto mb-10">
          InvenTrack helps warehouses and retailers manage stock levels, track orders, and prevent stockouts.
        </p>
        <Link href="/login" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-lg font-medium transition text-lg inline-block">Access System</Link>
      </main>
    </div>
  );
}
