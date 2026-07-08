"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onOpen: () => void;
  onTap?: () => void;
}

export default function EnvelopeLoader({ onOpen, onTap }: Props) {
  const [phase, setPhase] = useState<"sealed" | "opening" | "done">("sealed");

  const handleTap = useCallback(() => {
    if (phase !== "sealed") return;
    onTap?.(); // arranca la música dentro del gesto del usuario
    setPhase("opening");
    setTimeout(() => {
      setPhase("done");
      setTimeout(onOpen, 400);
    }, 2400);
  }, [phase, onOpen, onTap]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{
            backgroundColor: "var(--bg-cream)",
            backgroundImage: "url('/paper-aged.jpg')",
            backgroundSize: "600px auto",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="relative cursor-pointer"
            onClick={handleTap}
            style={{ perspective: "1000px", width: 300, height: 216 }}
          >
            {/* Envelope back + inside lined with botanical liner */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                borderRadius: 3,
                boxShadow: "0 12px 40px rgba(59,48,40,0.18)",
                backgroundColor: "var(--olive-primary)",
                backgroundImage: "url('/paper-olive.jpg')",
                backgroundSize: "cover",
              }}
            >
              {/* Botanical liner visible inside (revealed as flap opens) */}
              <motion.div
                className="absolute inset-x-0 top-0"
                style={{
                  height: "58%",
                  backgroundImage: "url('/liner-band.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  clipPath: "polygon(0 0, 100% 0, 50% 92%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === "opening" ? 1 : 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              />
            </div>

            {/* Front pocket (bottom triangle) of envelope */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: 6 }}
            >
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: "72%",
                  clipPath: "polygon(0 100%, 0 8%, 50% 62%, 100% 8%, 100% 100%)",
                  backgroundColor: "var(--olive-primary)",
                  backgroundImage: "url('/paper-olive.jpg')",
                  backgroundSize: "cover",
                  filter: "brightness(1.04)",
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.12)",
                }}
              />
            </div>

            {/* Card emerging from envelope */}
            <motion.div
              className="absolute left-5 right-5 flex items-center justify-center"
              style={{
                top: "12%",
                height: "74%",
                backgroundColor: "var(--bg-cream)",
                backgroundImage: "url('/paper-linen.jpg')",
                backgroundSize: "cover",
                boxShadow: "0 4px 14px rgba(59,48,40,0.16)",
                zIndex: 5,
                border: "1px solid rgba(176,141,87,0.35)",
              }}
              initial={{ y: 0, opacity: 0, scale: 0.85 }}
              animate={
                phase === "opening"
                  ? { y: -92, opacity: 1, scale: 1 }
                  : { y: 0, opacity: 0, scale: 0.85 }
              }
              transition={{ delay: 1.3, duration: 0.9, ease: "easeOut" }}
            >
              <div className="text-center px-4">
                <p
                  className="font-script"
                  style={{ color: "var(--olive-primary)", fontSize: "1.9rem", lineHeight: 1 }}
                >
                  Laura
                </p>
                <p className="font-script" style={{ color: "var(--gold-antique)", fontSize: "1rem" }}>
                  &
                </p>
                <p
                  className="font-script"
                  style={{ color: "var(--olive-primary)", fontSize: "1.9rem", lineHeight: 1 }}
                >
                  Jorge
                </p>
                <div className="divider" />
                <p
                  className="font-sans-label"
                  style={{ color: "var(--ink-dark)", fontSize: "0.55rem" }}
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
                height: "58%",
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
                zIndex: phase === "opening" ? 4 : 10,
              }}
              initial={{ rotateX: 0 }}
              animate={phase === "opening" ? { rotateX: -172 } : { rotateX: 0 }}
              transition={{ delay: 0.4, duration: 1.1, ease: "easeInOut" }}
            >
              {/* Flap front (olive) */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "var(--olive-primary)",
                  backgroundImage: "url('/paper-olive.jpg')",
                  backgroundSize: "cover",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  backfaceVisibility: "hidden",
                  filter: "brightness(0.9)",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              />
              {/* Flap back (botanical liner) */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                  backgroundImage: "url('/liner-band.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            {/* Wax seal */}
            <motion.div
              className="absolute z-20 flex items-center justify-center rounded-full"
              style={{
                width: 58,
                height: 58,
                left: "50%",
                top: "46%",
                marginLeft: -29,
                background:
                  "radial-gradient(circle at 35% 30%, #c9a366, var(--gold-antique) 55%, #856331)",
                boxShadow:
                  "0 3px 10px rgba(59,48,40,0.35), inset 0 1px 3px rgba(255,255,255,0.25), inset 0 -2px 4px rgba(0,0,0,0.2)",
              }}
              animate={
                phase === "sealed"
                  ? { y: [0, -4, 0], scale: 1, opacity: 1, rotate: 0 }
                  : { scale: 1.35, opacity: 0, rotate: 22 }
              }
              transition={
                phase === "sealed"
                  ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.4, ease: "easeIn" }
              }
            >
              <span
                className="font-script select-none"
                style={{
                  color: "var(--bg-cream)",
                  fontSize: "1.5rem",
                  lineHeight: 1,
                  textShadow: "0 1px 2px rgba(0,0,0,0.25)",
                }}
              >
                LJ
              </span>
            </motion.div>
          </div>

          {/* "Toca para abrir" */}
          <motion.p
            className="font-sans-label mt-10"
            style={{ color: "var(--olive-soft)", fontSize: "0.6rem" }}
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
