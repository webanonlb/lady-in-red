"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { INSTAGRAM_URL, BRAND } from "@/lib/constants";
import Monogram from "./Monogram";

const LEFT_NAV = [
  { href: "/#collection", label: "Collection" },
  { href: "/#experiences", label: "Experiences" },
  { href: "/#about", label: "About" },
];
const RIGHT_NAV = [
  { href: "/#events", label: "Events" },
  { href: "/#gallery", label: "Gallery" },
  { href: INSTAGRAM_URL, label: "Contact", external: true },
];
const MOBILE_NAV = [
  ...LEFT_NAV,
  ...RIGHT_NAV,
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
          ? "backdrop-blur-xl bg-ink/75 border-b border-gold/15 py-3"
          : "bg-gradient-to-b from-ink/55 to-transparent py-4",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10 grid grid-cols-[1fr_auto_1fr] items-center gap-6">
        {/* Left nav (desktop) — mobile: hide so center logo sits flush */}
        <nav className="hidden lg:flex items-center gap-7 justify-self-start" aria-label="Primary left">
          {LEFT_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-widest2 uppercase text-cream/80 hover:text-gold-light transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: empty cell so center stays centered */}
        <div className="lg:hidden" aria-hidden />

        {/* Center logo */}
        <Link
          href="/"
          aria-label="Classic Circle — home"
          className="flex flex-col items-center justify-center group justify-self-center"
        >
          <Monogram size={36} color="#E0C689" className="group-hover:opacity-90 transition-opacity drop-shadow-[0_0_12px_rgba(216,182,124,0.35)]" />
          <span className="mt-1.5 font-serif text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-cream group-hover:text-gold-light transition-colors leading-none">
            {BRAND.name}
          </span>
          <span className="hidden md:block text-[8px] tracking-widest2 uppercase text-gold/75 mt-1 leading-none">
            {BRAND.descriptor}
          </span>
        </Link>

        {/* Right nav (desktop) */}
        <nav className="hidden lg:flex items-center gap-6 justify-self-end" aria-label="Primary right">
          {RIGHT_NAV.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-widest2 uppercase text-cream/80 hover:text-gold-light transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-widest2 uppercase border border-gold/60 px-4 py-2 rounded-full text-cream hover:bg-gold/10 hover:border-gold transition-colors whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu trigger (also handles tablet) */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-11 h-11 grid place-items-center rounded-full border border-gold/30 text-cream justify-self-end"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="relative w-5 h-3.5">
            <span className={["absolute left-0 right-0 h-px bg-cream transition-all", open ? "top-1/2 rotate-45" : "top-0"].join(" ")} />
            <span className={["absolute left-0 right-0 h-px bg-cream top-1/2 transition-opacity", open ? "opacity-0" : "opacity-100"].join(" ")} />
            <span className={["absolute left-0 right-0 h-px bg-cream transition-all", open ? "top-1/2 -rotate-45" : "bottom-0"].join(" ")} />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-500",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-5 mt-4 mb-2 rounded-2xl border border-gold/20 bg-ink/90 backdrop-blur-xl">
          <nav className="flex flex-col py-3" aria-label="Mobile">
            {MOBILE_NAV.map((item) =>
              "external" in item && item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="px-6 py-3.5 text-sm tracking-widest uppercase text-cream/85 hover:text-gold-light border-b border-white/5 last:border-0"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-6 py-3.5 text-sm tracking-widest uppercase text-cream/85 hover:text-gold-light border-b border-white/5 last:border-0"
                >
                  {item.label}
                </Link>
              )
            )}
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
