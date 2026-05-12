"use client";

import Image from "next/image";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, BRAND } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section
      id="gallery"
      className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/just-married.jpg"
          alt="Classic Circle — a Just Married scene on a candle-lit drive"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/55 to-ink/95" />
      </div>

      <div className="relative z-10 text-center px-5 max-w-4xl py-32">
        <span className="luxury-badge">
          <span className="block w-1.5 h-1.5 rounded-full bg-red-glow animate-subtle-pulse" />
          The closing scene
        </span>
        <h2 className="headline mt-8 text-[40px] sm:text-6xl lg:text-[88px] uppercase tracking-tight">
          Your moment <em>starts here.</em>
        </h2>
        <p className="mt-6 text-cream/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {BRAND.short}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 cta-stack">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-red">
            DM on Instagram
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Follow {INSTAGRAM_HANDLE}
          </a>
        </div>

        <p className="mt-10 font-serif italic text-cream/65 text-lg">
          “Some moments deserve more than a ride — they deserve an icon.”
        </p>
      </div>
    </section>
  );
}
