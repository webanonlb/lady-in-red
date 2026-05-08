"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { INSTAGRAM_URL } from "@/lib/constants";

const POINTS = [
  "Bride and groom arrival",
  "Just Married exit photos",
  "Couple portraits",
  "Venue arrival",
  "Short scenic drive",
  "Photo-ready classic styling",
];

export default function WeddingFeature() {
  return (
    <section
      id="weddings"
      className="relative py-28 md:py-40 px-5 lg:px-10 bg-gradient-to-b from-ink via-burgundy/40 to-ink overflow-hidden"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-7 relative aspect-[4/5] md:aspect-[5/6] rounded-lg overflow-hidden vignette shadow-soft"
        >
          <Image
            src="/images/wedding-couple.jpg"
            alt="Bride and groom in front of the red Mercedes 560 SL on their wedding day"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute top-5 left-5 luxury-badge">
            <span className="block w-1.5 h-1.5 rounded-full bg-red-glow" />
            Wedding day
          </div>
        </motion.div>

        {/* Content */}
        <div className="lg:col-span-5">
          <span className="eyebrow">— Weddings</span>
          <h2 className="headline mt-5 text-[36px] md:text-5xl lg:text-[58px]">
            Make your entrance <em>unforgettable.</em>
          </h2>
          <p className="mt-6 text-cream/80 text-base md:text-[17px] leading-relaxed max-w-md">
            From the first arrival to the last photograph, Lady in Red gives
            your wedding day a cinematic signature.
          </p>

          <ul className="mt-9 space-y-3">
            {POINTS.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-cream/85 text-[15px]"
              >
                <span
                  aria-hidden
                  className="mt-[10px] block w-3 h-px bg-gold flex-shrink-0"
                />
                {p}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-[12px] tracking-widest2 uppercase text-cream/55">
            Details can be confirmed by Instagram DM.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red"
            >
              Check your wedding date on Instagram
            </a>
          </div>

          <p className="mt-10 font-serif italic text-cream/60 text-lg max-w-md">
            “A timeless entrance to a timeless day.”
          </p>
        </div>
      </div>
    </section>
  );
}
