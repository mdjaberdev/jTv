"use client";

import { useState } from "react";
import channel from "./Channel.json";

export default function HomePage() {
  const [selectedChannel, setSelectedChannel] = useState(channel[0]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4">
        {/* Video Player */}
        <div className="overflow-hidden rounded-xl md:rounded-2xl border border-slate-800 bg-black shadow-lg">
          <video
            key={selectedChannel?.url}
            controls
            autoPlay
            className="w-full aspect-video"
          >
            <source src={selectedChannel?.url} />
          </video>
        </div>

        {/* Channel Info */}
        <div className="mt-4">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            {selectedChannel?.name}
          </h1>

          <div className="flex items-center gap-2 mt-2">
            <span className="bg-red-600 px-2 py-1 rounded-full text-[10px] sm:text-xs animate-pulse">
              LIVE
            </span>

            <span className="text-slate-400 text-xs sm:text-sm">
              {selectedChannel?.group}
            </span>
          </div>
        </div>

        {/* Channels Header */}
        <div className="mt-8 mb-4 flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold">📺 Live TV Channels</h2>

          <span className="text-slate-400 text-xs sm:text-sm">
            {channel.length} Channels
          </span>
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
          {channel.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedChannel(item)}
              className={`group rounded-xl border p-3 transition-all duration-300 ${
                selectedChannel?.id === item.id
                  ? "border-blue-500 bg-slate-800"
                  : "border-slate-800 bg-slate-900 hover:border-blue-500"
              }`}
            >
              <div className="flex justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <h3 className="mt-3 text-xs sm:text-sm font-semibold text-center line-clamp-2">
                {item.name}
              </h3>

              <p className="text-[10px] sm:text-xs text-slate-400 text-center mt-1 truncate">
                {item.group}
              </p>

              <div className="flex justify-center mt-3">
                <span className="bg-red-600 px-2 py-1 rounded-full text-[10px] sm:text-xs">
                  LIVE
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
