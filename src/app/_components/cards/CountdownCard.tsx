"use client";

import { useEffect, useState } from "react";
import AnimatedCard, { Stagger } from "../AnimatedCard";
import { OliveBranch } from "../Ornaments";

const WEDDING_DATE = new Date(2026, 7, 15, 0, 0, 0); // 15 de agosto de 2026

export default function CountdownCard() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const compute = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const diffMs = WEDDING_DATE.getTime() - today.getTime();
      const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      setDays(Math.max(diffDays, 0));
    };
    compute();
    const interval = setInterval(compute, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedCard className="tex-aged text-center py-9" anim="zoom">
      <Stagger>
        <div className="flex justify-center mb-3">
          <OliveBranch width={90} color="var(--olive-soft)" />
        </div>
      </Stagger>

      <Stagger>
        <p className="font-sans-label" style={{ color: "var(--gold-antique)" }}>
          CUENTA REGRESIVA
        </p>
      </Stagger>

      <Stagger>
        <p
          className="font-script"
          style={{
            color: "var(--olive-primary)",
            fontSize: "5rem",
            lineHeight: 1,
            margin: "0.5rem 0",
            minHeight: "5rem",
          }}
        >
          {days === null ? " " : days}
        </p>
      </Stagger>

      <Stagger>
        <p className="font-serif italic text-center" style={{ color: "var(--ink-dark)", fontSize: "1.3rem" }}>
          Faltan {days ?? "…"} días para el gran día
        </p>
      </Stagger>
    </AnimatedCard>
  );
}
