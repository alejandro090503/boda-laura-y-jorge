"use client";

import { motion } from "framer-motion";

interface Props {
  onTap: () => void;
}

export default function MonogramScreen({ onTap }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center cursor-pointer"
      onClick={onTap}
      style={{
        backgroundColor: "var(--bg-cream)",
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,48,40,0.018) 2px, rgba(59,48,40,0.018) 3px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(59,48,40,0.012) 2px, rgba(59,48,40,0.012) 3px)
        `,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative"
      >
        <p
          className="font-script select-none"
          style={{
            color: "var(--olive-primary)",
            fontSize: "5.5rem",
            lineHeight: 1,
            opacity: 0.35,
          }}
        >
          Lj
        </p>
      </motion.div>

      {/* Subtle line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        className="mt-6"
        style={{
          width: 40,
          height: 1,
          backgroundColor: "var(--beige)",
        }}
      />

      {/* Tap hint */}
      <motion.p
        className="font-sans-label mt-8"
        style={{ color: "var(--olive-soft)", fontSize: "0.6rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0.3, 0.7] }}
        transition={{ delay: 1.5, duration: 3, repeat: Infinity }}
      >
        TOCA PARA CONTINUAR
      </motion.p>
    </motion.div>
  );
}
