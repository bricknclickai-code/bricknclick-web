"use client";

import { motion } from "motion/react";

const HREF =
  "https://wa.me/919019508519?text=Hi%20Bricknclick%2C%20I%27d%20like%20to%20discuss%20a%20project.";

/**
 * Floating WhatsApp tap-to-chat button.
 * Mobile + tablet only (hidden on lg+ where desktop nav handles conversion).
 * For an Indian B2B agency, WhatsApp is the #1 inbound conversion lever —
 * tap-to-chat consistently outperforms form-fills on mobile.
 */
export function WhatsAppFab() {
  return (
    <motion.a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 1.2,
        duration: 0.6,
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 active:scale-95 lg:hidden"
    >
      {/* Subtle live pulse ring */}
      <span
        aria-hidden
        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30"
      />

      {/* WhatsApp glyph (inline SVG — Lucide doesn't ship a brand mark) */}
      <svg
        aria-hidden
        viewBox="0 0 32 32"
        className="relative h-7 w-7 fill-current"
      >
        <path d="M16.004 5.333c-5.89 0-10.667 4.778-10.667 10.668 0 1.879.49 3.71 1.422 5.326L5.333 26.667l5.519-1.447a10.62 10.62 0 0 0 5.15 1.314h.004c5.89 0 10.66-4.777 10.66-10.667S21.894 5.333 16.004 5.333zm6.243 15.262c-.265.743-1.541 1.42-2.155 1.512-.55.082-1.244.116-2.005-.127-.464-.148-1.06-.345-1.823-.674-3.205-1.382-5.298-4.61-5.458-4.824-.16-.214-1.314-1.745-1.314-3.33 0-1.585.832-2.366 1.128-2.687.295-.32.643-.401.857-.401.214 0 .428.002.616.011.197.01.461-.075.722.55.265.643.9 2.228.978 2.388.08.16.133.347.027.561-.107.215-.16.347-.32.535-.16.187-.337.418-.481.561-.16.16-.328.334-.14.654.188.32.832 1.374 1.787 2.226 1.228 1.094 2.262 1.434 2.583 1.594.32.16.508.134.696-.08.187-.214.802-.937.916-1.259.114-.32.227-.267.401-.16.174.107 1.106.521 1.296.616.187.094.314.14.36.214.045.075.045.428-.22 1.17z" />
      </svg>
    </motion.a>
  );
}
