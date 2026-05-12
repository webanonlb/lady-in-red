"use client";

import Link from "next/link";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, BRAND } from "@/lib/constants";
import { FLEET } from "@/lib/fleet";
import Monogram from "./Monogram";

const SITE_LINKS = [
  { href: "/#collection", label: "Collection" },
  { href: "/#experiences", label: "Experiences" },
  { href: "/#about", label: "About" },
  { href: "/#events", label: "Events" },
  { href: "/#gallery", label: "Gallery" },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-32 md:pb-20 px-5 lg:px-10 border-t border-gold/15 bg-ink">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Monogram size={46} color="#E0C689" />
              <div>
                <p className="font-serif text-xl tracking-[0.18em] uppercase text-cream">
                  {BRAND.name}
                </p>
                <p className="text-[9.5px] tracking-widest2 uppercase text-gold/80 mt-0.5">
                  {BRAND.descriptor}
                </p>
              </div>
            </div>
            <p className="mt-6 text-cream/70 leading-relaxed text-[15px] max-w-sm">
              {BRAND.short}
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

          {/* Site links */}
          <div className="md:col-span-3">
            <p className="text-[10px] tracking-widest2 uppercase text-gold/85 mb-5">Explore</p>
            <ul className="space-y-3">
              {SITE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream/75 hover:text-gold-light transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* The fleet */}
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-widest2 uppercase text-gold/85 mb-5">The Fleet</p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {FLEET.map((v) => (
                <li key={v.slug}>
                  <Link
                    href={`/fleet/${v.slug}`}
                    className="text-cream/75 hover:text-gold-light transition-colors text-sm whitespace-nowrap"
                  >
                    {v.character}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red mt-7"
            >
              Message {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="gold-line mt-16 mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] tracking-widest2 uppercase text-cream/45">
          <p>© {new Date().getFullYear()} {BRAND.name} — {BRAND.descriptor}</p>
          <p>Beirut · Lebanon · By Instagram DM</p>
        </div>
      </div>
    </footer>
  );
}
