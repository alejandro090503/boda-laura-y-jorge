"use client";

import { useState, useRef } from "react";

const AUDIO_URL =
  "https://xjtqyqhkujzlwxorybmr.supabase.co/storage/v1/object/public/fotos-clientes/audio/boda-laura-y-jorge/cancion.mp3";

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src={AUDIO_URL} preload="none" loop />
      <button
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-95"
        style={{
          width: 48,
          height: 48,
          background: `radial-gradient(circle at 35% 35%, #c9a366, var(--gold-antique) 60%, #8a6d3b)`,
          boxShadow: "0 2px 12px rgba(59,48,40,0.25)",
        }}
      >
        {playing ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="var(--bg-cream)"
          >
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="var(--bg-cream)"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  );
}
