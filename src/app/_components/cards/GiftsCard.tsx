"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";

export default function GiftsCard() {
  return (
    <AnimatedCard className="text-center py-10">
      <Stagger>
        <p className="font-sans-label mb-4" style={{ color: "var(--gold-antique)" }}>
          MESA DE REGALOS
        </p>
      </Stagger>

      <Stagger>
        <p className="font-serif italic text-sm mb-4" style={{ color: "var(--olive-soft)" }}>
          Su presencia es el regalo más grande.
        </p>
      </Stagger>

      <Stagger>
        <p className="font-serif text-sm mb-2" style={{ color: "var(--ink-dark)" }}>
          Si desean hacernos un obsequio,
          <br />
          hemos dispuesto una
        </p>
      </Stagger>

      <Stagger>
        <p
          className="font-script my-4"
          style={{ color: "var(--olive-primary)", fontSize: "1.8rem" }}
        >
          Lluvia de sobres
        </p>
      </Stagger>

      <Stagger>
        <p className="font-serif italic text-xs" style={{ color: "var(--olive-soft)" }}>
          para quienes deseen colaborar
          <br />
          con nuestro nuevo hogar
        </p>
      </Stagger>

      {/* Decorative envelope icon */}
      <Stagger>
        <div className="mt-6 flex justify-center">
          <svg
            width="40"
            height="32"
            viewBox="0 0 40 32"
            fill="none"
            stroke="var(--gold-antique)"
            strokeWidth="1"
          >
            <rect x="1" y="1" width="38" height="30" rx="1" />
            <path d="M1 1 L20 18 L39 1" />
          </svg>
        </div>
      </Stagger>
    </AnimatedCard>
  );
}
