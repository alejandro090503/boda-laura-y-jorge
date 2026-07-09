"use client";

/* Pétalos flotantes HD en la paleta — decorativos, semitransparentes, detrás del contenido. */

type Petal = {
  left: number;      // %
  size: number;      // px
  color: string;
  opacity: number;
  fall: number;      // s (caída vertical)
  sway: number;      // s (balanceo)
  delay: number;     // s (negativo => empieza a mitad)
};

// paleta de pétalos (dentro de la paleta de la boda + un rosa polvo cálido derivado)
const PALETTE = ["#b85b3f", "#707b58", "#b08d57", "#d9ccb3", "#c98b74"];

// configuración determinista (evita mismatch de hidratación)
const PETALS: Petal[] = [
  { left: 4, size: 22, color: PALETTE[0], opacity: 0.22, fall: 17, sway: 6.5, delay: -2 },
  { left: 12, size: 15, color: PALETTE[1], opacity: 0.18, fall: 21, sway: 5.5, delay: -9 },
  { left: 20, size: 26, color: PALETTE[3], opacity: 0.2, fall: 15, sway: 7, delay: -5 },
  { left: 28, size: 18, color: PALETTE[2], opacity: 0.24, fall: 19, sway: 6, delay: -13 },
  { left: 36, size: 13, color: PALETTE[4], opacity: 0.2, fall: 23, sway: 5, delay: -1 },
  { left: 44, size: 24, color: PALETTE[1], opacity: 0.19, fall: 16, sway: 7.5, delay: -7 },
  { left: 52, size: 16, color: PALETTE[0], opacity: 0.22, fall: 20, sway: 6, delay: -15 },
  { left: 60, size: 20, color: PALETTE[3], opacity: 0.2, fall: 18, sway: 6.8, delay: -3 },
  { left: 68, size: 14, color: PALETTE[2], opacity: 0.23, fall: 22, sway: 5.2, delay: -11 },
  { left: 76, size: 25, color: PALETTE[4], opacity: 0.18, fall: 15.5, sway: 7.2, delay: -6 },
  { left: 84, size: 17, color: PALETTE[1], opacity: 0.2, fall: 20.5, sway: 6.1, delay: -14 },
  { left: 92, size: 21, color: PALETTE[0], opacity: 0.2, fall: 17.5, sway: 6.6, delay: -4 },
  { left: 16, size: 12, color: PALETTE[2], opacity: 0.18, fall: 24, sway: 4.8, delay: -18 },
  { left: 48, size: 13, color: PALETTE[3], opacity: 0.19, fall: 23, sway: 5.4, delay: -10 },
  { left: 72, size: 12, color: PALETTE[4], opacity: 0.2, fall: 22.5, sway: 5, delay: -16 },
  { left: 88, size: 14, color: PALETTE[1], opacity: 0.18, fall: 21, sway: 5.6, delay: -8 },
];

function PetalSVG({ color, size }: { color: string; size: number }) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 20 28"
      fill="none"
      style={{
        display: "block",
        filter: "blur(0.4px) drop-shadow(0 1px 2px rgba(59,48,40,0.12))",
      }}
      aria-hidden="true"
    >
      <path d="M10 0 C3 7 3 21 10 28 C17 21 17 7 10 0 Z" fill={color} />
      <path
        d="M10 2 C6.5 8 6.5 18 10 25"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Petals() {
  return (
    <div className="petals-layer" aria-hidden="true">
      {PETALS.map((p, i) => (
        <div
          key={i}
          className="petal-fall"
          style={{
            left: `${p.left}%`,
            opacity: p.opacity,
            animationDuration: `${p.fall}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <div
            className="petal-sway"
            style={{ animationDuration: `${p.sway}s`, animationDelay: `${p.delay}s` }}
          >
            <PetalSVG color={p.color} size={p.size} />
          </div>
        </div>
      ))}
    </div>
  );
}
