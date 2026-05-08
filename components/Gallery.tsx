"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

type Frame = {
  src: string;
  alt: string;
  category: string;
  caption: string;
  span?: string; // tailwind grid span classes
  ratio?: string; // aspect-ratio class
};

const FRAMES: Frame[] = [
  {
    src: "/images/hero-sunset.jpg",
    alt: "The 560 SL at golden hour on the Beirut waterfront",
    category: "Beirut",
    caption: "Golden hour in Beirut",
    span: "md:col-span-7 md:row-span-2",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/images/wedding-couple.jpg",
    alt: "Bride and groom with the red Mercedes 560 SL",
    category: "Weddings",
    caption: "The wedding exit",
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/images/night-beirut.jpg",
    alt: "The 560 SL at night on the Beirut corniche",
    category: "Night",
    caption: "After hours",
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/images/snow-mountain.jpg",
    alt: "The 560 SL in the Lebanese mountains under snow",
    category: "Mountains",
    caption: "Winter has its icons too",
    span: "md:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/images/just-married.jpg",
    alt: "Lady in Red — Just Married wedding exit moment",
    category: "Editorial",
    caption: "Your moment starts here",
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/images/hero-sunset.jpg",
    alt: "The 560 SL silhouette against the Mediterranean sun",
    category: "Details",
    caption: "Summer, somewhere in the 80s",
    span: "md:col-span-7",
    ratio: "aspect-[16/10]",
  },
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((i) => (i === null ? null : (i + 1) % FRAMES.length)),
    []
  );
  const prev = useCallback(
    () => setOpen((i) => (i === null ? null : (i - 1 + FRAMES.length) % FRAMES.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  return (
    <section
      id="gallery"
      className="relative py-28 md:py-40 px-5 lg:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="eyebrow">— Gallery</span>
            <h2 className="headline mt-5 text-[36px] md:text-5xl lg:text-[60px] max-w-3xl">
              A few frames. <em>A lot of feeling.</em>
            </h2>
          </div>
          <p className="text-cream/65 text-sm max-w-sm">
            Beirut, Lebanon — weddings, night drives, golden hours, and
            mountains. A curated portfolio of the scenes she’s lived in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[minmax(0,_1fr)]">
          {FRAMES.map((f, i) => (
            <motion.button
              key={i}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: (i % 4) * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              className={`gallery-card ${f.span ?? ""} ${f.ratio ?? "aspect-[4/5]"} text-left`}
              aria-label={`Open ${f.caption}`}
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
              <span className="absolute top-3 left-3 text-[10px] tracking-widest2 uppercase text-gold/85 bg-ink/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-gold/25">
                {f.category}
              </span>
              <div className="caption">
                <p className="font-serif text-xl md:text-2xl text-cream">
                  {f.caption}
                </p>
                <p className="mt-1 text-[10px] tracking-widest2 uppercase text-gold/80">
                  Tap to enlarge
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close image"
            className="absolute top-5 right-5 w-12 h-12 grid place-items-center rounded-full border border-gold/40 text-cream hover:text-red-glow"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 grid place-items-center rounded-full border border-gold/30 text-cream hover:text-gold-light"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M9 1L3 7l6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 grid place-items-center rounded-full border border-gold/30 text-cream hover:text-gold-light"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M5 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-5xl aspect-[4/5] md:aspect-[16/10]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={FRAMES[open].src}
              alt={FRAMES[open].alt}
              fill
              sizes="100vw"
              priority
              className="object-contain"
            />
            <div className="absolute -bottom-12 left-0 right-0 text-center">
              <p className="font-serif text-xl md:text-2xl text-cream">
                {FRAMES[open].caption}
              </p>
              <p className="mt-1 text-[10px] tracking-widest2 uppercase text-gold/75">
                {FRAMES[open].category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
