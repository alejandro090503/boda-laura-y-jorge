"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedCard, { Stagger } from "../AnimatedCard";

const PANEL_API = "https://panel-invitados.vercel.app/api/confirmar";
const RSVP_URL = "https://boda-laura-y-jorge.vercel.app";
const DEADLINE = new Date(2026, 6, 30, 23, 59, 59, 999); // 30 jul 2026

export default function RSVPCard() {
  const searchParams = useSearchParams();
  const urlPara = (searchParams.get("para") || "").trim();
  const rawP = parseInt(searchParams.get("pases") || "1", 10);
  const rawM = parseInt(searchParams.get("menores") || "0", 10);
  const [pases, setPases] = useState<number>(
    isNaN(rawP) || rawP < 1 || rawP > 20 ? 1 : rawP
  );
  const [menores, setMenores] = useState<number>(
    isNaN(rawM) || rawM < 0 || rawM > 20 ? 0 : rawM
  );

  const totalCampos = pases + menores;
  const frozen = Date.now() > DEADLINE.getTime();
  const [choice, setChoice] = useState<"yes" | "no" | null>(null);
  const [nombres, setNombres] = useState<string[]>(() => Array(totalCampos).fill(""));
  const [enviando, setEnviando] = useState(false);
  const [gateLoading, setGateLoading] = useState(!!urlPara);
  const [feedback, setFeedback] = useState("");
  const [feedbackKind, setFeedbackKind] = useState<"info" | "success" | "warn" | "error">("info");
  const [btnLabel, setBtnLabel] = useState(frozen ? "Fecha límite alcanzada" : "Confirmar");

  useEffect(() => {
    setNombres((prev) => {
      const next = Array(totalCampos).fill("");
      prev.forEach((v, i) => {
        if (i < totalCampos) next[i] = v;
      });
      return next;
    });
  }, [totalCampos]);

  useEffect(() => {
    if (!urlPara) return;
    fetch(
      `${PANEL_API}?nombre=${encodeURIComponent(urlPara)}&url_boda=${encodeURIComponent(RSVP_URL)}`
    )
      .then((r) => r.json())
      .then((resp) => {
        const d = resp.invitado;
        if (d && typeof d.pases === "number" && d.pases > 0 && d.pases <= 20) {
          setPases(d.pases);
        }
        if (d && typeof d.pases_menores === "number" && d.pases_menores >= 0 && d.pases_menores <= 20) {
          setMenores(d.pases_menores);
        }
        if (d && (d.estado === "confirmado" || d.estado === "declino")) {
          const c = d.estado === "confirmado" ? "yes" : "no";
          if (d.nombres_confirmados?.length) {
            setNombres((prev) => {
              const size = Math.max(prev.length, d.nombres_confirmados.length);
              const arr = Array(size).fill("");
              d.nombres_confirmados.forEach((n: string, i: number) => {
                arr[i] = n;
              });
              return arr;
            });
          }
          setChoice(c);
          setBtnLabel("Actualizar respuesta");
          setFeedbackKind("info");
          setFeedback(
            c === "yes"
              ? "¡Ya tienes confirmada tu asistencia! Puedes actualizar tu respuesta."
              : "Ya tienes registrado que no podrás asistir. Puedes cambiar tu respuesta."
          );
        }
      })
      .catch(() => {})
      .finally(() => setGateLoading(false));
  }, [urlPara]);

  const setNombreAt = (i: number, v: string) =>
    setNombres((prev) => prev.map((n, idx) => (idx === i ? v : n)));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (frozen || enviando) return;
    if (!choice) {
      setFeedbackKind("warn");
      setFeedback("Por favor selecciona si asistirás o no.");
      return;
    }
    const nombresFilled = choice === "yes" ? nombres.map((n) => n.trim()).filter(Boolean) : [];
    if (choice === "yes" && nombresFilled.length === 0) {
      setFeedbackKind("warn");
      setFeedback("Por favor escribe al menos un nombre.");
      return;
    }
    setEnviando(true);
    setBtnLabel("Enviando…");
    setFeedback("");
    try {
      await fetch(PANEL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: urlPara || nombresFilled[0] || "Invitado",
          url_boda: RSVP_URL,
          estado: choice === "yes" ? "confirmado" : "declino",
          pases_confirmados: choice === "yes" ? nombresFilled.length : 0,
          nombres_confirmados: choice === "yes" ? nombresFilled : [],
        }),
      });
      setBtnLabel("Actualizar respuesta");
      setFeedbackKind(choice === "yes" ? "success" : "info");
      setFeedback(
        choice === "yes"
          ? "¡Tu asistencia ha sido confirmada! Nos vemos pronto."
          : "Hemos registrado que no podrás asistir. ¡Gracias por avisarnos!"
      );
    } catch {
      setFeedbackKind("error");
      setFeedback("Error de conexión. Intenta de nuevo.");
      setBtnLabel("Confirmar");
    } finally {
      setEnviando(false);
    }
  };

  const feedbackColor =
    feedbackKind === "success"
      ? "var(--olive-primary)"
      : feedbackKind === "warn"
        ? "var(--terracotta)"
        : feedbackKind === "error"
          ? "#B85042"
          : "var(--gold-antique)";

  const togglesDisabled = frozen || gateLoading;

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
          Nos encantaría celebrar contigo
        </p>
      </Stagger>

      <Stagger>
        <div className="flex items-center gap-3 max-w-[280px] mx-auto mb-5">
          <span className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, var(--gold-antique))", opacity: 0.5 }} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold-antique)" style={{ opacity: 0.8 }}>
            <path d="M12 21.6C6.4 16 1 11.3 1 7.2 1 3.4 4.1 2 6.3 2c1.3 0 4.2.5 5.7 4.5C13.6 2.5 16.5 2 17.7 2 20.3 2 23 3.6 23 7.2c0 4.1-5.1 8.6-11 14.4z" />
          </svg>
          <span className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, var(--gold-antique))", opacity: 0.5 }} />
        </div>
      </Stagger>

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
            {menores > 0 && (
              <>
                {" "}y{" "}
                <span className="font-semibold" style={{ color: "var(--gold-antique)" }}>
                  {menores} {menores === 1 ? "menor" : "menores"}
                </span>
              </>
            )}
            {urlPara && (
              <>
                <br />
                para{" "}
                <span className="font-script" style={{ color: "var(--olive-primary)", fontSize: "1.7rem" }}>
                  {urlPara}
                </span>
              </>
            )}
          </p>
        </div>
      </Stagger>

      <Stagger>
        <form onSubmit={handleSubmit} className="max-w-[360px] mx-auto space-y-5">
          <div className="flex gap-3">
            {(["yes", "no"] as const).map((val) => {
              const sel = choice === val;
              const isYes = val === "yes";
              return (
                <button
                  key={val}
                  type="button"
                  onClick={() => setChoice(val)}
                  disabled={togglesDisabled}
                  className="flex-1 py-3 font-serif italic text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    border: `1.5px solid ${sel ? (isYes ? "var(--olive-primary)" : "var(--terracotta)") : "var(--beige)"}`,
                    backgroundColor: sel
                      ? isYes
                        ? "rgba(86,100,74,0.14)"
                        : "rgba(184,91,63,0.1)"
                      : "rgba(245,240,231,0.5)",
                    color: sel ? (isYes ? "var(--olive-primary)" : "var(--terracotta)") : "var(--ink-dark)",
                    borderRadius: 10,
                  }}
                >
                  {isYes ? "¡Asistiré!" : "No podré asistir"}
                </button>
              );
            })}
          </div>

          {choice === "yes" && (
            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-left">
              {pases > 0 && (
                <div className="space-y-2">
                  <p className="font-sans-label" style={{ color: "var(--ink-dark)", fontSize: "0.72rem" }}>
                    {menores > 0 ? "Nombre del adulto" : (pases === 1 ? "Nombre del invitado" : "Nombre de cada invitado")}
                  </p>
                  {Array.from({ length: pases }).map((_, i) => {
                    const idx = i;
                    return (
                      <input
                        key={`a-${idx}`}
                        type="text"
                        value={nombres[idx] || ""}
                        onChange={(e) => setNombreAt(idx, e.target.value)}
                        placeholder={menores > 0 ? "Nombre del adulto" : (pases === 1 ? "Tu nombre completo" : `Invitado ${i + 1}`)}
                        autoComplete="off"
                        maxLength={60}
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
                    );
                  })}
                </div>
              )}

              {menores > 0 && (
                <div className="space-y-2">
                  <p className="font-sans-label" style={{ color: "var(--ink-dark)", fontSize: "0.72rem" }}>
                    Nombre del Niño
                  </p>
                  {Array.from({ length: menores }).map((_, i) => {
                    const idx = pases + i;
                    return (
                      <input
                        key={`m-${idx}`}
                        type="text"
                        value={nombres[idx] || ""}
                        onChange={(e) => setNombreAt(idx, e.target.value)}
                        placeholder="Nombre del Niño"
                        autoComplete="off"
                        maxLength={60}
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
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={enviando || frozen}
            className="w-full py-4 font-sans-label transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              backgroundColor: "var(--gold-antique)",
              color: "var(--bg-cream)",
              letterSpacing: "0.25em",
              fontSize: "0.95rem",
              borderRadius: 50,
              boxShadow: "0 6px 18px rgba(176,141,87,0.3)",
            }}
          >
            {btnLabel}
          </button>

          {feedback && (
            <p
              className="font-serif italic"
              style={{ color: feedbackColor, fontSize: "1rem", lineHeight: 1.6, textAlign: "center" }}
            >
              {feedback}
            </p>
          )}
        </form>
      </Stagger>

      <Stagger>
        <div className="flex items-center justify-center gap-2 mt-6 mx-auto text-center" style={{ color: "var(--gold-antique)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
          </svg>
          <span className="font-serif italic" style={{ color: "var(--ink-dark)", fontSize: "1rem" }}>
            Si te es posible, confirma antes del
            <br />
            30 de julio de 2026
          </span>
        </div>
      </Stagger>
    </AnimatedCard>
  );
}
