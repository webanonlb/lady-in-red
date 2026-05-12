"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FLEET } from "@/lib/fleet";

export default function CollectionGrid() {
  return (
    <section
      id="collection"
      className="relative py-28 md:py-40 px-5 lg:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow + headline */}
        <div className="text-center mb-16 md:mb-20">
          <span className="eyebrow text-red-glow">— The Collection</span>
          <h2 className="headline mt-5 text-[36px] md:text-5xl lg:text-[68px] uppercase tracking-tight">
            Each machine has a <em>character.</em>
          </h2>
          <p className="mt-6 text-cream/65 text-sm md:text-[15px] max-w-xl mx-auto">
            Seven distinct icons, each chosen for a feeling, a frame, and a story.
            Meet the cast.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {FLEET.map((v, i) => (
            <motion.div
              key={v.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
              className={`${i === 3 ? "col-span-2 lg:col-span-1" : ""}`}
            >
              <Link
                href={`/fleet/${v.slug}`}
                className="group relative block rounded-lg overflow-hidden border border-gold/15 bg-espresso/40 vignette"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={v.cardImage}
                    alt={v.cardAlt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading={i < 4 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <p className="font-serif text-lg md:text-xl text-cream uppercase tracking-wider">
                      {v.character}
                    </p>
                    <p className="mt-1 text-[10px] tracking-widest2 uppercase text-cream/55 line-clamp-1">
                      {v.model}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] tracking-widest2 uppercase text-red-glow group-hover:text-gold-light transition-colors">
                      View profile
                      <svg width="16" height="6" viewBox="0 0 16 6" fill="none" aria-hidden>
                        <path d="M0 3h14M11 1l3 2-3 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
