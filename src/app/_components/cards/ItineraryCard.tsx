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
      <img
        src="/assets/esquina-floral.png"
        alt=""
        className="absolute pointer-events-none"
        style={{ width: 80, height: "auto", top: -6, right: -24, opacity: 0.9, filter: "drop-shadow(0 2px 5px rgba(59,48,40,0.2))" }}
      />
      <Stagger>
        <p className="font-script text-center" style={{ color: "var(--olive-primary)", fontSize: "3.4rem", lineHeight: 1.05 }}>
          Así celebraremos
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
          const isLast = i === events.length - 1;
          return (
            <Stagger key={i}>
              <div
                className="flex gap-3.5"
                style={{ paddingBottom: isLast ? 0 : 56 }}
              >
                {/* nodo con icono a mano alzada */}
                <div
                  className="relative z-10 shrink-0 flex items-center justify-center rounded-full mt-0.5"
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: "var(--bg-cream)",
                    border: `1px solid var(--gold-antique)`,
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
                    style={{ color: "var(--ink-dark)", fontSize: "1.72rem" }}
                  >
                    {evt.time}
                  </p>
                  <p
                    className="font-sans-label mt-1"
                    style={{ color: "var(--ink-dark)", fontSize: "0.75rem", letterSpacing: "0.2em" }}
                  >
                    {evt.label}
                  </p>
                  {evt.desc && (
                    <p
                      className="font-serif italic leading-snug mt-1.5 text-justify"
                      style={{ color: "var(--ink-dark)", fontSize: "1.23rem" }}
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
