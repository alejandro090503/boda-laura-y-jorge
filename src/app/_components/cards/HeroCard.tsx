"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";

export default function HeroCard() {
  return (
    <AnimatedCard className="card-arch text-center py-10 px-6">
      {/* Oval frame like the reference */}
      <div className="oval-frame mx-auto">
        <Stagger>
          <p
            className="font-serif italic text-xs"
            style={{ color: "var(--olive-soft)" }}
          >
            Con la bendición de Dios
          </p>
        </Stagger>
        <Stagger>
          <p
            className="font-serif italic text-xs mb-4"
            style={{ color: "var(--olive-soft)" }}
          >
            y el amor de nuestros padres
          </p>
        </Stagger>

        <Stagger>
          <p className="font-sans-label mb-3" style={{ color: "var(--olive-soft)", fontSize: "0.55rem" }}>
            NOSOTROS
          </p>
        </Stagger>

        <Stagger>
          <h1
            className="font-script"
            style={{ color: "var(--olive-primary)", fontSize: "2.6rem", lineHeight: 1 }}
          >
            Laura
          </h1>
        </Stagger>
        <Stagger>
          <p className="font-script" style={{ color: "var(--gold-antique)", fontSize: "1.6rem" }}>
            &
          </p>
        </Stagger>
        <Stagger>
          <h1
            className="font-script mb-3"
            style={{ color: "var(--olive-primary)", fontSize: "2.6rem", lineHeight: 1 }}
          >
            Jorge
          </h1>
        </Stagger>

        <Stagger>
          <div className="divider" />
        </Stagger>

        <Stagger>
          <p className="font-serif italic text-xs mt-2" style={{ color: "var(--ink-dark)" }}>
            Tenemos el honor de invitarles
            <br />a nuestra boda
          </p>
        </Stagger>

        <Stagger>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="font-serif font-semibold" style={{ color: "var(--ink-dark)", fontSize: "1.3rem" }}>
              15
            </span>
            <span className="font-sans-label" style={{ color: "var(--olive-soft)", fontSize: "0.5rem" }}>DE</span>
            <span className="font-sans-label" style={{ color: "var(--olive-soft)", fontSize: "0.55rem" }}>AGOSTO</span>
            <span className="font-sans-label" style={{ color: "var(--olive-soft)", fontSize: "0.5rem" }}>DE</span>
            <span className="font-serif font-semibold" style={{ color: "var(--ink-dark)", fontSize: "1.3rem" }}>
              2026
            </span>
          </div>
        </Stagger>

        <Stagger>
          <p className="font-script mt-3" style={{ color: "var(--olive-soft)", fontSize: "0.9rem" }}>
            Delicias, Chihuahua
          </p>
        </Stagger>
      </div>
    </AnimatedCard>
  );
}
