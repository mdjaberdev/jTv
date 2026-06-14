// src/components/LivePlayer.js
"use client";

import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function LivePlayer({ streamUrl }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // URL na thakle ba player ready na thakle kichu korbe na
    if (!streamUrl || !videoRef.current) return;

    // Prothome jodi kono player instance thake, seta clean up korbe
    if (playerRef.current) {
      playerRef.current.src({
        src: streamUrl,
        type: streamUrl.includes(".m3u8")
          ? "application/x-mpegURL"
          : "video/mp4",
      });
      return;
    }

    // Video.js initialize kora hocche
    playerRef.current = videojs(videoRef.current, {
      controls: true,
      autoplay: true,
      preload: "auto",
      fluid: true, // Player reponsive korbe
      responsive: true,
      sources: [
        {
          src: streamUrl,
          // Jodi .m3u8 link (HLS) hoy tobe automatic handle korbe, nahole standard mp4
          type: streamUrl.includes(".m3u8")
            ? "application/x-mpegURL"
            : "video/mp4",
        },
      ],
    });

    // Component unmount hole player destroy kore memory clear korbe
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [streamUrl]);

  // Stream URL na thakle error screen
  if (!streamUrl) {
    return (
      <div className="aspect-video w-full rounded-xl flex flex-col items-center justify-center bg-slate-950 border border-dashed border-slate-800 text-center p-6 text-slate-400">
        <span className="text-4xl mb-2">⚠️</span>
        <p className="font-semibold text-amber-500">Streaming Link Missing!</p>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-700 shadow-2xl">
      <div data-vjs-player>
        <video
          ref={videoRef}
          className="video-js vjs-big-play-centered w-full h-full"
        />
      </div>
    </div>
  );
}
