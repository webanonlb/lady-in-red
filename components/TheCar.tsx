"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SPECS = [
  { label: "Model", value: "Mercedes-Benz 560 SL" },
  { label: "Era", value: "1980s classic" },
  { label: "Style", value: "Convertible roadster" },
  { label: "Color", value: "Signature red" },
  { label: "Best for", value: "Weddings · Film · Editorial · Events" },
  { label: "Location", value: "Beirut, Lebanon" },
];

export default function TheCar() {
  return (
    <section
      id="car"
      className="relative py-28 md:py-40 px-5 lg:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow">— The 560 SL</span>
            <h2 className="headline mt-5 text-[36px] md:text-5xl lg:text-[64px]">
              The red 560 SL that turns every <em>arrival</em> into a frame.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-3">
            <p className="text-cream/75 text-base leading-relaxed max-w-md">
              An icon of 1980s German craft, dressed in deep cinematic red.
              Long hood, low silhouette, chrome that catches the light, a
              cabin trimmed in cream, and a top that drops for the moment
              the camera waits for. She doesn’t carry a guest list — she
              carries a frame.
            </p>
          </div>
        </div>

        <div className="gold-line mb-16" />

        {/* Image + spec grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-7 relative aspect-[4/5] md:aspect-[5/6] rounded-lg overflow-hidden vignette"
          >
            <Image
              src="/images/hero-sunset.jpg"
              alt="The Lady in Red Mercedes 560 SL in profile against a Beirut sunset"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute top-4 left-4 luxury-badge">
              <span className="block w-1.5 h-1.5 rounded-full bg-red-glow" />
              Signature red
            </div>
          </motion.div>

          {/* Specs */}
          <ul className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/15 rounded-lg overflow-hidden border border-gold/15">
            {SPECS.map((s, i) => (
              <li
                key={s.label}
                className="bg-espresso/70 backdrop-blur-sm p-6 md:p-7"
              >
                <p className="text-[10px] tracking-widest2 uppercase text-gold/80">
                  {s.label}
                </p>
                <p
                  className={`mt-2 font-serif ${
                    s.value.length > 26 ? "text-base md:text-lg" : "text-xl md:text-2xl"
                  } text-cream leading-snug`}
                >
                  {s.value}
                </p>
                {i === SPECS.length - 1 && (
                  <span className="block mt-3 text-[10px] tracking-widest2 uppercase text-red-glow/90">
                    Available by Instagram DM
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
