"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";
import { OliveBranch } from "../Ornaments";

export default function GiftsCard() {
  return (
    <AnimatedCard className="card-olive text-center py-8">
      <Stagger>
        <p className="font-sans-label mb-2" style={{ color: "var(--bg-cream)", opacity: 0.7 }}>
          MESA DE REGALOS
        </p>
      </Stagger>

      <Stagger>
        <div className="flex justify-center mb-2">
          <OliveBranch width={90} color="var(--gold-antique)" />
        </div>
      </Stagger>

      <Stagger>
        <p className="font-serif italic text-sm mb-3" style={{ color: "var(--bg-cream)", opacity: 0.8 }}>
          Su presencia es el regalo más grande.
        </p>
      </Stagger>

      <Stagger>
        <p className="font-serif text-xs" style={{ color: "var(--bg-cream)", opacity: 0.7 }}>
          Si desean hacernos un obsequio,
          <br />hemos dispuesto una
        </p>
      </Stagger>

      <Stagger>
        <p className="font-script my-3" style={{ color: "var(--bg-cream)", fontSize: "1.6rem" }}>
          Lluvia de sobres
        </p>
      </Stagger>

      <Stagger>
        <p className="font-serif italic text-xs" style={{ color: "var(--bg-cream)", opacity: 0.6 }}>
          para quienes deseen colaborar
          <br />con nuestro nuevo hogar
        </p>
      </Stagger>

      <Stagger>
        <div className="mt-5 flex justify-center">
          <svg width="36" height="28" viewBox="0 0 40 32" fill="none" stroke="var(--bg-cream)" strokeWidth="0.8" opacity="0.4">
            <rect x="1" y="1" width="38" height="30" rx="1" />
            <path d="M1 1 L20 18 L39 1" />
          </svg>
        </div>
      </Stagger>
    </AnimatedCard>
  );
}
