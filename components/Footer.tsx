"use client";

import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/constants";

const LINKS = [
  { href: "#car", label: "The Car" },
  { href: "#weddings", label: "Weddings" },
  { href: "#shoots", label: "Shoots" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#book", label: "Book" },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-32 md:pb-20 px-5 lg:px-10 border-t border-gold/15 bg-ink">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="script-mark text-3xl">Lady in Red</p>
            <p className="mt-1 text-[11px] tracking-widest2 uppercase text-gold/85">
              Classic Car Rental
            </p>
            <p className="mt-6 text-cream/70 leading-relaxed text-[15px] max-w-sm">
              A vintage Mercedes-Benz 560 SL based in Beirut, Lebanon —
              available for weddings, productions, editorials, and timeless
              moments.
            </p>
            <p className="mt-6 text-cream/85 text-sm">
              Beirut, Lebanon · Instagram:{" "}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-light hover:text-red-glow transition-colors"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <p className="text-[10px] tracking-widest2 uppercase text-gold/85 mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream/75 hover:text-gold-light transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking */}
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-widest2 uppercase text-gold/85 mb-5">
              Booking
            </p>
            <p className="text-cream/80 leading-relaxed text-[15px] max-w-xs">
              DM us on Instagram to check availability.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red mt-6"
            >
              Message {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="gold-line mt-16 mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] tracking-widest2 uppercase text-cream/45">
          <p>© {new Date().getFullYear()} Lady in Red — Classic Car Rental</p>
          <p>Beirut · Lebanon</p>
        </div>
      </div>
    </footer>
  );
}
