"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";
import { OliveBranch } from "../Ornaments";

// TODO: reemplazar por el nombre real de la iglesia cuando el cliente lo indique
const NOMBRE_IGLESIA = "Ver ubicación de la iglesia";

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
        <div className="flex justify-center mt-2 mb-3">
          <OliveBranch width={110} color="var(--olive-soft)" />
        </div>
      </Stagger>

      <Stagger>
        <div className="py-4">
          <p className="font-serif italic" style={{ color: "var(--olive-primary)", fontSize: "3.4rem", lineHeight: 1.1 }}>
            Santa Misa
          </p>
          <p className="font-serif font-semibold mt-2" style={{ color: "var(--ink-dark)", fontSize: "2.6rem" }}>
            5:00 PM
          </p>
          <a
            href="https://maps.app.goo.gl/zEwjeuVG7oHy3F3N9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 font-serif italic"
            style={{ color: "var(--terracotta)", fontSize: "1.35rem", textDecoration: "none" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            {NOMBRE_IGLESIA}
          </a>
        </div>
      </Stagger>
    </AnimatedCard>
  );
}
