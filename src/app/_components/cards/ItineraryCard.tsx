"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";
import { OliveBranch } from "../Ornaments";

type Evt = { time: string; label: string; desc: string; icon: React.ReactNode };

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const events: Evt[] = [
  {
    time: "5:00 p.m.",
    label: "Ceremonia religiosa",
    desc: "Con inmensa gratitud, celebraremos el sacramento del matrimonio.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3v6M9 6h6M6 21V11l6-4 6 4v10M9 21v-5h6v5" />
      </svg>
    ),
  },
  {
    time: "7:30 p.m.",
    label: "Ceremonia civil",
    desc: "Prometemos que será el único acto jurídico de la noche.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    time: "8:00 p.m.",
    label: "Recepción",
    desc: "Les esperamos en Hacienda Santa Cecilia para compartir el inicio de esta celebración.",
    icon: (
      <svg {...iconProps}>
        <path d="M6 3v6a3 3 0 006 0V3M9 3v18M18 3c-1.5 1-2 3-2 6s.5 5 2 6v6" />
      </svg>
    ),
  },
  {
    time: "9:00 p.m.",
    label: "Cena · México Sinfónico",
    desc: "El banquete estará acompañado por un concierto sinfónico de música mexicana, esa que tanto significa para nosotros.",
    icon: (
      <svg {...iconProps}>
        <circle cx="8" cy="18" r="2.5" />
        <path d="M10.5 18V6l9-2v10" />
        <circle cx="17" cy="14" r="2.5" />
      </svg>
    ),
  },
  {
    time: "10:00 p.m.",
    label: "Primer baile",
    desc: "Nuestro primer baile, ahora como esposos.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z" />
      </svg>
    ),
  },
  {
    time: "10:20 p.m.",
    label: "¡Que comience la fiesta!",
    desc: "",
    icon: (
      <svg {...iconProps}>
        <path d="M4 20l6-14 8 8-14 6zM10 6l2 2M14 4l1 1M20 8l1-1M18 14l1 1" />
      </svg>
    ),
  },
];

export default function ItineraryCard() {
  return (
    <AnimatedCard className="card-arch tex-beige" anim="slideRight">
      <Stagger>
        <p className="font-sans-label mb-2 text-center" style={{ color: "var(--gold-antique)" }}>
          ASÍ CELEBRAREMOS JUNTOS
        </p>
      </Stagger>

      <Stagger>
        <div className="flex justify-center mb-6">
          <OliveBranch width={100} color="var(--olive-soft)" />
        </div>
      </Stagger>

      <div className="relative">
        {/* línea vertical conectora */}
        <div
          className="absolute top-4 bottom-4"
          style={{
            left: 17,
            width: 1.5,
            background: "linear-gradient(var(--gold-antique), var(--beige))",
            opacity: 0.5,
          }}
        />

        {events.map((evt, i) => {
          const last = i === events.length - 1;
          return (
            <Stagger key={i}>
              <div className="flex gap-3.5 pb-6 last:pb-0">
                {/* nodo con icono */}
                <div
                  className="relative z-10 shrink-0 flex items-center justify-center rounded-full mt-0.5"
                  style={{
                    width: 36,
                    height: 36,
                    backgroundColor: "var(--bg-cream)",
                    border: `1px solid ${last ? "var(--terracotta)" : "var(--gold-antique)"}`,
                    color: last ? "var(--terracotta)" : "var(--olive-primary)",
                    boxShadow: "0 2px 6px rgba(59,48,40,0.1)",
                  }}
                >
                  {evt.icon}
                </div>

                {/* contenido */}
                <div className="text-left flex-1 min-w-0 pt-0.5">
                  <p
                    className="font-serif font-semibold leading-none"
                    style={{ color: last ? "var(--terracotta)" : "var(--ink-dark)", fontSize: "1.15rem" }}
                  >
                    {evt.time}
                  </p>
                  <p
                    className="font-sans-label mt-1"
                    style={{ color: "var(--olive-primary)", fontSize: "0.5rem", letterSpacing: "0.2em" }}
                  >
                    {evt.label}
                  </p>
                  {evt.desc && (
                    <p
                      className="font-serif italic leading-snug mt-1.5"
                      style={{ color: "var(--olive-soft)", fontSize: "0.82rem" }}
                    >
                      {evt.desc}
                    </p>
                  )}
                </div>
              </div>
            </Stagger>
          );
        })}
      </div>
    </AnimatedCard>
  );
}
