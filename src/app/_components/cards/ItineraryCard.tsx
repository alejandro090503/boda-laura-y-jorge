"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";

const events = [
  { time: "5:00 PM", label: "Ceremonia religiosa" },
  { time: "7:30 PM", label: "Ceremonia civil" },
  { time: "8:00 PM", label: "Recepción" },
  { time: "9:00 PM", label: "México Sinfónico" },
  { time: "10:00 PM", label: "Primer baile" },
  { time: "10:20 PM", label: "¡Fiesta!" },
];

export default function ItineraryCard() {
  return (
    <AnimatedCard className="card-arch text-center">
      <Stagger>
        <p className="font-sans-label mb-6" style={{ color: "var(--gold-antique)" }}>
          ITINERARIO
        </p>
      </Stagger>

      <div className="relative">
        <div
          className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
          style={{ width: 1, backgroundColor: "var(--beige)" }}
        />

        {events.map((evt, i) => (
          <Stagger key={i}>
            <div className={`flex items-center gap-4 mb-5 ${i % 2 === 0 ? "flex-row-reverse text-right" : "text-left"}`}>
              <div className="flex-1">
                <p className="font-serif font-semibold text-sm" style={{ color: "var(--ink-dark)" }}>
                  {evt.time}
                </p>
                <p className="font-serif text-xs" style={{ color: "var(--olive-soft)" }}>
                  {evt.label}
                </p>
              </div>
              <div
                className="w-3 h-3 rounded-full shrink-0 relative z-10"
                style={{
                  backgroundColor: i === events.length - 1 ? "var(--gold-antique)" : "var(--bg-cream)",
                  border: `1.5px solid ${i === events.length - 1 ? "var(--gold-antique)" : "var(--beige)"}`,
                }}
              />
              <div className="flex-1" />
            </div>
          </Stagger>
        ))}
      </div>
    </AnimatedCard>
  );
}
