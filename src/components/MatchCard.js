// src/components/MatchCard.js
import Link from "next/link";

export default function MatchCard({ match }) {
  if (!match) return null;

  // Key selector alignment checking
  const currentId = match.id || match.ID || match.matchId;
  const isLive =
    match.status?.toLowerCase() === "live" ||
    match.type?.toLowerCase() === "live" ||
    true;

  return (
    <div className="bg-slate-800/90 rounded-xl p-6 border border-slate-700 text-center space-y-4 text-white shadow-xl">
      <div className="text-xs uppercase font-bold tracking-widest text-red-500 flex items-center justify-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
        {match.status || "LIVE"}
      </div>

      <h3 className="text-xl font-bold tracking-wide">
        {match.title || match.name}
      </h3>

      {/* 🚀 Dynamic parameter routing exact path hit korbe */}
      <Link href={`/watch/${currentId}`}>
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg font-medium transition active:scale-95 shadow-md">
          Watch Live
        </button>
      </Link>
    </div>
  );
}
