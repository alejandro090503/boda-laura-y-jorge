"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";

export default function HeroCard() {
  return (
    <AnimatedCard className="text-center py-12 px-6">
      <Stagger>
        <p
          className="font-serif italic text-sm mb-1"
          style={{ color: "var(--olive-soft)" }}
        >
          Con la bendición de Dios
        </p>
      </Stagger>
      <Stagger>
        <p
          className="font-serif italic text-sm mb-6"
          style={{ color: "var(--olive-soft)" }}
        >
          y el amor de nuestros padres
        </p>
      </Stagger>

      <Stagger>
        <div className="divider" />
      </Stagger>

      <Stagger>
        <h1
          className="font-script my-4"
          style={{ color: "var(--olive-primary)", fontSize: "3.2rem", lineHeight: 1.1 }}
        >
          Laura
        </h1>
      </Stagger>
      <Stagger>
        <p
          className="font-script"
          style={{ color: "var(--gold-antique)", fontSize: "1.8rem" }}
        >
          &
        </p>
      </Stagger>
      <Stagger>
        <h1
          className="font-script mb-4"
          style={{ color: "var(--olive-primary)", fontSize: "3.2rem", lineHeight: 1.1 }}
        >
          Jorge
        </h1>
      </Stagger>

      <Stagger>
        <div className="divider" />
      </Stagger>

      <Stagger>
        <p
          className="font-serif italic text-sm mt-4 mb-6"
          style={{ color: "var(--ink-dark)" }}
        >
          Tenemos el honor de invitarles
          <br />a nuestra boda
        </p>
      </Stagger>

      <Stagger>
        <div className="flex items-center justify-center gap-3">
          <span
            className="font-serif font-semibold"
            style={{ color: "var(--ink-dark)", fontSize: "1.6rem" }}
          >
            15
          </span>
          <span className="font-sans-label" style={{ color: "var(--olive-soft)" }}>
            ·
          </span>
          <span className="font-sans-label" style={{ color: "var(--olive-soft)" }}>
            AGOSTO
          </span>
          <span className="font-sans-label" style={{ color: "var(--olive-soft)" }}>
            ·
          </span>
          <span
            className="font-serif font-semibold"
            style={{ color: "var(--ink-dark)", fontSize: "1.6rem" }}
          >
            2026
          </span>
        </div>
      </Stagger>

      <Stagger>
        <p className="font-sans-label mt-4" style={{ color: "var(--olive-soft)", fontSize: "0.6rem" }}>
          Delicias, Chihuahua
        </p>
      </Stagger>

      {/* Olive branch SVG decoration */}
      <svg
        className="absolute bottom-4 right-4 opacity-15"
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        stroke="var(--olive-primary)"
        strokeWidth="1"
      >
        <path d="M80 20 Q60 40 30 70 Q20 80 10 90" />
        <ellipse cx="65" cy="28" rx="8" ry="4" transform="rotate(-30 65 28)" />
        <ellipse cx="52" cy="40" rx="7" ry="3.5" transform="rotate(-40 52 40)" />
        <ellipse cx="40" cy="55" rx="7" ry="3.5" transform="rotate(-50 40 55)" />
        <ellipse cx="72" cy="35" rx="7" ry="3.5" transform="rotate(-20 72 35)" />
        <ellipse cx="58" cy="48" rx="6" ry="3" transform="rotate(-35 58 48)" />
      </svg>
    </AnimatedCard>
  );
}
