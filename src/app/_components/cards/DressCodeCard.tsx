"use client";

import Image from "next/image";
import AnimatedCard, { Stagger } from "../AnimatedCard";
import { Flourish, CornerSprig } from "../Ornaments";

export default function DressCodeCard() {
  return (
    <AnimatedCard className="tex-beige text-center py-8">
      <CornerSprig position="tl" color="var(--olive-soft)" />
      <CornerSprig position="br" color="var(--olive-soft)" />

      <Stagger>
        <p className="font-sans-label mb-1" style={{ color: "var(--gold-antique)" }}>
          VESTIMENTA
        </p>
      </Stagger>

      <Stagger>
        <p
          className="font-serif font-bold"
          style={{ color: "var(--ink-dark)", fontSize: "1.8rem", letterSpacing: "0.1em" }}
        >
          FORMAL
        </p>
      </Stagger>

      <Stagger>
        <div className="my-2">
          <Flourish className="mx-auto" />
        </div>
      </Stagger>

      {/* Figurines */}
      <Stagger>
        <div className="flex justify-center items-end gap-4 my-3">
          <div className="flex flex-col items-center">
            <div
              className="relative w-[95px] h-[170px]"
              style={{
                borderRadius: "50% 50% 4px 4px / 12% 12% 0 0",
                overflow: "hidden",
                border: "1px solid var(--gold-antique)",
                backgroundColor: "rgba(245,240,231,0.5)",
              }}
            >
              <Image src="/caballero.png" alt="Caballero de traje formal" fill style={{ objectFit: "contain" }} sizes="95px" />
            </div>
            <p className="font-sans-label mt-2" style={{ color: "var(--olive-soft)", fontSize: "0.5rem" }}>
              CABALLEROS
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div
              className="relative w-[95px] h-[170px]"
              style={{
                borderRadius: "50% 50% 4px 4px / 12% 12% 0 0",
                overflow: "hidden",
                border: "1px solid var(--gold-antique)",
                backgroundColor: "rgba(245,240,231,0.5)",
              }}
            >
              <Image src="/dama.png" alt="Dama de vestido formal largo" fill style={{ objectFit: "contain" }} sizes="95px" />
            </div>
            <p className="font-sans-label mt-2" style={{ color: "var(--olive-soft)", fontSize: "0.5rem" }}>
              DAMAS
            </p>
          </div>
        </div>
      </Stagger>

      <Stagger>
        <div
          className="mt-4 mx-auto px-4 py-2 inline-block"
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
