"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedCard, { Stagger } from "../AnimatedCard";

export default function RSVPCard() {
  const searchParams = useSearchParams();
  const para = searchParams.get("para") || "";
  const pases = Math.max(1, parseInt(searchParams.get("pases") || "2", 10));

  const [confirmado, setConfirmado] = useState<boolean | null>(null);
  const [nombres, setNombres] = useState<string[]>(() => {
    const arr = Array(pases).fill("");
    if (para) arr[0] = para;
    return arr;
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const setNombreAt = (i: number, v: string) =>
    setNombres((prev) => prev.map((n, idx) => (idx === i ? v : n)));

  const nombresLlenos = nombres.map((n) => n.trim()).filter(Boolean);
  const puedeEnviar =
    confirmado === false || (confirmado === true && nombresLlenos.length > 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmado === null || !puedeEnviar) return;
    setEnviando(true);

    try {
      const res = await fetch("https://panel-invitados.vercel.app/api/confirmar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: "boda-laura-y-jorge",
          nombre: para || nombresLlenos[0] || "",
          asistentes: confirmado ? nombresLlenos.length : 0,
          confirmado,
          mensaje: confirmado ? `Asisten: ${nombresLlenos.join(", ")}` : undefined,
        }),
      });
      if (res.ok) setEnviado(true);
    } catch {
      // silently fail
    } finally {
      setEnviando(false);
    }
  };

  if (enviado) {
    return (
      <AnimatedCard className="text-center py-10">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div
            className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
            style={{
              background: `radial-gradient(circle at 35% 35%, #c9a366, var(--gold-antique) 60%, #8a6d3b)`,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--bg-cream)" strokeWidth="2.5">
              <path d="M5 12l5 5L20 7" />
            </svg>
          </div>
        </motion.div>
        <p className="font-script" style={{ color: "var(--olive-primary)", fontSize: "2.4rem" }}>
          ¡Gracias!
        </p>
        <p className="font-serif text-xl mt-2" style={{ color: "var(--ink-dark)" }}>
          {confirmado
            ? "Nos emociona que nos acompañes"
            : "Lamentamos que no puedas asistir"}
        </p>
      </AnimatedCard>
    );
  }

  return (
    <AnimatedCard className="tex-fiber text-center" anim="unfold">
      <Stagger>
        <img
          src="/assets/olivo-acuarela.png"
          alt=""
          style={{ width: 140, height: "auto", margin: "0.25rem auto 0.75rem", opacity: 0.9 }}
        />
      </Stagger>

      <Stagger>
        <p className="font-script" style={{ color: "var(--olive-primary)", fontSize: "3rem", lineHeight: 1 }}>
          Confirmación
        </p>
      </Stagger>

      <Stagger>
        <p className="font-serif italic mb-2 mt-1" style={{ color: "var(--ink-dark)", fontSize: "1.15rem" }}>
          Nos encantaría contar contigo
        </p>
      </Stagger>

      {/* Divisor con corazón */}
      <Stagger>
        <div className="flex items-center gap-3 max-w-[280px] mx-auto mb-5">
          <span className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, var(--gold-antique))", opacity: 0.5 }} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold-antique)" style={{ opacity: 0.8 }}>
            <path d="M12 21.6C6.4 16 1 11.3 1 7.2 1 3.4 4.1 2 6.3 2c1.3 0 4.2.5 5.7 4.5C13.6 2.5 16.5 2 17.7 2 20.3 2 23 3.6 23 7.2c0 4.1-5.1 8.6-11 14.4z" />
          </svg>
          <span className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, var(--gold-antique))", opacity: 0.5 }} />
        </div>
      </Stagger>

      {/* Texto de pases */}
      <Stagger>
        <div
          className="max-w-[360px] mx-auto mb-5 px-5 py-3"
          style={{ backgroundColor: "rgba(176,141,87,0.1)", border: "1px solid var(--beige)", borderRadius: 14 }}
        >
          <p className="font-serif" style={{ color: "var(--ink-dark)", fontSize: "1.15rem", lineHeight: 1.4 }}>
            Tienes{" "}
            <span className="font-semibold" style={{ color: "var(--gold-antique)" }}>
              {pases} {pases === 1 ? "pase" : "pases"}
            </span>
            {para && (
              <>
                <br />
                para{" "}
                <span className="font-script" style={{ color: "var(--olive-primary)", fontSize: "1.7rem" }}>
                  {para}
                </span>
              </>
            )}
          </p>
        </div>
      </Stagger>

      <Stagger>
        <form onSubmit={handleSubmit} className="max-w-[360px] mx-auto space-y-5">
          {/* Toggle sí / no */}
          <div className="flex gap-3">
            {[true, false].map((val) => {
              const sel = confirmado === val;
              return (
                <button
                  key={String(val)}
                  type="button"
                  onClick={() => setConfirmado(val)}
                  className="flex-1 py-3 font-serif italic text-lg transition-all"
                  style={{
                    border: `1.5px solid ${sel ? (val ? "var(--olive-primary)" : "var(--terracotta)") : "var(--beige)"}`,
                    backgroundColor: sel ? (val ? "rgba(86,100,74,0.14)" : "rgba(184,91,63,0.1)") : "rgba(245,240,231,0.5)",
                    color: sel ? (val ? "var(--olive-primary)" : "var(--terracotta)") : "var(--ink-dark)",
                    borderRadius: 10,
                  }}
                >
                  {val ? "¡Asistiré!" : "No podré asistir"}
                </button>
              );
            })}
          </div>

          {/* Campos de nombres (uno por pase) al confirmar asistencia */}
          {confirmado === true && (
            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 text-left">
              <p className="font-sans-label" style={{ color: "var(--ink-dark)", fontSize: "0.72rem" }}>
                {pases === 1 ? "Nombre del invitado" : "Nombre de cada invitado"}
              </p>
              {nombres.map((n, i) => (
                <input
                  key={i}
                  type="text"
                  value={n}
                  onChange={(e) => setNombreAt(i, e.target.value)}
                  placeholder={`Invitado ${i + 1}`}
                  className="w-full px-4 py-3 font-serif text-lg outline-none transition-all"
                  style={{
                    backgroundColor: "rgba(245,240,231,0.6)",
                    border: "1.5px solid var(--beige)",
                    borderRadius: 12,
                    color: "var(--ink-dark)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold-antique)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--beige)")}
                />
              ))}
            </motion.div>
          )}

          {/* Botón pill */}
          <button
            type="submit"
            disabled={enviando || confirmado === null || !puedeEnviar}
            className="w-full py-4 font-sans-label transition-all disabled:opacity-40"
            style={{
              backgroundColor: "var(--gold-antique)",
              color: "var(--bg-cream)",
              letterSpacing: "0.25em",
              fontSize: "0.95rem",
              borderRadius: 50,
              boxShadow: "0 6px 18px rgba(176,141,87,0.3)",
            }}
          >
            {enviando ? "Enviando..." : "Confirmar"}
          </button>
        </form>
      </Stagger>

      {/* Fecha límite con reloj */}
      <Stagger>
        <div className="inline-flex items-center gap-2 mt-6 mx-auto" style={{ color: "var(--gold-antique)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
          </svg>
          <span className="font-serif italic" style={{ color: "var(--ink-dark)", fontSize: "1rem" }}>
            Si te es posible, confirma antes del 5 de agosto de 2026
          </span>
        </div>
      </Stagger>
    </AnimatedCard>
  );
}
