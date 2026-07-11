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
    <AnimatedCard className="card-mini-envelope flap-terracotta text-center" anim="blurRise">
      <div className="mini-flap" />

      <Stagger>
        <p className="font-script mb-1" style={{ color: "var(--olive-primary)", fontSize: "3rem", lineHeight: 1 }}>
          Hospedaje
        </p>
      </Stagger>

      <Stagger>
        <div className="flex justify-center mb-2">
          <img
            src="/assets/sobre-motivo-chico.png"
            alt=""
            className="pointer-events-none"
            style={{ width: 90, height: "auto", opacity: 0.95 }}
          />
        </div>
      </Stagger>

      <Stagger>
        <p className="font-serif italic text-lg mb-5 px-2" style={{ color: "var(--ink-dark)" }}>
          Hemos solicitado tarifas especiales
          <br />para nuestros invitados e invitadas
        </p>
      </Stagger>

      {hotels.map((hotel, i) => (
        <Stagger key={i}>
          <div
            className={i > 0 ? "mt-5 pt-5" : ""}
            style={i > 0 ? { borderTop: "1px solid var(--beige)" } : {}}
          >
            <p className="font-serif font-semibold" style={{ color: "var(--ink-dark)", fontSize: "1.55rem" }}>
              {hotel.name}
            </p>
            <p className="font-serif text-lg mt-1" style={{ color: "var(--ink-dark)" }}>
              Tel.{" "}
              <a
                href={`tel:+52${hotel.phone.replace(/-/g, "")}`}
                style={{ color: "var(--terracotta)", textDecoration: "none" }}
              >
                {hotel.phone}
              </a>
            </p>
            <div
              className="mt-2 mx-auto px-3 py-1 inline-block"
              style={{ backgroundColor: "rgba(86,100,74,0.08)" }}
            >
              <p className="font-sans-label" style={{ color: "var(--ink-dark)", fontSize: "0.75rem" }}>
                CÓDIGO: &ldquo;LAURA Y JORGE&rdquo;
              </p>
            </div>
            <div className="mt-2">
              <a href={hotel.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-map">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                VER MAPA
              </a>
            </div>
          </div>
        </Stagger>
      ))}
    </AnimatedCard>
  );
}
