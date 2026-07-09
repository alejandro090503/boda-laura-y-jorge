"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";
import { OliveBranch, WaxSeal } from "../Ornaments";

export default function CeremonyCard() {
  return (
    <AnimatedCard className="card-mini-envelope text-center" anim="slideLeft">
      <div className="mini-flap" />
      <img
        src="/assets/hoja-olivo.png"
        alt=""
        className="absolute pointer-events-none"
        style={{ width: 90, height: "auto", bottom: 10, right: 8, opacity: 0.85 }}
      />

      <Stagger>
        <p className="font-sans-label mb-1" style={{ color: "var(--gold-antique)" }}>
          CEREMONIA
        </p>
      </Stagger>

      <Stagger>
        <div className="flex justify-center my-2">
          <OliveBranch width={110} color="var(--olive-soft)" />
        </div>
      </Stagger>

      <Stagger>
        <div className="mb-6">
          <p className="font-serif italic" style={{ color: "var(--olive-primary)", fontSize: "1.5rem" }}>
            Santa Misa
          </p>
          <p className="font-serif font-semibold mt-1" style={{ color: "var(--ink-dark)", fontSize: "1.7rem" }}>
            5:00 PM
          </p>
          <a
            href="https://maps.app.goo.gl/zEwjeuVG7oHy3F3N9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-map mt-3"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            IR A UBICACIÓN
          </a>
        </div>
      </Stagger>

      <Stagger>
        <div
          className="mx-auto px-4 py-4"
          style={{ borderTop: "1px solid var(--beige)" }}
        >
          <p className="font-serif italic" style={{ color: "var(--olive-primary)", fontSize: "1.5rem" }}>
            Ceremonia Civil
          </p>
          <p className="font-serif font-semibold mt-1" style={{ color: "var(--terracotta)", fontSize: "1.7rem" }}>
            7:30 PM
          </p>
        </div>
      </Stagger>

      <Stagger>
        <div className="flex justify-center mt-4">
          <WaxSeal size={44} />
        </div>
      </Stagger>
    </AnimatedCard>
  );
}
