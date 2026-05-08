"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { INSTAGRAM_URL } from "@/lib/constants";

const SERVICES = [
  {
    title: "Weddings",
    copy: "For the entrance, the exit, the portraits, and the quiet moment in between.",
    cta: "DM for wedding availability",
    img: "/images/wedding-couple.jpg",
    alt: "Bride and groom posing beside the red Mercedes 560 SL — wedding portrait",
    tag: "01 — Wedding day",
  },
  {
    title: "Videos & Film",
    copy: "A rolling scene-setter for music videos, commercials, campaigns, and period-inspired visuals.",
    cta: "DM for production bookings",
    img: "/images/night-beirut.jpg",
    alt: "The 560 SL parked along the Beirut waterfront at night — production-ready frame",
    tag: "02 — On camera",
  },
  {
    title: "Photoshoots & Editorial",
    copy: "Red paint, chrome details, open-top drama, and a silhouette that carries the frame.",
    cta: "DM for shoot availability",
    img: "/images/hero-sunset.jpg",
    alt: "Editorial shot of the 560 SL at golden hour beside the Mediterranean",
    tag: "03 — Editorial",
  },
  {
    title: "Timeless Drives & Private Moments",
    copy: "For anniversaries, proposals, lifestyle content, and slow golden-hour drives.",
    cta: "DM to create the moment",
    img: "/images/snow-mountain.jpg",
    alt: "The 560 SL in the Lebanese mountains in winter — lifestyle moment",
    tag: "04 — Private",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40 px-5 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="eyebrow">— What she’s for</span>
          <h2 className="headline mt-5 text-[36px] md:text-5xl lg:text-[60px]">
            Some moments deserve more than a ride — <em>they deserve an icon.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative rounded-xl overflow-hidden border border-gold/15 bg-espresso/40"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] md:aspect-[5/4] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
                <span className="absolute top-5 left-5 text-[10px] tracking-widest2 uppercase text-gold/85">
                  {s.tag}
                </span>
              </div>

              {/* Body */}
              <div className="relative p-7 md:p-9 -mt-24 md:-mt-32">
                <h3 className="font-serif text-3xl md:text-4xl text-cream">{s.title}</h3>
                <p className="mt-4 text-cream/75 text-[15px] leading-relaxed max-w-md">
                  {s.copy}
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-widest2 uppercase text-gold-light hover:text-red-glow transition-colors"
                >
                  {s.cta}
                  <svg width="18" height="8" viewBox="0 0 18 8" fill="none" aria-hidden>
                    <path
                      d="M1 4h15M12 1l4 3-4 3"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
