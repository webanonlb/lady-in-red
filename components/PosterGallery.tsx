"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FLEET } from "@/lib/fleet";

/**
 * Meet-the-cast poster wall.
 * Each branded "BEIRUT CLASSIC CIRCLE presents…" poster sits like a
 * film poster in a theatre lobby — gold-edged, vignetted, and clickable
 * through to its character page.
 *
 * Only renders characters that have `characterPoster` set, so adding /
 * removing posters is data-driven via lib/fleet.ts.
 */
export default function PosterGallery() {
  const posters = FLEET.filter((v) => v.characterPoster);

  if (posters.length === 0) return null;

  return (
    <section
      id="posters"
      aria-labelledby="posters-heading"
      className="relative py-24 md:py-32 px-5 md:px-8 lg:px-12 bg-gradient-to-b from-ink via-burgundy/15 to-ink overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="eyebrow">— Meet the cast</span>
            <h2
              id="posters-heading"
              className="headline mt-5 text-[34px] md:text-5xl lg:text-[58px] max-w-3xl"
            >
              Seven characters. <em>One stage.</em>
            </h2>
          </div>
          <p className="text-cream/65 text-sm md:text-[15px] max-w-sm md:text-right">
            Editorial posters of every machine in the collection — printed in
            spirit, born in Beirut.
          </p>
        </div>

        {/* Poster wall */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {posters.map((v, i) => (
            <motion.div
              key={v.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.9,
                delay: (i % 4) * 0.06,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className={`${
                posters.length === 7 && i === 6
                  ? "col-span-2 md:col-span-1"
                  : ""
              }`}
            >
              <Link
                href={`/fleet/${v.slug}`}
                className="group block relative aspect-[2/3] overflow-hidden rounded-md border border-gold/15 bg-ink"
                aria-label={`Open ${v.character} story`}
              >
                <Image
                  src={v.characterPoster!}
                  alt={v.characterPosterAlt ?? v.character}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={i < 4 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle vignette to deepen edges */}
                <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_60px_rgba(0,0,0,0.7)]" />

                {/* Hover veil + arrow */}
                <div className="absolute inset-x-0 bottom-0 px-3 py-3 md:px-4 md:py-4 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent flex items-center justify-between text-[10px] tracking-widest2 uppercase text-cream opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>Open story</span>
                  <svg
                    width="22"
                    height="8"
                    viewBox="0 0 22 8"
                    fill="none"
                    aria-hidden
                    className="text-gold-light"
                  >
                    <path
                      d="M0 4h20M16 1l4 3-4 3"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer line */}
        <div className="gold-line mt-14 md:mt-20" />
        <p className="mt-6 text-center text-[11px] tracking-widest2 uppercase text-cream/55">
          Tap a poster to enter the story · {posters.length} characters · One
          curated fleet
        </p>
      </div>
    </section>
  );
}
