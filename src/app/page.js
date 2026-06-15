

import MatchCard from "@/components/MatchCard";
import channel from "@/app/Channel.json"; // Safe absolute path alignment

export default function HomePage() {
  const sampleMatches = Array.isArray(channel) ? channel : [];

  return (
    <div className="space-y-8 text-white p-6 max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Live & Upcoming Matches
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Select a match to start streaming live sports.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleMatches.map((match, index) => {
          // 💡 Logic: id, ID, matchId ba index number fallback auto tracker
          const uniqueId =
            match.id ||
            match.ID ||
            match.matchId ||
            match._id ||
            `match-${index}`;

          const normalizedMatch = {
            ...match,
            id: uniqueId,
            title:
              match.name ||
              match.title ||
              `${match.team1 || "Team A"} vs ${match.team2 || "Team B"}`,
          };

          return <MatchCard key={String(uniqueId)} match={normalizedMatch} />;
        })}
      </div>

      {sampleMatches.length === 0 && (
        <p className="text-center text-slate-500 py-10">
          No matches found in Channel.json
        </p>
      )}
    </div>
  );
}
