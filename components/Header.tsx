"use client";

import { useEffect, useState } from "react";
import { INSTAGRAM_URL } from "@/lib/constants";

const NAV = [
  { href: "#car", label: "The Car" },
  { href: "#weddings", label: "Weddings" },
  { href: "#shoots", label: "Shoots" },
  { href: "#gallery", label: "Gallery" },
  { href: "#experience", label: "Experience" },
  { href: "#faq", label: "FAQ" },
  { href: "#book", label: "Book" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-ink/70 border-b border-gold/15 py-3"
          : "bg-transparent py-5",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10 flex items-center justify-between gap-6">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-baseline gap-3 group whitespace-nowrap shrink-0"
          aria-label="Lady in Red — home"
        >
          <span className="font-serif text-2xl md:text-[26px] tracking-tight text-cream group-hover:text-gold-light transition-colors whitespace-nowrap">
            Lady<span className="italic text-red-glow"> in </span>Red
          </span>
          <span className="hidden md:inline text-[10px] tracking-widest2 uppercase text-gold/80 whitespace-nowrap">
            Classic Car Rental
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-widest2 uppercase text-cream/75 hover:text-gold-light transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-red !py-3 !px-5 !text-[10.5px]"
          >
            DM on Instagram
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-11 h-11 grid place-items-center rounded-full border border-gold/30 text-cream"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <div className="relative w-5 h-3.5">
              <span
                className={[
                  "absolute left-0 right-0 h-px bg-cream transition-all",
                  open ? "top-1/2 rotate-45" : "top-0",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 right-0 h-px bg-cream top-1/2 transition-opacity",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 right-0 h-px bg-cream transition-all",
                  open ? "top-1/2 -rotate-45" : "bottom-0",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-500",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-5 mt-4 mb-2 rounded-2xl border border-gold/20 bg-ink/85 backdrop-blur-xl">
          <nav className="flex flex-col py-3" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-6 py-3.5 text-sm tracking-widest uppercase text-cream/85 hover:text-gold-light border-b border-white/5 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="m-4 btn-red"
            >
              DM on Instagram
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
