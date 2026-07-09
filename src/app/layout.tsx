import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Laura & Jorge — 15 de Agosto 2026",
  description:
    "Con la bendición de Dios y el amor de nuestros padres, Laura Cristina y Jorge Alberto los invitan a celebrar su boda. 15 de agosto de 2026, Delicias, Chihuahua.",
  openGraph: {
    title: "Laura & Jorge — Nuestra Boda",
    description: "15 de Agosto de 2026 · Delicias, Chihuahua",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${serif.variable} ${script.variable} ${sans.variable}`}
    >
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
