// src/app/schedule/page.js
export default function SchedulePage() {
  const upcoming = [
    {
      id: "101",
      teams: "Brazil vs Argentina",
      date: "June 18",
      time: "06:00 AM",
      tournament: "World Cup Qualifier",
    },
    {
      id: "102",
      teams: "Man City vs Liverpool",
      date: "June 20",
      time: "08:30 PM",
      tournament: "Premier League",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold border-b border-slate-700 pb-2">
        📅 Upcoming Match Schedule
      </h1>

      <div className="space-y-4">
        {upcoming.map((match) => (
          <div
            key={match.id}
            className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                {match.tournament}
              </span>
              <h3 className="text-xl font-bold mt-1">{match.teams}</h3>
            </div>
            <div className="text-left sm:text-right">
              <p className="font-medium text-slate-200">{match.date}</p>
              <p className="text-sm text-slate-400">{match.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
