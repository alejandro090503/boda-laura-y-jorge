"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onOpen: () => void;
}

export default function EnvelopeLoader({ onOpen }: Props) {
  const [phase, setPhase] = useState<"sealed" | "opening" | "done">("sealed");

  const handleTap = useCallback(() => {
    if (phase !== "sealed") return;
    setPhase("opening");
    setTimeout(() => {
      setPhase("done");
      setTimeout(onOpen, 400);
    }, 2200);
  }, [phase, onOpen]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ backgroundColor: "var(--bg-cream)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="relative cursor-pointer"
            onClick={handleTap}
            style={{ perspective: "800px", width: 300, height: 220 }}
          >
            {/* Envelope body */}
            <div
              className="absolute inset-0 rounded-sm overflow-hidden"
              style={{
                backgroundColor: "var(--olive-primary)",
                boxShadow: "0 8px 32px rgba(59,48,40,0.15)",
              }}
            >
              {/* Inner V fold line */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: "65%",
                  clipPath: "polygon(0 100%, 50% 20%, 100% 100%)",
                  backgroundColor: "rgba(0,0,0,0.06)",
                }}
              />
            </div>

            {/* Liner revealed behind flap */}
            <div
              className="absolute top-0 left-0 right-0 overflow-hidden transition-opacity duration-500"
              style={{
                height: "55%",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                opacity: phase === "opening" ? 1 : 0,
                transitionDelay: "0.5s",
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: `
                    radial-gradient(ellipse at 25% 35%, rgba(184,91,63,0.4) 0%, transparent 45%),
                    radial-gradient(ellipse at 75% 25%, rgba(112,123,88,0.35) 0%, transparent 40%),
                    radial-gradient(ellipse at 50% 65%, rgba(176,141,87,0.25) 0%, transparent 50%),
                    radial-gradient(ellipse at 20% 70%, rgba(86,100,74,0.2) 0%, transparent 35%),
                    radial-gradient(ellipse at 80% 60%, rgba(184,91,63,0.2) 0%, transparent 40%),
                    var(--bg-cream)
                  `,
                }}
              />
            </div>

            {/* Card emerging from envelope */}
            <motion.div
              className="absolute left-4 right-4 flex items-center justify-center"
              style={{
                top: "15%",
                height: "70%",
                backgroundColor: "var(--bg-cream)",
                boxShadow: "0 2px 8px rgba(59,48,40,0.1)",
                zIndex: 5,
              }}
              initial={{ y: 0, opacity: 0, scale: 0.85 }}
              animate={
                phase === "opening"
                  ? { y: -80, opacity: 1, scale: 1 }
                  : { y: 0, opacity: 0, scale: 0.85 }
              }
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-center px-4">
                <p
                  className="font-script"
                  style={{ color: "var(--olive-primary)", fontSize: "1.8rem" }}
                >
                  Laura & Jorge
                </p>
                <div className="divider" />
                <p
                  className="font-sans-label"
                  style={{ color: "var(--ink-dark)", fontSize: "0.6rem" }}
                >
                  15 · AGOSTO · 2026
                </p>
              </div>
            </motion.div>

            {/* Flap (3D rotation) */}
            <motion.div
              className="absolute left-0 right-0"
              style={{
                top: 0,
                height: "55%",
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
                zIndex: phase === "opening" ? 4 : 10,
              }}
              initial={{ rotateX: 0 }}
              animate={phase === "opening" ? { rotateX: -180 } : { rotateX: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
            >
              {/* Flap front */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "var(--olive-primary)",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  backfaceVisibility: "hidden",
                  filter: "brightness(0.92)",
                }}
              />
              {/* Flap back */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                  background: `
                    radial-gradient(ellipse at 30% 40%, rgba(184,91,63,0.3) 0%, transparent 50%),
                    radial-gradient(ellipse at 70% 30%, rgba(112,123,88,0.3) 0%, transparent 40%),
                    var(--bg-cream)
                  `,
                }}
              />
            </motion.div>

            {/* Wax seal */}
            <motion.div
              className="absolute z-20 flex items-center justify-center rounded-full"
              style={{
                width: 56,
                height: 56,
                left: "50%",
                top: "48%",
                marginLeft: -28,
                background: `radial-gradient(circle at 35% 35%, #c9a366, var(--gold-antique) 60%, #8a6d3b)`,
                boxShadow:
                  "0 2px 8px rgba(59,48,40,0.3), inset 0 1px 2px rgba(255,255,255,0.2)",
              }}
              animate={
                phase === "sealed"
                  ? { y: [0, -4, 0], scale: 1, opacity: 1, rotate: 0 }
                  : { scale: 1.3, opacity: 0, rotate: 20 }
              }
              transition={
                phase === "sealed"
                  ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.4, ease: "easeIn" }
              }
            >
              <span
                className="font-serif font-semibold select-none"
                style={{
                  color: "var(--bg-cream)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                L&nbsp;&&nbsp;J
              </span>
            </motion.div>
          </div>

          {/* "Toca para abrir" */}
          <motion.p
            className="font-sans-label mt-8"
            style={{ color: "var(--olive-soft)" }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Toca para abrir
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
