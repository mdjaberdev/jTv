// src/app/watch/[id]/page.js
import LivePlayer from "@/components/LivePlayer";
import channel from "@/app/Channel.json"; // Absolute direct target reference

export default async function WatchPage({ params }) {
  const resolvedParams = await params;
  const channelId = resolvedParams.id; // URL structure tracking code fetch

  // Match loop structure logic
  const currentChannel = channel.find((ch, index) => {
    const currentId =
      ch.id || ch.ID || ch.matchId || ch._id || `match-${index}`;
    return String(currentId).toLowerCase() === String(channelId).toLowerCase();
  });

  if (!currentChannel) {
    return (
      <div className="text-center py-20 text-white space-y-2">
        <h2 className="text-2xl font-bold text-red-500">Channel Not Found!</h2>
        <p className="text-xs text-slate-500">
          Requested Browser routing parameter ID: "{channelId}"
        </p>
      </div>
    );
  }

  // Active exact property link value schema tracking
  const finalStreamUrl =
    currentChannel.streamUrl ||
    currentChannel.url ||
    currentChannel.link ||
    currentChannel.stream ||
    currentChannel.channel_url;

  return (
    <div className="max-w-5xl mx-auto space-y-6 text-white p-6">
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-400 tracking-wide">
          Watching:{" "}
          {currentChannel.name || currentChannel.title || "Live Stream"}
        </h1>
      </div>

      {/* Simple standard LivePlayer component */}
      <LivePlayer streamUrl={finalStreamUrl} />

      <div className="p-4 bg-slate-800 rounded-xl text-xs text-slate-400 break-all font-mono">
        Active Source: {String(finalStreamUrl)}
      </div>
    </div>
  );
}
