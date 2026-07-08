"use client";

/* Adornos botánicos de línea elegante en la paleta de la boda. */

export function OliveBranch({
  className = "",
  color = "var(--olive-soft)",
  width = 90,
  flip = false,
}: {
  className?: string;
  color?: string;
  width?: number;
  flip?: boolean;
}) {
  return (
    <svg
      className={className}
      width={width}
      height={width * 0.5}
      viewBox="0 0 200 100"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <path d="M10 50 Q70 45 190 50" />
      {[30, 55, 80, 105, 130, 155].map((x, i) => {
        const up = i % 2 === 0;
        const dy = up ? -1 : 1;
        return (
          <g key={x}>
            <path d={`M${x} 50 Q${x + 8} ${50 + dy * 16} ${x + 20} ${50 + dy * 20}`} />
            <ellipse
              cx={x + 14}
              cy={50 + dy * 18}
              rx="9"
              ry="4"
              fill={color}
              opacity="0.18"
              stroke="none"
              transform={`rotate(${dy * 30} ${x + 14} ${50 + dy * 18})`}
            />
          </g>
        );
      })}
      {/* olives */}
      <ellipse cx="70" cy="42" rx="4" ry="6" fill={color} opacity="0.35" stroke="none" />
      <ellipse cx="120" cy="60" rx="4" ry="6" fill={color} opacity="0.35" stroke="none" />
    </svg>
  );
}

export function FloralSprig({
  className = "",
  color = "var(--terracotta)",
  leaf = "var(--olive-soft)",
  width = 60,
}: {
  className?: string;
  color?: string;
  leaf?: string;
  width?: number;
}) {
  return (
    <svg
      className={className}
      width={width}
      height={width * 1.3}
      viewBox="0 0 100 130"
      fill="none"
      aria-hidden="true"
    >
      <path d="M50 130 Q48 80 50 40" stroke={leaf} strokeWidth="1.4" strokeLinecap="round" />
      {/* leaves */}
      <ellipse cx="35" cy="95" rx="11" ry="5" fill={leaf} opacity="0.25" transform="rotate(-35 35 95)" />
      <ellipse cx="66" cy="80" rx="11" ry="5" fill={leaf} opacity="0.25" transform="rotate(35 66 80)" />
      <ellipse cx="38" cy="65" rx="9" ry="4" fill={leaf} opacity="0.25" transform="rotate(-35 38 65)" />
      {/* blossom - 5 petals */}
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse
          key={a}
          cx="50"
          cy="26"
          rx="6"
          ry="11"
          fill={color}
          opacity="0.55"
          transform={`rotate(${a} 50 34)`}
        />
      ))}
      <circle cx="50" cy="34" r="4" fill="var(--gold-antique)" opacity="0.8" />
    </svg>
  );
}

export function Flourish({
  className = "",
  color = "var(--gold-antique)",
  width = 120,
}: {
  className?: string;
  color?: string;
  width?: number;
}) {
  return (
    <svg
      className={className}
      width={width}
      height="16"
      viewBox="0 0 240 32"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M20 16 H95" opacity="0.6" />
      <path d="M145 16 H220" opacity="0.6" />
      <path d="M95 16 Q108 6 120 16 Q132 26 145 16" />
      <circle cx="120" cy="16" r="2.5" fill={color} stroke="none" />
      <circle cx="20" cy="16" r="1.5" fill={color} stroke="none" opacity="0.6" />
      <circle cx="220" cy="16" r="1.5" fill={color} stroke="none" opacity="0.6" />
    </svg>
  );
}

export function WaxSeal({ size = 54, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 35% 30%, #c9a366, var(--gold-antique) 55%, #856331)",
        boxShadow:
          "0 3px 9px rgba(59,48,40,0.3), inset 0 1px 3px rgba(255,255,255,0.25), inset 0 -2px 4px rgba(0,0,0,0.2)",
      }}
      aria-hidden="true"
    >
      <span
        className="font-script select-none"
        style={{
          color: "var(--bg-cream)",
          fontSize: size * 0.42,
          lineHeight: 1,
          textShadow: "0 1px 2px rgba(0,0,0,0.25)",
        }}
      >
        LJ
      </span>
    </div>
  );
}

/* Corner botanical accent — absolute positioned inside a card */
export function CornerSprig({
  position = "tl",
  color = "var(--olive-soft)",
}: {
  position?: "tl" | "tr" | "bl" | "br";
  color?: string;
}) {
  const rot = { tl: 0, tr: 90, br: 180, bl: 270 }[position];
  const pos = {
    tl: { top: 6, left: 6 },
    tr: { top: 6, right: 6 },
    bl: { bottom: 6, left: 6 },
    br: { bottom: 6, right: 6 },
  }[position];
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 80 80"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      className="absolute pointer-events-none"
      style={{ ...pos, transform: `rotate(${rot}deg)`, opacity: 0.5 }}
      aria-hidden="true"
    >
      <path d="M8 8 Q40 12 60 40" />
      <ellipse cx="24" cy="14" rx="7" ry="3" fill={color} opacity="0.3" stroke="none" transform="rotate(20 24 14)" />
      <ellipse cx="40" cy="22" rx="7" ry="3" fill={color} opacity="0.3" stroke="none" transform="rotate(35 40 22)" />
      <ellipse cx="52" cy="32" rx="6" ry="3" fill={color} opacity="0.3" stroke="none" transform="rotate(50 52 32)" />
      <circle cx="14" cy="10" r="2.5" fill="var(--terracotta)" opacity="0.5" stroke="none" />
    </svg>
  );
}
