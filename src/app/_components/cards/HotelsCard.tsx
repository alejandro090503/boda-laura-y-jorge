"use client";

import AnimatedCard, { Stagger } from "../AnimatedCard";

const hotels = [
  {
    name: "Comfort Inn Delicias",
    phone: "639-139-12-00",
    mapUrl: "https://maps.app.goo.gl/xGp7FsxQm9voErZi8",
  },
  {
    name: "Downtown Luxury Suites",
    phone: "639-268-95-30",
    mapUrl: "https://maps.app.goo.gl/3NhCjgN6SCqW4bK99",
  },
];

export default function HotelsCard() {
  return (
    <AnimatedCard className="text-center">
      <Stagger>
        <p className="font-sans-label mb-6" style={{ color: "var(--gold-antique)" }}>
          HOSPEDAJE
        </p>
      </Stagger>

      <Stagger>
        <p className="font-serif italic text-sm mb-6" style={{ color: "var(--olive-soft)" }}>
          Hemos reservado tarifas especiales
          <br />
          para nuestros invitados
        </p>
      </Stagger>

      {hotels.map((hotel, i) => (
        <Stagger key={i}>
          <div className={`${i > 0 ? "mt-6 pt-6" : ""}`} style={i > 0 ? { borderTop: "1px solid var(--beige)" } : {}}>
            <p
              className="font-serif font-semibold"
              style={{ color: "var(--ink-dark)", fontSize: "1.1rem" }}
            >
              {hotel.name}
            </p>
            <p className="font-serif text-sm mt-1" style={{ color: "var(--olive-soft)" }}>
              Tel.{" "}
              <a
                href={`tel:+52${hotel.phone.replace(/-/g, "")}`}
                style={{ color: "var(--terracotta)", textDecoration: "none" }}
              >
                {hotel.phone}
              </a>
            </p>
            <div
              className="mt-2 mx-auto px-3 py-1.5 inline-block"
              style={{
                backgroundColor: "rgba(86,100,74,0.08)",
                borderRadius: "2px",
              }}
            >
              <p className="font-sans-label" style={{ color: "var(--olive-primary)", fontSize: "0.55rem" }}>
                CÓDIGO: &ldquo;LAURA Y JORGE&rdquo;
              </p>
            </div>
            <div className="mt-3">
              <a
                href={hotel.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-map"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Ver mapa
              </a>
            </div>
          </div>
        </Stagger>
      ))}
    </AnimatedCard>
  );
}
