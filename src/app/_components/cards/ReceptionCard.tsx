"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedCard, { Stagger } from "../AnimatedCard";

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
                delay: i * 0.1,
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
      className="w-full max-w-[280px] mx-auto my-4"
      fill="none"
      stroke="var(--ink-dark)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Main building */}
      <rect x="60" y="80" width="280" height="100" />
      {/* Roof line */}
      <line x1="50" y1="80" x2="350" y2="80" />
      {/* Central arch entrance */}
      <path d="M170 180 V130 Q170 100 200 100 Q230 100 230 130 V180" />
      {/* Left arches */}
      <path d="M80 180 V140 Q80 120 100 120 Q120 120 120 140 V180" />
      <path d="M130 180 V145 Q130 130 145 130 Q160 130 160 145 V180" />
      {/* Right arches */}
      <path d="M240 180 V145 Q240 130 255 130 Q270 130 270 145 V180" />
      <path d="M280 180 V140 Q280 120 300 120 Q320 120 320 140 V180" />
      {/* Bell tower */}
      <rect x="185" y="40" width="30" height="40" />
      <path d="M180 40 L200 20 L220 40" />
      {/* Bell */}
      <ellipse cx="200" cy="55" rx="6" ry="5" />
      {/* Cross */}
      <line x1="200" y1="10" x2="200" y2="20" />
      <line x1="195" y1="14" x2="205" y2="14" />
      {/* Windows */}
      <circle cx="95" cy="95" r="5" />
      <circle cx="145" cy="95" r="5" />
      <circle cx="255" cy="95" r="5" />
      <circle cx="305" cy="95" r="5" />
      {/* Ground line */}
      <line x1="30" y1="180" x2="370" y2="180" />
      {/* Trees */}
      <ellipse cx="40" cy="140" rx="15" ry="30" />
      <line x1="40" y1="170" x2="40" y2="180" />
      <ellipse cx="360" cy="140" rx="15" ry="30" />
      <line x1="360" y1="170" x2="360" y2="180" />
    </svg>
  );
}

export default function ReceptionCard() {
  return (
    <AnimatedCard className="text-center">
      <Stagger>
        <p className="font-sans-label mb-4" style={{ color: "var(--gold-antique)" }}>
          RECEPCIÓN
        </p>
      </Stagger>

      <Stagger>
        <HaciendaSVG />
      </Stagger>

      <Stagger>
        <p
          className="font-script"
          style={{ color: "var(--olive-primary)", fontSize: "1.6rem" }}
        >
          Hacienda Santa Cecilia
        </p>
      </Stagger>

      <Stagger>
        <div className="divider" />
      </Stagger>

      <Stagger>
        <div className="mb-6">
          <p
            className="font-serif font-semibold"
            style={{ color: "var(--ink-dark)", fontSize: "1.4rem" }}
          >
            8:00 PM
          </p>
          <p className="font-sans-label mt-1" style={{ color: "var(--olive-soft)", fontSize: "0.6rem" }}>
            RECEPCIÓN
          </p>
        </div>
      </Stagger>

      <Stagger>
        <div className="mb-6">
          <p
            className="font-serif font-semibold"
            style={{ color: "var(--ink-dark)", fontSize: "1.4rem" }}
          >
            9:00 PM
          </p>
          <p
            className="font-script mt-1"
            style={{ color: "var(--terracotta)", fontSize: "1.2rem" }}
          >
            &ldquo;México Sinfónico&rdquo;
          </p>
          <p
            className="font-serif italic text-xs mt-1"
            style={{ color: "var(--olive-soft)" }}
          >
            Concierto sinfónico de música mexicana
          </p>
        </div>
      </Stagger>

      <Stagger>
        <a
          href="https://maps.app.goo.gl/zzjpm96MtrKNeAAP8"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-map"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          Ver ubicación
        </a>
      </Stagger>
    </AnimatedCard>
  );
}
