"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const USE_CASES = [
  {
    title: "Weddings",
    copy: "Arrivals, exits, and quiet portraits — framed by an icon.",
    href: "/fleet/lady-in-red",
    img: "/images/wedding-couple.jpg",
    alt: "A wedding couple beside the Lady in Red Mercedes 560 SL",
    tag: "01 — Forever",
  },
  {
    title: "Films & Music Videos",
    copy: "Production-ready scene-setters with cinematic presence.",
    href: "/fleet/valentino",
    img: "/fleet/valentino-hero.png",
    alt: "Valentino — red Porsche 997 on a forest road",
    tag: "02 — On camera",
  },
  {
    title: "Editorial & Fashion",
    copy: "From red paint to chrome details — silhouettes built to carry a frame.",
    href: "/fleet/il-giallo",
    img: "/fleet/il-giallo-color.png",
    alt: "Il Giallo — yellow Ducati 749 in editorial light",
    tag: "03 — Editorial",
  },
  {
    title: "Private & Lifestyle",
    copy: "Anniversaries, proposals, slow golden-hour drives.",
    href: "/fleet/il-signore",
    img: "/fleet/il-signore-rome.png",
    alt: "Il Signore — a man on a Vespa outside a Roman trattoria",
    tag: "04 — Personal",
  },
];

export default function UseCasesStrip() {
  return (
    <section
      id="events"
      className="relative py-28 md:py-40 px-5 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-14 md:mb-16">
          <span className="eyebrow text-red-glow">— Use Classic Circle for</span>
          <h2 className="headline mt-5 text-[36px] md:text-5xl lg:text-[60px] uppercase tracking-tight">
            Some moments deserve more than a ride — <em>they deserve an icon.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {USE_CASES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative rounded-xl overflow-hidden border border-gold/15 bg-espresso/40"
            >
              <Link href={s.href}>
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
                <div className="relative p-7 md:p-9 -mt-24 md:-mt-32">
                  <h3 className="font-serif text-3xl md:text-4xl text-cream">{s.title}</h3>
                  <p className="mt-4 text-cream/75 text-[15px] leading-relaxed max-w-md">
                    {s.copy}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-widest2 uppercase text-gold-light group-hover:text-red-glow transition-colors">
                    Explore
                    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" aria-hidden>
                      <path d="M1 4h15M12 1l4 3-4 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
