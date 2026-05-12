"use client";

import Link from "next/link";

const VALUES = [
  {
    label: "Weddings",
    href: "/fleet/lady-in-red#weddings",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M16 28c5-4 9-7.5 9-12.5C25 11 21.5 8 18 9c-1 .3-1.7 1-2 1.5-.3-.5-1-1.2-2-1.5C10.5 8 7 11 7 15.5 7 20.5 11 24 16 28z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Films & Shoots",
    href: "/fleet/valentino",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect x="4" y="9" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M22 14l6-3v10l-6-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Events",
    href: "#collection",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect x="5" y="8" width="22" height="19" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 13h22M11 5v6M21 5v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Experiences",
    href: "#about",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 5c4 4 4 18 0 22M16 5c-4 4-4 18 0 22M5 16h22" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    label: "Iconic Fleet",
    href: "#collection",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M4 20l3-7a3 3 0 012.7-1.8h12.6A3 3 0 0125 13l3 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="3" y="20" width="26" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="9" cy="26" r="2" fill="currentColor" />
        <circle cx="23" cy="26" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ValueIcons() {
  return (
    <section
      id="experiences"
      className="relative py-16 md:py-20 px-5 lg:px-10 border-y border-gold/15 bg-ink"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 md:gap-6 text-center">
          {VALUES.map((v) => (
            <Link
              key={v.label}
              href={v.href}
              className="group flex flex-col items-center gap-3 text-cream/75 hover:text-red-glow transition-colors"
            >
              <span className="block w-9 h-9 text-red-glow group-hover:text-gold-light transition-colors">
                {v.icon}
              </span>
              <span className="text-[10.5px] tracking-widest2 uppercase">
                {v.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
