"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";
import { OliveBranch } from "../Ornaments";

type Evt = { time: string; label: string; icon: React.ReactNode };

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const events: Evt[] = [
  {
    time: "5:00 PM",
    label: "Ceremonia religiosa",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3v6M9 6h6M6 21V11l6-4 6 4v10M9 21v-5h6v5" />
      </svg>
    ),
  },
  {
    time: "7:30 PM",
    label: "Ceremonia civil",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    time: "8:00 PM",
    label: "Recepción",
    icon: (
      <svg {...iconProps}>
        <path d="M6 3v6a3 3 0 006 0V3M9 3v18M18 3c-1.5 1-2 3-2 6s.5 5 2 6v6" />
      </svg>
    ),
  },
  {
    time: "9:00 PM",
    label: "Cena · México Sinfónico",
    icon: (
      <svg {...iconProps}>
        <circle cx="8" cy="18" r="2.5" />
        <path d="M10.5 18V6l9-2v10" />
        <circle cx="17" cy="14" r="2.5" />
      </svg>
    ),
  },
  {
    time: "10:00 PM",
    label: "Primer baile",
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z" />
      </svg>
    ),
  },
  {
    time: "10:20 PM",
    label: "¡Fiesta!",
    icon: (
      <svg {...iconProps}>
        <path d="M4 20l6-14 8 8-14 6zM10 6l2 2M14 4l1 1M20 8l1-1M18 14l1 1" />
      </svg>
    ),
  },
];

export default function ItineraryCard() {
  return (
    <AnimatedCard className="card-arch tex-beige">
      <Stagger>
        <p className="font-sans-label mb-2 text-center" style={{ color: "var(--gold-antique)" }}>
          ITINERARIO
        </p>
      </Stagger>

      <Stagger>
        <div className="flex justify-center mb-5">
          <OliveBranch width={100} color="var(--olive-soft)" />
        </div>
      </Stagger>

      <div className="relative pl-2">
        {/* connecting line */}
        <div
          className="absolute top-3 bottom-3"
          style={{ left: 21, width: 1.5, background: "linear-gradient(var(--gold-antique), var(--beige))", opacity: 0.5 }}
        />

        {events.map((evt, i) => (
          <Stagger key={i}>
            <div className="flex items-center gap-4 mb-5 last:mb-0">
              <div
                className="relative z-10 shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "var(--bg-cream)",
                  border: `1px solid ${i === events.length - 1 ? "var(--terracotta)" : "var(--gold-antique)"}`,
                  color: i === events.length - 1 ? "var(--terracotta)" : "var(--olive-primary)",
                  boxShadow: "0 2px 6px rgba(59,48,40,0.1)",
                }}
              >
                {evt.icon}
              </div>
              <div className="text-left flex-1 min-w-0">
                <p
                  className="font-serif font-semibold leading-none"
                  style={{ color: "var(--ink-dark)", fontSize: "1.15rem" }}
                >
                  {evt.time}
                </p>
                <p className="font-serif italic leading-tight mt-0.5" style={{ color: "var(--olive-soft)", fontSize: "0.85rem" }}>
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
