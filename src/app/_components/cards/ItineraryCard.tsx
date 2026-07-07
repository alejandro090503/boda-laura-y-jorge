"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";

const events = [
  { time: "5:00 PM", label: "Ceremonia religiosa", icon: "✟" },
  { time: "7:30 PM", label: "Ceremonia civil", icon: "§" },
  { time: "8:00 PM", label: "Recepción", icon: "◈" },
  { time: "9:00 PM", label: "México Sinfónico", icon: "♪" },
  { time: "10:00 PM", label: "Primer baile", icon: "♡" },
  { time: "10:20 PM", label: "¡Fiesta!", icon: "✦" },
];

export default function ItineraryCard() {
  return (
    <AnimatedCard className="text-center">
      <Stagger>
        <p className="font-sans-label mb-8" style={{ color: "var(--gold-antique)" }}>
          ITINERARIO
        </p>
      </Stagger>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-6 top-0 bottom-0 w-px"
          style={{ backgroundColor: "var(--beige)" }}
        />

        {events.map((evt, i) => (
          <Stagger key={i}>
            <div className="flex items-start gap-4 mb-6 relative">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative z-10"
                style={{
                  backgroundColor: "var(--bg-cream)",
                  border: "1px solid var(--beige)",
                }}
              >
                <span style={{ color: "var(--gold-antique)", fontSize: "0.9rem" }}>
                  {evt.icon}
                </span>
              </div>
              <div className="text-left pt-1">
                <p
                  className="font-serif font-semibold"
                  style={{ color: "var(--ink-dark)", fontSize: "1rem" }}
                >
                  {evt.time}
                </p>
                <p
                  className="font-serif text-sm"
                  style={{ color: "var(--olive-soft)" }}
                >
                  {evt.label}
                </p>
              </div>
            </div>
          </Stagger>
        ))}
      </div>
    </AnimatedCard>
  );
}
