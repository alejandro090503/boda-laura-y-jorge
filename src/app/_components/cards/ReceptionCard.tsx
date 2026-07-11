"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedCard, { Stagger } from "../AnimatedCard";
import { OliveBranch } from "../Ornaments";

function HaciendaSVG() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll("path, line, rect, ellipse, circle");
    paths.forEach((p) => {
      const el = p as SVGGeometryElement;
      if ("getTotalLength" in el) {
        const len = el.getTotalLength();
        gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
      }
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          paths.forEach((p, i) => {
            const el = p as SVGGeometryElement;
            if ("getTotalLength" in el) {
              gsap.to(el, {
                strokeDashoffset: 0,
                duration: 1.5,
                delay: i * 0.08,
                ease: "power2.inOut",
              });
            }
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 200"
      className="w-full max-w-[310px] mx-auto"
      style={{ display: "block", marginTop: "-0.5rem", marginBottom: "0.75rem" }}
      fill="none"
      stroke="var(--ink-dark)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="60" y="80" width="280" height="100" />
      <line x1="50" y1="80" x2="350" y2="80" />
      <path d="M170 180 V130 Q170 100 200 100 Q230 100 230 130 V180" />
      <path d="M80 180 V140 Q80 120 100 120 Q120 120 120 140 V180" />
      <path d="M130 180 V145 Q130 130 145 130 Q160 130 160 145 V180" />
      <path d="M240 180 V145 Q240 130 255 130 Q270 130 270 145 V180" />
      <path d="M280 180 V140 Q280 120 300 120 Q320 120 320 140 V180" />
      <circle cx="95" cy="95" r="5" />
      <circle cx="145" cy="95" r="5" />
      <circle cx="255" cy="95" r="5" />
      <circle cx="305" cy="95" r="5" />
      <line x1="30" y1="180" x2="370" y2="180" />
      <ellipse cx="40" cy="140" rx="15" ry="30" />
      <line x1="40" y1="170" x2="40" y2="180" />
      <ellipse cx="360" cy="140" rx="15" ry="30" />
      <line x1="360" y1="170" x2="360" y2="180" />
    </svg>
  );
}

export default function ReceptionCard() {
  return (
    <AnimatedCard className="card-olive card-arch text-center" anim="zoom">
      <img
        src="/assets/sello-sobre.png"
        alt=""
        className="absolute pointer-events-none"
        style={{ width: 76, height: "auto", top: -8, left: 6, zIndex: 30, filter: "drop-shadow(0 5px 10px rgba(59,48,40,0.4))" }}
      />
      <Stagger>
        <p className="font-script mb-1" style={{ color: "var(--bg-cream)", fontSize: "2.7rem", lineHeight: 1.1, marginTop: "1.75rem" }}>
          Civil y Recepción
        </p>
      </Stagger>

      <Stagger>
        <p className="font-script" style={{ color: "var(--bg-cream)", fontSize: "2.25rem" }}>
          Hacienda Santa Cecilia
        </p>
      </Stagger>

      <Stagger>
        <div className="flex justify-center mt-1">
          <OliveBranch width={90} color="var(--gold-antique)" />
        </div>
      </Stagger>

      <Stagger>
        <div className="flex justify-center" style={{ filter: "invert(1)", opacity: 0.7 }}>
          <HaciendaSVG />
        </div>
      </Stagger>

      <Stagger>
        <div className="divider-gold" />
      </Stagger>

      <Stagger>
        <div className="flex justify-center gap-8 my-4">
          <div>
            <p className="font-serif font-semibold" style={{ color: "var(--bg-cream)", fontSize: "1.95rem" }}>
              7:30 PM
            </p>
            <p className="font-serif italic text-lg" style={{ color: "var(--bg-cream)", opacity: 0.85 }}>
              Ceremonia Civil
            </p>
          </div>
          <div>
            <p className="font-serif font-semibold" style={{ color: "var(--bg-cream)", fontSize: "1.95rem" }}>
              8:00 PM
            </p>
            <p className="font-serif italic text-lg" style={{ color: "var(--bg-cream)", opacity: 0.85 }}>
              Recepción
            </p>
          </div>
        </div>
      </Stagger>

      <Stagger>
        <div className="mt-8">
          <a
            href="https://maps.app.goo.gl/zzjpm96MtrKNeAAP8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-map btn-olive"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            IR A UBICACIÓN
          </a>
        </div>
      </Stagger>
    </AnimatedCard>
  );
}
