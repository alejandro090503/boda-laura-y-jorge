"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  src: string;
  hotel: string;
}

const slides: Slide[] = [
  { src: "/hoteles/h-comfort-1.jpg", hotel: "Comfort Inn Delicias" },
  { src: "/hoteles/h-downtown-1.jpg", hotel: "Downtown Luxury Suites" },
  { src: "/hoteles/h-comfort-2.jpg", hotel: "Comfort Inn Delicias" },
  { src: "/hoteles/h-downtown-2.jpg", hotel: "Downtown Luxury Suites" },
  { src: "/hoteles/h-comfort-3.jpg", hotel: "Comfort Inn Delicias" },
  { src: "/hoteles/h-downtown-3.jpg", hotel: "Downtown Luxury Suites" },
];

export default function HotelCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3200);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <div
      className="relative w-full mx-auto overflow-hidden"
      style={{
        aspectRatio: "16 / 10",
        borderRadius: 3,
        border: "1px solid var(--gold-antique)",
        boxShadow: "0 4px 14px rgba(59,48,40,0.18)",
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <Image
            src={slides[index].src}
            alt={slides[index].hotel}
            fill
            style={{ objectFit: "cover" }}
            sizes="360px"
            priority={index === 0}
          />
          {/* warm overlay for editorial tone */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(59,48,40,0.55) 0%, rgba(59,48,40,0.05) 45%, transparent 70%)",
            }}
          />
          <p
            className="absolute bottom-2 left-0 right-0 text-center font-script"
            style={{ color: "var(--bg-cream)", fontSize: "1.05rem", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            {slides[index].hotel}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* dots */}
      <div className="absolute bottom-2 right-2 flex gap-1 z-10">
        {slides.map((_, i) => (
          <span
            key={i}
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: i === index ? "var(--gold-antique)" : "rgba(245,240,231,0.5)",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
