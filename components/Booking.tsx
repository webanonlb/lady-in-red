"use client";

import { motion } from "framer-motion";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/constants";

const CHECKLIST = [
  "Your name",
  "Event date",
  "Event type — wedding, video, photoshoot, private event, timeless drive, or other",
  "Location or venue",
  "Preferred time",
  "Approximate duration",
  "A short description of the moment you want to create",
];

export default function Booking() {
  return (
    <section
      id="book"
      className="relative py-28 md:py-40 px-5 lg:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="eyebrow">— Booking by DM</span>
            <h2 className="headline mt-5 text-[36px] md:text-5xl lg:text-[58px]">
              Check your date <em>by DM.</em>
            </h2>
            <p className="mt-6 text-cream/80 text-base md:text-[17px] leading-relaxed max-w-md">
              Send us a few details on Instagram and we’ll help shape the scene.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red"
              >
                Message {INSTAGRAM_HANDLE}
              </a>
            </div>

            <p className="mt-6 text-[12px] tracking-widest2 uppercase text-cream/55">
              Bookings and availability are handled through Instagram DM.
            </p>
          </div>

          {/* Concierge checklist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-7 relative rounded-2xl border border-gold/25 bg-gradient-to-br from-espresso/80 via-ink/80 to-burgundy/40 p-7 md:p-12 backdrop-blur-sm shadow-soft"
          >
            <div className="flex items-center justify-between mb-8">
              <p className="text-[10px] tracking-widest2 uppercase text-gold-light">
                Concierge note
              </p>
              <span className="text-[10px] tracking-widest2 uppercase text-cream/45">
                {INSTAGRAM_HANDLE}
              </span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-cream">
              What to send us
            </h3>
            <p className="mt-2 text-cream/65 text-sm md:text-[15px] max-w-md">
              The more we know, the better we can help compose the moment.
            </p>

            <div className="gold-line my-8" />

            <ul className="space-y-4">
              {CHECKLIST.map((c, i) => (
                <li key={c} className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="mt-[3px] grid place-items-center w-6 h-6 rounded-full border border-gold/40 text-[10px] tracking-widest text-gold-light flex-shrink-0"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-cream/85 text-[15px] leading-relaxed">
                    {c}
                  </span>
                </li>
              ))}
            </ul>

            <div className="gold-line my-8" />

            <p className="font-serif italic text-cream/70 text-lg">
              “The perfect start to forever.”
            </p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red w-full mt-6"
            >
              Open Instagram & Send a DM
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
