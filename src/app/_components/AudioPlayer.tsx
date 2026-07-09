"use client";

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";

export interface AudioAPI {
  play: () => void;
}

const START_OFFSET = 9; // la canción arranca en el segundo 9

const AudioPlayer = forwardRef<AudioAPI>(function AudioPlayer(_props, ref) {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const seekStart = () => {
    const a = audioRef.current;
    if (a && a.currentTime < START_OFFSET) {
      try {
        a.currentTime = START_OFFSET;
      } catch {
        /* ignore */
      }
    }
  };

  useImperativeHandle(ref, () => ({
    play: () => {
      const a = audioRef.current;
      if (!a) return;
      setVisible(true);
      seekStart();
      a.play().catch(() => {});
    },
  }));

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onLoaded = () => seekStart();
    const onEnded = () => {
      // al terminar, reinicia en el segundo 9 (loop personalizado)
      try {
        a.currentTime = START_OFFSET;
      } catch {
        /* ignore */
      }
      a.play().catch(() => {});
    };
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    a.addEventListener("loadedmetadata", onLoaded);
    a.addEventListener("ended", onEnded);
    return () => {
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
      a.removeEventListener("loadedmetadata", onLoaded);
      a.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    setVisible(true);
    if (a.paused) {
      seekStart();
      a.play().catch(() => {});
    } else {
      a.pause();
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/cancion.mp3" preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        className={`vinyl-btn ${visible ? "is-ready" : ""} ${playing ? "is-playing" : ""}`}
        type="button"
      >
        <div className="vinyl-tonearm">
          <div className="vinyl-tonearm-pivot" />
          <div className="vinyl-tonearm-line" />
          <div className="vinyl-tonearm-head" />
        </div>
        <div className="vinyl-spin">
          <div className="vinyl-disc">
            <div className="vinyl-sheen" />
            <div className="vinyl-label-text">
              LJ<small>2026</small>
            </div>
            <div className="vinyl-hole" />
          </div>
        </div>
        <div className="vinyl-icons">
          <svg className="vinyl-icon-play" viewBox="0 0 24 24" fill="var(--bg-cream)" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
          <svg className="vinyl-icon-pause" viewBox="0 0 24 24" fill="var(--bg-cream)" aria-hidden="true">
            <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
          </svg>
        </div>
      </button>
    </>
  );
});

export default AudioPlayer;
