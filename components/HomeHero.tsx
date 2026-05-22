"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { INSTAGRAM_URL, BRAND } from "@/lib/constants";

export default function HomeHero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden vignette"
    >
      {/* Background image — Lady in Red against the Beirut sunset */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-sunset.jpg"
          alt="Beirut Classic Circle — vintage red Mercedes-Benz 560 SL on the Beirut waterfront at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/65 via-ink/35 to-ink/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-transparent to-transparent" />
      </div>

      {/* Vertical Beirut label */}
      <div className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-10 items-center gap-3">
        <span className="floating-label">Beirut · Lebanon</span>
        <span className="block w-px h-24 bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10 pt-44 md:pt-52 pb-24 min-h-[100svh] flex flex-col">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="eyebrow tracking-widest2 text-red-glow uppercase text-[11px]"
        >
          {BRAND.tagline}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="headline mt-6 text-[42px] sm:text-6xl lg:text-[88px] max-w-4xl uppercase tracking-tight"
        >
          Timeless machines<br className="hidden sm:inline" /> for{" "}
          <em>unforgettable moments.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-7 text-[11px] tracking-widest2 uppercase text-cream/75"
        >
          Weddings · Events · Films · Experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-3 cta-stack"
        >
          <Link href="#collection" className="btn-red">
            Explore the Collection
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            DM on Instagram
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-auto pt-16 hidden md:flex items-center gap-8 text-[10.5px] tracking-widest2 uppercase text-gold/75"
        >
          <span>Curated fleet</span>
          <span className="block w-1 h-1 rounded-full bg-gold/50" />
          <span>Beirut-based, Lebanon-wide</span>
          <span className="block w-1 h-1 rounded-full bg-gold/50" />
          <span>Bookings by Instagram DM</span>
        </motion.div>

        {/* Scroll cue — hidden on mobile so it doesn't sit under the
            fixed bottom action bar */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-widest2 uppercase text-cream/55">
          <span>Scroll</span>
          <span className="block w-px h-10 bg-gradient-to-b from-gold/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}
