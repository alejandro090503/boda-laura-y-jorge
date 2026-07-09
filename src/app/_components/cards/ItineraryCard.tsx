"use client";

import Image from "next/image";
import AnimatedCard, { Stagger } from "../AnimatedCard";
import { OliveBranch } from "../Ornaments";

type Evt = { time: string; label: string; desc: string; icon: string };

const events: Evt[] = [
  {
    time: "5:00 p.m.",
    label: "Ceremonia religiosa",
    desc: "Con inmensa gratitud, celebraremos el sacramento del matrimonio.",
    icon: "/iconos/iglesia.png",
  },
  {
    time: "7:30 p.m.",
    label: "Ceremonia civil",
    desc: "Prometemos que será el único acto jurídico de la noche.",
    icon: "/iconos/anillos.png",
  },
  {
    time: "8:00 p.m.",
    label: "Recepción",
    desc: "Les esperamos en Hacienda Santa Cecilia para compartir el inicio de esta celebración.",
    icon: "/iconos/arco.png",
  },
  {
    time: "9:00 p.m.",
    label: "Cena · México Sinfónico",
    desc: "El banquete estará acompañado por un concierto sinfónico de música mexicana, esa que tanto significa para nosotros.",
    icon: "/iconos/cena.png",
  },
  {
    time: "10:00 p.m.",
    label: "Primer baile",
    desc: "Nuestro primer baile, ahora como esposos.",
    icon: "/iconos/novios.png",
  },
  {
    time: "10:20 p.m.",
    label: "¡Que comience la fiesta!",
    desc: "",
    icon: "/iconos/fiesta.png",
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
          className="absolute top-5 bottom-5"
          style={{
            left: 23,
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
                {/* nodo con icono a mano alzada */}
                <div
                  className="relative z-10 shrink-0 flex items-center justify-center rounded-full mt-0.5"
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: "var(--bg-cream)",
                    border: `1px solid ${last ? "var(--terracotta)" : "var(--gold-antique)"}`,
                    boxShadow: "0 2px 6px rgba(59,48,40,0.1)",
                  }}
                >
                  <Image
                    src={evt.icon}
                    alt={evt.label}
                    width={34}
                    height={34}
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* contenido */}
                <div className="text-left flex-1 min-w-0 pt-1">
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
