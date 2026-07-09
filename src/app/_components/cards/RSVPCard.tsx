"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedCard, { Stagger } from "../AnimatedCard";

export default function RSVPCard() {
  const searchParams = useSearchParams();
  const para = searchParams.get("para") || "";
  const pases = parseInt(searchParams.get("pases") || "2", 10);

  const [nombre, setNombre] = useState(para);
  const [asistentes, setAsistentes] = useState(pases);
  const [confirmado, setConfirmado] = useState<boolean | null>(null);
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmado === null || !nombre.trim()) return;
    setEnviando(true);

    try {
      const res = await fetch("https://panel-invitados.vercel.app/api/confirmar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: "boda-laura-y-jorge",
          nombre: nombre.trim(),
          asistentes: confirmado ? asistentes : 0,
          confirmado,
          mensaje: mensaje.trim() || undefined,
        }),
      });
      if (res.ok) {
        setEnviado(true);
      }
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
        <p className="font-sans-label mb-1" style={{ color: "var(--gold-antique)" }}>
          CONFIRMACIÓN
        </p>
      </Stagger>

      <Stagger>
        <p className="font-script mb-3" style={{ color: "var(--olive-primary)", fontSize: "3rem", lineHeight: 1 }}>
          Nos encantaría contar contigo
        </p>
      </Stagger>

      <Stagger>
        <p className="font-serif italic text-lg mb-6" style={{ color: "var(--ink-dark)" }}>
          Confirma antes del 5 de agosto de 2026
        </p>
      </Stagger>

      <Stagger>
        <form onSubmit={handleSubmit} className="text-left space-y-5">
          <div>
            <label className="font-sans-label block mb-2" style={{ color: "var(--ink-dark)" }}>
              Nombre
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full px-3 py-2 font-serif text-lg outline-none transition-colors"
              style={{
                backgroundColor: "transparent",
                borderBottom: "1px solid var(--beige)",
                color: "var(--ink-dark)",
              }}
              onFocus={(e) => (e.target.style.borderBottomColor = "var(--gold-antique)")}
              onBlur={(e) => (e.target.style.borderBottomColor = "var(--beige)")}
            />
          </div>

          <div>
            <label className="font-sans-label block mb-3" style={{ color: "var(--ink-dark)" }}>
              ¿Asistirás?
            </label>
            <div className="flex gap-3 justify-center">
              {[true, false].map((val) => (
                <button
                  key={String(val)}
                  type="button"
                  onClick={() => setConfirmado(val)}
                  className="px-6 py-3 font-serif text-lg transition-all"
                  style={{
                    border: `1px solid ${confirmado === val ? "var(--gold-antique)" : "var(--beige)"}`,
                    backgroundColor: confirmado === val ? "var(--gold-antique)" : "transparent",
                    color: confirmado === val ? "var(--bg-cream)" : "var(--ink-dark)",
                  }}
                >
                  {val ? "Sí, asistiré" : "No podré ir"}
                </button>
              ))}
            </div>
          </div>

          {confirmado && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}>
              <label className="font-sans-label block mb-2" style={{ color: "var(--ink-dark)" }}>
                Número de personas
              </label>
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setAsistentes(Math.max(1, asistentes - 1))}
                  className="w-8 h-8 flex items-center justify-center font-serif"
                  style={{ border: "1px solid var(--beige)", color: "var(--ink-dark)" }}
                >
                  −
                </button>
                <span className="font-serif font-semibold text-xl" style={{ color: "var(--ink-dark)" }}>
                  {asistentes}
                </span>
                <button
                  type="button"
                  onClick={() => setAsistentes(Math.min(pases, asistentes + 1))}
                  className="w-8 h-8 flex items-center justify-center font-serif"
                  style={{ border: "1px solid var(--beige)", color: "var(--ink-dark)" }}
                >
                  +
                </button>
              </div>
            </motion.div>
          )}

          <div>
            <label className="font-sans-label block mb-2" style={{ color: "var(--ink-dark)" }}>
              Mensaje para los novios
            </label>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 font-serif text-lg outline-none resize-none transition-colors"
              style={{
                backgroundColor: "transparent",
                borderBottom: "1px solid var(--beige)",
                color: "var(--ink-dark)",
              }}
              onFocus={(e) => (e.target.style.borderBottomColor = "var(--gold-antique)")}
              onBlur={(e) => (e.target.style.borderBottomColor = "var(--beige)")}
              placeholder="Opcional"
            />
          </div>

          <button
            type="submit"
            disabled={enviando || confirmado === null || !nombre.trim()}
            className="w-full py-3 font-sans-label transition-all disabled:opacity-40"
            style={{
              backgroundColor: "var(--gold-antique)",
              color: "var(--bg-cream)",
              letterSpacing: "0.2em",
              fontSize: "1.05rem",
            }}
          >
            {enviando ? "Enviando..." : "Confirmar"}
          </button>
        </form>
      </Stagger>

      <div className="mt-4" />
    </AnimatedCard>
  );
}
