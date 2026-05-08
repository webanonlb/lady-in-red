"use client";

const STATEMENTS = [
  "Cinematic presence",
  "Wedding-ready",
  "Production-friendly",
  "Beirut-based",
  "Lebanon shoots",
  "Iconic 1980s roadster",
  "Editorial favourite",
  "Open-top drama",
];

export default function PositioningStrip() {
  // Duplicate for seamless marquee
  const items = [...STATEMENTS, ...STATEMENTS];
  return (
    <section
      aria-label="Brand positioning"
      className="relative py-10 border-y border-gold/15 bg-gradient-to-b from-burgundy/30 via-ink to-ink overflow-hidden"
    >
      <div className="marquee-track gap-12 whitespace-nowrap">
        {items.map((s, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-12 text-[11px] tracking-widest2 uppercase text-cream/65"
          >
            <span>{s}</span>
            <span aria-hidden className="text-gold/50 text-lg leading-none">
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
