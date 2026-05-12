"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { INSTAGRAM_URL } from "@/lib/constants";

export default function Lifestyle() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-40 px-5 lg:px-10 overflow-hidden bg-gradient-to-b from-ink via-burgundy/30 to-ink"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Copy */}
        <div className="lg:col-span-5">
          <span className="eyebrow text-red-glow">— About Classic Circle</span>
          <h2 className="headline mt-5 text-[36px] md:text-5xl lg:text-[60px] uppercase tracking-tight">
            More than a rental. <em>It’s a lifestyle.</em>
          </h2>
          <p className="mt-6 text-cream/80 text-base md:text-[17px] leading-relaxed max-w-md">
            Classic Circle is a curated collection of iconic machines for
            extraordinary occasions. We don’t just rent vehicles — we create
            moments that stay with you.
          </p>
          <ul className="mt-8 space-y-3 text-cream/85 text-[15px]">
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-[10px] block w-3 h-px bg-gold flex-shrink-0" />
              Hand-picked icons across cars and motorcycles.
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-[10px] block w-3 h-px bg-gold flex-shrink-0" />
              Each machine cast for its own kind of story.
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-[10px] block w-3 h-px bg-gold flex-shrink-0" />
              Beirut-based — bookings across Lebanon by DM.
            </li>
          </ul>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red mt-10"
          >
            Discover more
          </a>
        </div>

        {/* Image — Il Signore Vespa lifestyle */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-7 relative aspect-[4/5] md:aspect-[5/4] rounded-lg overflow-hidden vignette shadow-soft"
        >
          <Image
            src="/fleet/il-signore-rome.png"
            alt="Il Signore — a man in a blazer riding a Vespa past a Roman trattoria"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute top-5 left-5 luxury-badge">
            <span className="block w-1.5 h-1.5 rounded-full bg-red-glow" />
            Dolce vita
          </div>
        </motion.div>
      </div>
    </section>
  );
}
