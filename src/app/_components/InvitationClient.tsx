"use client";

import { useState } from "react";
import EnvelopeLoader from "./EnvelopeLoader";
import AudioPlayer from "./AudioPlayer";
import HeroCard from "./cards/HeroCard";
import CeremonyCard from "./cards/CeremonyCard";
import ReceptionCard from "./cards/ReceptionCard";
import ItineraryCard from "./cards/ItineraryCard";
import DressCodeCard from "./cards/DressCodeCard";
import HotelsCard from "./cards/HotelsCard";
import GiftsCard from "./cards/GiftsCard";
import RSVPCard from "./cards/RSVPCard";

export default function InvitationClient() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <EnvelopeLoader onOpen={() => setOpened(true)} />

      {opened && (
        <main className="flex flex-col items-center py-8 px-4 max-w-[420px] mx-auto">
          <HeroCard />
          <CeremonyCard />
          <ReceptionCard />
          <ItineraryCard />
          <DressCodeCard />
          <HotelsCard />
          <GiftsCard />
          <RSVPCard />

          {/* Footer */}
          <footer className="text-center mt-4 mb-8">
            <div className="divider" />
            <p
              className="font-script mt-4"
              style={{ color: "var(--olive-soft)", fontSize: "1.2rem" }}
            >
              Laura & Jorge
            </p>
            <p
              className="font-sans-label mt-2"
              style={{ color: "var(--beige)", fontSize: "0.5rem" }}
            >
              15 · AGOSTO · 2026
            </p>
            <p
              className="font-sans-label mt-4"
              style={{ color: "var(--beige)", fontSize: "0.45rem" }}
            >
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

          <AudioPlayer />
        </main>
      )}
    </>
  );
}
