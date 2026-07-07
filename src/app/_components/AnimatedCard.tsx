"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
}: Props) {
  return (
    <motion.div
      className={`card-base ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        variants={{
          hidden: {},
          visible: {
            transition: { delayChildren: 0.1 + delay, staggerChildren: 0.08 },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Stagger({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
    >
      {children}
    </motion.div>
  );
}
