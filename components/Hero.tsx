"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { INSTAGRAM_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden vignette"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-sunset.jpg"
          alt="Vintage red Mercedes-Benz 560 SL convertible against a Beirut sunset on the Mediterranean seafront"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* cinematic gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/30 to-ink/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />
      </div>

      {/* Floating Beirut · Lebanon vertical label */}
      <div className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-10 items-center gap-3">
        <span className="floating-label">Beirut · Lebanon</span>
        <span className="block w-px h-24 bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10 pt-40 md:pt-48 pb-24 min-h-[100svh] flex flex-col">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="luxury-badge">
            <span className="block w-1.5 h-1.5 rounded-full bg-red-glow animate-subtle-pulse" />
            Vintage Mercedes-Benz 560 SL
          </span>
        </motion.div>

        {/* Script flourish */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="script-mark mt-8 text-3xl md:text-4xl"
        >
          Lady in Red
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="headline mt-3 text-[44px] sm:text-6xl lg:text-[88px] max-w-4xl"
        >
          She’s not just a car. <em>She’s the scene.</em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-cream/80"
        >
          A vintage red Mercedes 560 SL for weddings, videos, photoshoots, and
          timeless arrivals in Beirut.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
          >
            DM on Instagram
          </a>
          <a href="#gallery" className="btn-ghost">
            View the Gallery
          </a>
        </motion.div>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 text-[11px] tracking-widest2 uppercase text-cream/55"
        >
          Beirut, Lebanon · Weddings · Videos · Editorial Shoots · Private Events
        </motion.p>

        {/* Supporting labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-auto pt-16 hidden md:flex items-center gap-8 text-[10.5px] tracking-widest2 uppercase text-gold/75"
        >
          <span>Classic convertible icon</span>
          <span className="block w-1 h-1 rounded-full bg-gold/50" />
          <span>Photo-ready for unforgettable moments</span>
          <span className="block w-1 h-1 rounded-full bg-gold/50" />
          <span>Available by Instagram DM</span>
        </motion.div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-widest2 uppercase text-cream/55">
          <span>Scroll</span>
          <span className="block w-px h-10 bg-gradient-to-b from-gold/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}
