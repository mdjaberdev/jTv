// src/components/ChannelCard.js
import Link from "next/link";

export default function ChannelCard({ channel }) {
  if (!channel) return null;

  // 💡 Jaber ekhane khyal koro: database field parsing check
  // JSON array records-e keys capital "ID" holeo eita auto dynamic read korbe
  const currentId =
    channel.ID || channel.id || channel._id || channel.channel_id;

  return (
    <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 shadow-lg text-center space-y-4 text-white">
      <div className="w-16 h-16 bg-slate-700 rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-indigo-400">
        📺
      </div>

      <div>
        <h3 className="text-xl font-bold tracking-wide">
          {channel.name || channel.channelName || "Live TV"}
        </h3>
        <p className="text-xs text-emerald-400 font-medium mt-1">● Live Now</p>
      </div>

      {/* Dynamic exact tracking clean route navigation */}
      <Link href={`/watch/${currentId}`}>
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition active:scale-95 shadow-md">
          Watch Channel
        </button>
      </Link>
    </div>
  );
}
