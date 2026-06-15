// src/components/MatchCard.js
import Link from "next/link";

export default function MatchCard({ match }) {
  return (
    <a href={`/watch/${match.id}`}>
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer">
        {/* Logo Section */}
        <div className="h-40 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
          <img
            src={match.logo}
            alt={match.title}
            className="w-28 h-28 rounded-full object-cover shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="font-bold text-lg truncate">{match.title}</h2>

          <p className="text-slate-400 text-sm mt-1">
            {match.group || "Live TV"}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="px-3 py-1 bg-red-600 text-xs rounded-full">
              LIVE
            </span>

            <span className="text-blue-400 text-sm">Watch →</span>
          </div>
        </div>
      </div>
    </a>
  );
}
