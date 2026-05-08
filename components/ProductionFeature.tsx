"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { INSTAGRAM_URL } from "@/lib/constants";

const POINTS = [
  "Music videos",
  "Commercials",
  "Fashion editorials",
  "Social campaigns",
  "Brand shoots",
  "Film scenes",
];

export default function ProductionFeature() {
  return (
    <section
      id="shoots"
      className="relative py-28 md:py-40 px-5 lg:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Content (left on desktop) */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <span className="eyebrow">— Production & Shoots</span>
          <h2 className="headline mt-5 text-[36px] md:text-5xl lg:text-[58px]">
            Built for <em>the camera.</em>
          </h2>
          <p className="mt-6 text-cream/80 text-base md:text-[17px] leading-relaxed max-w-md">
            Whether parked against Beirut’s seafront, moving through night
            streets, or styled in a retro editorial scene, the 560 SL brings
            instant atmosphere.
          </p>

          <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3">
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

          <div className="mt-9">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red"
            >
              DM for shoot availability
            </a>
          </div>

          <p className="mt-10 font-serif italic text-cream/60 text-lg max-w-md">
            “After hours. Where the real stories begin.”
          </p>
        </div>

        {/* Image (right on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-7 order-1 lg:order-2 relative aspect-[4/5] md:aspect-[5/6] rounded-lg overflow-hidden vignette shadow-soft"
        >
          <Image
            src="/images/night-beirut.jpg"
            alt="The Mercedes 560 SL on the Beirut waterfront at night with city lights — production scene"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute top-5 left-5 luxury-badge">
            <span className="block w-1.5 h-1.5 rounded-full bg-red-glow" />
            Beirut · After hours
          </div>
        </motion.div>
      </div>
    </section>
  );
}
