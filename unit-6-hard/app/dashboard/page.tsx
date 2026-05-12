"use client";

import { useState } from "react";

interface SearchResult { name: string; price: string | number; category: string; }

export default function Dashboard() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`);
    const data = await res.json();
    if (res.ok) setResults(data.results);
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="border-b border-gray-800 px-6 py-3 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">IT</span>
          </div>
          <span className="font-semibold text-white">InvenTrack</span>
        </div>
        <span className="text-sm text-gray-400">Inventory Search</span>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">Search Inventory</h1>

        <form onSubmit={handleSearch} className="flex gap-3 mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-lg font-medium transition">Search</button>
        </form>

        {results.length > 0 && (
          <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left px-4 py-3 text-sm text-gray-400">Name</th>
                  <th className="text-left px-4 py-3 text-sm text-gray-400">Price/Value</th>
                  <th className="text-left px-4 py-3 text-sm text-gray-400">Category</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr key={i} className="border-b border-gray-700 last:border-0">
                    <td className="px-4 py-3 text-sm text-white">{r.name}</td>
                    <td className="px-4 py-3 text-sm text-white">{r.price}</td>
                    <td className="px-4 py-3 text-sm text-gray-400">{r.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
