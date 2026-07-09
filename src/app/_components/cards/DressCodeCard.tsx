"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";
import { Flourish } from "../Ornaments";

export default function DressCodeCard() {
  return (
    <AnimatedCard className="tex-beige text-center py-8" anim="flip">
      <img
        src="/assets/hoja-olivo.png"
        alt=""
        className="absolute pointer-events-none"
        style={{ width: 96, height: "auto", top: 6, left: 6, opacity: 0.8, transform: "scaleX(-1)" }}
      />
      <img
        src="/assets/hoja-olivo.png"
        alt=""
        className="absolute pointer-events-none"
        style={{ width: 96, height: "auto", bottom: 6, right: 6, opacity: 0.8, transform: "rotate(180deg)" }}
      />

      <Stagger>
        <p className="font-sans-label mb-2" style={{ color: "var(--gold-antique)" }}>
          VESTIMENTA
        </p>
      </Stagger>

      <Stagger>
        <p
          className="font-serif font-bold"
          style={{ color: "var(--ink-dark)", fontSize: "2rem", letterSpacing: "0.12em" }}
        >
          FORMAL
        </p>
      </Stagger>

      <Stagger>
        <div className="my-2">
          <Flourish className="mx-auto" />
        </div>
      </Stagger>

      <Stagger>
        <p className="font-serif italic text-sm mt-2" style={{ color: "var(--olive-soft)" }}>
          Hombres: traje oscuro, corbata o moño.
        </p>
      </Stagger>

      <Stagger>
        <p className="font-serif italic text-sm mt-2" style={{ color: "var(--olive-soft)" }}>
          Mujeres: vestido largo o midi.
        </p>
      </Stagger>

      <Stagger>
        <div
          className="mt-5 mx-auto px-4 py-2 inline-block"
          style={{ border: "1px solid var(--terracotta)", backgroundColor: "rgba(184,91,63,0.06)" }}
        >
          <p className="font-serif italic text-xs" style={{ color: "var(--terracotta)" }}>
            Reservado el color blanco para la novia
          </p>
        </div>
      </Stagger>
    </AnimatedCard>
  );
}
