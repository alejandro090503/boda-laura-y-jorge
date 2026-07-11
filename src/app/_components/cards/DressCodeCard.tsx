"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";
import { Flourish } from "../Ornaments";

export default function DressCodeCard() {
  return (
    <AnimatedCard className="tex-beige text-center py-8" anim="flip">
      <img
        src="/assets/sobre-motivo-chico.png"
        alt=""
        className="absolute pointer-events-none"
        style={{ width: 110, height: "auto", top: -14, left: -14, opacity: 0.9 }}
      />
      <img
        src="/assets/sobre-motivo-chico.png"
        alt=""
        className="absolute pointer-events-none"
        style={{ width: 110, height: "auto", bottom: -14, right: -14, opacity: 0.9, transform: "rotate(180deg)" }}
      />

      <Stagger>
        <p className="font-script mb-1" style={{ color: "var(--olive-primary)", fontSize: "3rem", lineHeight: 1 }}>
          Vestimenta
        </p>
      </Stagger>

      <Stagger>
        <p
          className="font-serif font-bold"
          style={{ color: "var(--ink-dark)", fontSize: "3rem", letterSpacing: "0.12em" }}
        >
          FORMAL
        </p>
      </Stagger>

      <Stagger>
        <div className="flex justify-center my-2 w-full">
          <Flourish />
        </div>
      </Stagger>

      <Stagger>
        <p className="font-serif italic text-lg mt-5 px-3" style={{ color: "var(--olive-primary)" }}>
          Con cariño, les pedimos reservar el color blanco y sus tonalidades para la novia.
        </p>
      </Stagger>
    </AnimatedCard>
  );
}
