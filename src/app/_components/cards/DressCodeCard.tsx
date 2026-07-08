"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";

export default function DressCodeCard() {
  return (
    <AnimatedCard className="text-center py-8">
      <Stagger>
        <p className="font-sans-label mb-3" style={{ color: "var(--gold-antique)" }}>
          VESTIMENTA
        </p>
      </Stagger>

      <Stagger>
        <p
          className="font-serif font-bold"
          style={{ color: "var(--ink-dark)", fontSize: "2rem", letterSpacing: "0.12em" }}
        >
          FORMAL DE DÍA
        </p>
      </Stagger>

      <Stagger>
        <div className="divider" />
      </Stagger>

      <Stagger>
        <p className="font-serif italic text-xs mt-3" style={{ color: "var(--olive-soft)" }}>
          Hombres: traje oscuro, corbata o moño,
          <br />colores de día.
        </p>
      </Stagger>

      <Stagger>
        <p className="font-serif italic text-xs mt-2" style={{ color: "var(--olive-soft)" }}>
          Mujeres: vestido largo o midi,
          <br />colores de día.
        </p>
      </Stagger>

      <Stagger>
        <div
          className="mt-5 mx-auto px-4 py-2 inline-block"
          style={{ border: "1px solid var(--terracotta)" }}
        >
          <p className="font-serif italic text-xs" style={{ color: "var(--terracotta)" }}>
            Evitar color blanco, reservado para la novia
          </p>
        </div>
      </Stagger>
    </AnimatedCard>
  );
}
