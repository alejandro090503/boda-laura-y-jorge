"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";

export default function CeremonyCard() {
  return (
    <AnimatedCard className="text-center">
      <Stagger>
        <p className="font-sans-label mb-6" style={{ color: "var(--gold-antique)" }}>
          CEREMONIA
        </p>
      </Stagger>

      <Stagger>
        <div className="mb-8">
          <p className="font-sans-label mb-2" style={{ color: "var(--olive-soft)", fontSize: "0.6rem" }}>
            CEREMONIA RELIGIOSA
          </p>
          <p
            className="font-serif font-semibold"
            style={{ color: "var(--ink-dark)", fontSize: "1.8rem" }}
          >
            5:00 PM
          </p>
          <div className="divider" />
          <a
            href="https://maps.app.goo.gl/zEwjeuVG7oHy3F3N9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-map mt-3"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Ver mapa
          </a>
        </div>
      </Stagger>

      <Stagger>
        <div>
          <p className="font-sans-label mb-2" style={{ color: "var(--olive-soft)", fontSize: "0.6rem" }}>
            CEREMONIA CIVIL
          </p>
          <p
            className="font-serif font-semibold"
            style={{ color: "var(--ink-dark)", fontSize: "1.8rem" }}
          >
            7:30 PM
          </p>
          <p
            className="font-serif italic text-xs mt-2"
            style={{ color: "var(--olive-soft)" }}
          >
            &ldquo;Prometemos que será el único
            <br />
            acto jurídico de la noche&rdquo;
          </p>
        </div>
      </Stagger>
    </AnimatedCard>
  );
}
