"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Send your date",
    copy: "DM your event date, location, and preferred time.",
  },
  {
    n: "02",
    title: "Tell us the scene",
    copy: "Wedding entrance, video production, editorial shoot, private event, or timeless drive.",
  },
  {
    n: "03",
    title: "Confirm the details",
    copy: "We coordinate the timing, setting, and booking details through Instagram.",
  },
  {
    n: "04",
    title: "Arrive in style",
    copy: "Lady in Red arrives polished, prepared, and photo-ready.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 md:py-40 px-5 lg:px-10 bg-gradient-to-b from-ink via-espresso/40 to-ink"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow">— Experience</span>
          <h2 className="headline mt-5 text-[36px] md:text-5xl lg:text-[60px]">
            A simple, considered process. <em>One conversation away.</em>
          </h2>
          <p className="mt-6 text-cream/70 text-base md:text-[17px] leading-relaxed">
            Booking is handled entirely through Instagram, so the experience
            stays personal from the very first message.
          </p>
        </div>

        <div className="gold-line mb-14" />

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/15 rounded-xl overflow-hidden border border-gold/15">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative bg-espresso/70 backdrop-blur-sm p-8 md:p-10 min-h-[220px]"
            >
              <p className="font-serif text-5xl md:text-6xl text-red-glow/80 leading-none">
                {s.n}
              </p>
              <h3 className="mt-6 font-serif text-2xl text-cream">{s.title}</h3>
              <p className="mt-3 text-cream/70 text-[15px] leading-relaxed">
                {s.copy}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
