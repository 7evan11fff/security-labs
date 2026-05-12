"use client";

import { useState } from "react";

interface SearchResult { name: string; price: string | number; category: string; }

export default function Dashboard() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`);
    const data = await res.json();
    if (res.ok) {
      setResults(data.results);
      setQuery(data.debug_query);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="border-b border-gray-800 px-6 py-3 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SD</span>
          </div>
          <span className="font-semibold text-white">ShopDB</span>
        </div>
        <span className="text-sm text-gray-400">Product Search</span>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">Search Products</h1>

        <form onSubmit={handleSearch} className="flex gap-3 mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for products..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button type="submit" className="bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-lg font-medium transition">Search</button>
        </form>

        {query && (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 mb-6">
            <p className="text-xs text-gray-500 mb-1">SQL Query:</p>
            <code className="text-xs text-green-300 font-mono break-all">{query}</code>
          </div>
        )}

        {results.length > 0 && (
          <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left px-4 py-3 text-sm text-gray-400 font-medium">Name</th>
                  <th className="text-left px-4 py-3 text-sm text-gray-400 font-medium">Price</th>
                  <th className="text-left px-4 py-3 text-sm text-gray-400 font-medium">Category</th>
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
