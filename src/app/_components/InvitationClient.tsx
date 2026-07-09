"use client";

import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import EnvelopeLoader from "./EnvelopeLoader";
import AudioPlayer, { AudioAPI } from "./AudioPlayer";
import Petals from "./Petals";
import HeroCard from "./cards/HeroCard";
import CeremonyCard from "./cards/CeremonyCard";
import ReceptionCard from "./cards/ReceptionCard";
import ItineraryCard from "./cards/ItineraryCard";
import DressCodeCard from "./cards/DressCodeCard";
import HotelsCard from "./cards/HotelsCard";
import GiftsCard from "./cards/GiftsCard";
import RSVPCard from "./cards/RSVPCard";

export default function InvitationClient() {
  const [phase, setPhase] = useState<"envelope" | "cards">("envelope");
  const audioRef = useRef<AudioAPI>(null);

  return (
    <>
      {/* Audio siempre montado para poder arrancar dentro del gesto de tap */}
      <AudioPlayer ref={audioRef} />

      <AnimatePresence>
        {phase === "envelope" && (
          <EnvelopeLoader
            key="env"
            onTap={() => audioRef.current?.play()}
            onOpen={() => setPhase("cards")}
          />
        )}
      </AnimatePresence>

      {phase === "cards" && <Petals />}

      {phase === "cards" && (
        <main className="relative z-10 flex flex-col items-center py-8 px-4 max-w-[420px] mx-auto">
          <HeroCard />
          <CeremonyCard />
          <ReceptionCard />
          <ItineraryCard />
          <DressCodeCard />
          <HotelsCard />
          <GiftsCard />
          <RSVPCard />

          <footer className="text-center mt-4 mb-8">
            <img
              src="/assets/rama-olivo.png"
              alt=""
              style={{ width: 70, height: "auto", margin: "0 auto 0.5rem", opacity: 0.85 }}
            />
            <div className="divider" />
            <p className="font-script mt-4" style={{ color: "var(--olive-soft)", fontSize: "1.1rem" }}>
              Laura & Jorge
            </p>
            <p className="font-sans-label mt-2" style={{ color: "var(--beige)", fontSize: "0.45rem" }}>
              15 · AGOSTO · 2026
            </p>
            <p className="font-sans-label mt-4" style={{ color: "var(--beige)", fontSize: "0.4rem" }}>
              DISEÑADO POR{" "}
              <a
                href="https://instagram.com/elysium"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--olive-soft)", textDecoration: "none" }}
              >
                @ELYSIUM
              </a>
            </p>
          </footer>
        </main>
      )}
    </>
  );
}
