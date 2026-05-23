"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { INSTAGRAM_URL, BOOKING_MAILTO, BRAND } from "@/lib/constants";
import { FLEET } from "@/lib/fleet";
import Monogram from "./Monogram";

/* ------------------------------------------------------------------
   NAV CONFIG
   Items with `children` render as dropdowns on desktop and as
   expandable sections inside the mobile drawer.
   "See all" links back to the section anchor on the homepage.
------------------------------------------------------------------- */

type NavItem = {
  href: string;
  label: string;
  external?: boolean;
  children?: { href: string; label: string }[];
};

const fleetChildren = FLEET.map((v) => ({
  href: `/fleet/${v.slug}`,
  label: v.character,
}));

const LEFT_NAV: NavItem[] = [
  { href: "/#collection", label: "Collection", children: fleetChildren },
  { href: "/#experiences", label: "Experiences" },
  { href: "/#about", label: "About" },
];

const RIGHT_NAV: NavItem[] = [
  { href: "/#events", label: "Events" },
  { href: "/#gallery", label: "Gallery", children: fleetChildren },
  { href: BOOKING_MAILTO, label: "Contact", external: true },
];

const MOBILE_NAV: NavItem[] = [...LEFT_NAV, ...RIGHT_NAV];

/* ------------------------------------------------------------------ */

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
        {/* Left nav (desktop) */}
        <nav
          className="hidden lg:flex items-center gap-7 justify-self-start"
          aria-label="Primary left"
        >
          {LEFT_NAV.map((item) => (
            <DesktopNavItem key={item.label} item={item} align="left" />
          ))}
        </nav>

        {/* Mobile: empty cell so center stays centered */}
        <div className="lg:hidden" aria-hidden />

        {/* Center logo */}
        <Link
          href="/"
          aria-label={`${BRAND.name} — home`}
          className="flex flex-col items-center justify-center group justify-self-center"
        >
          <Monogram
            size={36}
            className="group-hover:opacity-90 transition-opacity drop-shadow-[0_0_12px_rgba(216,182,124,0.35)]"
          />
          <span className="mt-1.5 font-serif text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-cream group-hover:text-gold-light transition-colors leading-none">
            {BRAND.name}
          </span>
          <span className="hidden md:block text-[8px] tracking-widest2 uppercase text-gold/75 mt-1 leading-none">
            {BRAND.descriptor}
          </span>
        </Link>

        {/* Right nav (desktop) */}
        <nav
          className="hidden lg:flex items-center gap-6 justify-self-end"
          aria-label="Primary right"
        >
          {RIGHT_NAV.slice(0, 2).map((item) => (
            <DesktopNavItem key={item.label} item={item} align="right" />
          ))}
          <a
            href={BOOKING_MAILTO}
            className="text-[11px] tracking-widest2 uppercase border border-gold/60 px-4 py-2 rounded-full text-cream hover:bg-gold/10 hover:border-gold transition-colors whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-11 h-11 grid place-items-center rounded-full border border-gold/30 text-cream justify-self-end"
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

      {/* Mobile drawer */}
      <div
        className={[
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-500",
          open ? "max-h-[85vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-5 mt-4 mb-2 rounded-2xl border border-gold/20 bg-ink/95 backdrop-blur-xl">
          <nav className="flex flex-col py-3" aria-label="Mobile">
            {MOBILE_NAV.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onNavigate={() => setOpen(false)}
              />
            ))}
            <a href={BOOKING_MAILTO} className="m-4 btn-red">
              Email Concierge
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

/* ==================================================================
   DESKTOP NAV ITEM
   - No children → plain link
   - With children → hover/click dropdown panel
   ================================================================== */

function DesktopNavItem({
  item,
  align,
}: {
  item: NavItem;
  align: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const hoverRef = useRef<NodeJS.Timeout | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Click-outside to close
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  if (!item.children) {
    return item.external ? (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] tracking-widest2 uppercase text-cream/80 hover:text-gold-light transition-colors whitespace-nowrap"
      >
        {item.label}
      </a>
    ) : (
      <Link
        href={item.href}
        className="text-[11px] tracking-widest2 uppercase text-cream/80 hover:text-gold-light transition-colors whitespace-nowrap"
      >
        {item.label}
      </Link>
    );
  }

  // Hover handlers with a small grace delay so users can move
  // the cursor down into the panel without it closing.
  const onEnter = () => {
    if (hoverRef.current) clearTimeout(hoverRef.current);
    setOpen(true);
  };
  const onLeave = () => {
    if (hoverRef.current) clearTimeout(hoverRef.current);
    hoverRef.current = setTimeout(() => setOpen(false), 140);
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 text-[11px] tracking-widest2 uppercase text-cream/80 hover:text-gold-light transition-colors whitespace-nowrap"
      >
        {item.label}
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          aria-hidden
          className={[
            "transition-transform duration-300",
            open ? "rotate-180" : "rotate-0",
          ].join(" ")}
        >
          <path
            d="M1 1l3.5 3.5L8 1"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
            className={[
              "absolute top-full mt-3 min-w-[220px] rounded-xl border border-gold/25 bg-ink/95 backdrop-blur-xl shadow-soft py-2",
              align === "left" ? "left-0" : "right-0",
            ].join(" ")}
          >
            {item.children.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-[12px] tracking-widest uppercase text-cream/85 hover:text-gold-light hover:bg-burgundy/30 transition-colors"
              >
                {c.label}
              </Link>
            ))}

            <div className="my-1.5 mx-4 border-t border-gold/15" />

            <Link
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-2 mx-2 px-2 py-2.5 text-[11px] tracking-widest2 uppercase text-gold-light hover:text-cream hover:bg-burgundy/30 rounded-md transition-colors"
            >
              <span>See all {item.label}</span>
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden>
                <path
                  d="M1 4h11M9 1l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ==================================================================
   MOBILE NAV ITEM
   - No children → plain row
   - With children → expandable accordion section
   ================================================================== */

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return item.external ? (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className="px-6 py-3.5 text-sm tracking-widest uppercase text-cream/85 hover:text-gold-light border-b border-white/5 last:border-0"
      >
        {item.label}
      </a>
    ) : (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="px-6 py-3.5 text-sm tracking-widest uppercase text-cream/85 hover:text-gold-light border-b border-white/5 last:border-0"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-6 py-3.5 text-sm tracking-widest uppercase text-cream/85 hover:text-gold-light"
      >
        <span>{item.label}</span>
        <svg
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
          aria-hidden
          className={[
            "transition-transform duration-300",
            open ? "rotate-180" : "rotate-0",
          ].join(" ")}
        >
          <path
            d="M1 1l4.5 4.5L10 1"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={[
          "grid transition-[grid-template-rows] duration-400 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="bg-burgundy/15 border-t border-white/5">
            {item.children.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                onClick={onNavigate}
                className="block px-9 py-3 text-[12px] tracking-widest uppercase text-cream/75 hover:text-gold-light"
              >
                {c.label}
              </Link>
            ))}

            <Link
              href={item.href}
              onClick={onNavigate}
              className="flex items-center justify-between gap-2 px-9 py-3 text-[12px] tracking-widest2 uppercase text-gold-light hover:text-cream border-t border-white/5"
            >
              <span>See all {item.label}</span>
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden>
                <path
                  d="M1 4h11M9 1l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
