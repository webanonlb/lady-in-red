"use client";

import { INSTAGRAM_URL } from "@/lib/constants";

export default function MobileBottomBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-ink/90 backdrop-blur-xl border-t border-gold/20"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0px)" }}
    >
      <div className="grid grid-cols-3 divide-x divide-gold/15">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 text-cream/85 active:text-red-glow"
          aria-label="DM on Instagram"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>
          <span className="text-[10px] tracking-widest2 uppercase">DM</span>
        </a>
        <a
          href="#gallery"
          className="flex flex-col items-center justify-center py-3 gap-1 text-cream/85 active:text-gold-light"
          aria-label="Open the Gallery"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
            <path d="M3 14l5-5 5 5 4-3 4 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <span className="text-[10px] tracking-widest2 uppercase">Gallery</span>
        </a>
        <a
          href="#book"
          className="flex flex-col items-center justify-center py-3 gap-1 text-cream/85 active:text-gold-light"
          aria-label="Booking section"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 4h11l3 3v13H5z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path d="M9 10h6M9 14h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span className="text-[10px] tracking-widest2 uppercase">Book</span>
        </a>
      </div>
    </div>
  );
}
