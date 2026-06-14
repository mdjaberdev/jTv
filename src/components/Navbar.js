// src/components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400"
        >
          🏆 SPORTS<span className="text-white">LIVE</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-indigo-400 transition">
            Home
          </Link>
          <Link href="/schedule" className="hover:text-indigo-400 transition">
            Schedule
          </Link>
        </div>
      </div>
    </nav>
  );
}
