"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Stagger } from "../AnimatedCard";

export default function HeroCard() {
  return (
    <motion.section
      className="relative w-[92vw] max-w-[400px] mx-auto mb-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Motivo floral recortado del propio sobre, en la esquina superior */}
      <motion.div
        className="absolute -top-10 -left-8 z-20 pointer-events-none"
        style={{ width: 150 }}
        initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
        whileInView={{ opacity: 0.55, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
      >
        <Image src="/assets/sobre-motivo-grande.png" alt="" width={150} height={134} style={{ width: "100%", height: "auto" }} />
      </motion.div>

      {/* Flat-lay: envelope with botanical liner behind the card */}
      <div className="relative pt-10 pb-6">
        {/* Envelope body (olive) */}
        <div
          className="absolute inset-x-2 top-0 bottom-6 rounded-[3px] overflow-hidden"
          style={{
            backgroundColor: "var(--olive-primary)",
            backgroundImage: "url('/paper-olive.jpg')",
            backgroundSize: "cover",
            boxShadow: "0 14px 40px rgba(59,48,40,0.22)",
          }}
        >
          {/* Botanical liner peeking at top */}
          <div
            className="absolute inset-x-0 top-0 h-[38%]"
            style={{
              backgroundImage: "url('/liner-band.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              clipPath: "polygon(0 0, 100% 0, 100% 55%, 50% 100%, 0 55%)",
            }}
          />
        </div>

        {/* The invitation card on top, ornate frame */}
        <motion.div
          className="relative mx-4 mt-8 mb-2"
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="ornate-card text-center px-6 py-9"
            style={{
              backgroundColor: "var(--bg-cream)",
              backgroundImage: "url('/paper-linen.jpg')",
              backgroundSize: "cover",
              boxShadow: "0 8px 24px rgba(59,48,40,0.18)",
            }}
          >
            <Stagger>
              <p className="font-serif italic text-lg" style={{ color: "var(--ink-dark)" }}>
                Con la bendición de Dios
              </p>
            </Stagger>
            <Stagger>
              <p className="font-serif italic text-lg mb-7" style={{ color: "var(--ink-dark)" }}>
                y el amor de nuestras familias
              </p>
            </Stagger>

            <Stagger>
              <h1 className="font-script px-2" style={{ color: "var(--olive-primary)", fontSize: "3.6rem", lineHeight: 1 }}>
                Laura Cristina
              </h1>
              <p className="font-serif italic px-2" style={{ color: "var(--olive-primary)", fontSize: "1.4rem", letterSpacing: "0.05em" }}>
                Acosta Reaza
              </p>
            </Stagger>
            <Stagger>
              <p className="font-script my-2" style={{ color: "var(--gold-antique)", fontSize: "3.4rem", lineHeight: 1, textShadow: "0 1px 3px rgba(176,141,87,0.25)" }}>
                &
              </p>
            </Stagger>
            <Stagger>
              <h1 className="font-script px-2" style={{ color: "var(--olive-primary)", fontSize: "3.6rem", lineHeight: 1 }}>
                Jorge Alberto
              </h1>
              <p className="font-serif italic px-2 mb-3" style={{ color: "var(--olive-primary)", fontSize: "1.4rem", letterSpacing: "0.05em" }}>
                Silva Márquez
              </p>
            </Stagger>

            <Stagger>
              <div className="fleuron">
                <span style={{ color: "var(--gold-antique)" }}>&#10086;</span>
              </div>
            </Stagger>

            <Stagger>
              <p className="font-serif italic text-xl mt-2" style={{ color: "var(--ink-dark)" }}>
                Tenemos el honor de invitarles a{" "}
                <span className="font-bold" style={{ fontSize: "1.35em" }}>
                  nuestra boda
                </span>
              </p>
            </Stagger>

            <Stagger>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-center">
                <span className="font-serif font-semibold" style={{ color: "var(--ink-dark)", fontSize: "2.1rem" }}>15</span>
                <span className="font-serif" style={{ color: "var(--gold-antique)", fontSize: "1.3rem" }}>·</span>
                <span className="font-serif font-semibold" style={{ color: "var(--ink-dark)", fontSize: "1.5rem", letterSpacing: "0.06em" }}>AGOSTO</span>
                <span className="font-serif" style={{ color: "var(--gold-antique)", fontSize: "1.3rem" }}>·</span>
                <span className="font-serif font-semibold" style={{ color: "var(--ink-dark)", fontSize: "2.1rem" }}>2026</span>
              </div>
            </Stagger>

            <Stagger>
              <p className="font-script mt-2" style={{ color: "var(--ink-dark)", fontSize: "1.5rem" }}>
                Delicias, Chihuahua, México
              </p>
            </Stagger>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
