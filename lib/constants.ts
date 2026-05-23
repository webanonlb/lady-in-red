// =====================================================================
//  Beirut Classic Circle — Brand Constants
// ---------------------------------------------------------------------
//  Single source of truth for booking endpoints and brand strings.
//
//  Booking model:
//    - The brand booking inbox is `concierge@beirutclassiccircle.com`.
//      All vehicles route there, EXCEPT Lady in Red, which keeps her
//      own dedicated Instagram DM (@ladyinred.sl).
//    - The brand Instagram account is @beirutclassiccircle (follow /
//      social link).
//    - Lady in Red's vehicle page links to her personal Instagram.
// =====================================================================

/* -- Brand-wide concierge inbox -------------------------------------- */
export const BOOKING_EMAIL = "concierge@beirutclassiccircle.com";

export const BOOKING_MAILTO =
  `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(
    "Beirut Classic Circle — Booking inquiry"
  )}`;

/* -- Helper: per-vehicle mailto with a pre-filled subject ------------ */
export const mailtoFor = (character: string) =>
  `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(
    `Beirut Classic Circle — Booking inquiry: ${character}`
  )}`;

/* -- Brand Instagram (the social follow account) --------------------- */
export const INSTAGRAM_URL = "https://www.instagram.com/beirutclassiccircle/";
export const INSTAGRAM_HANDLE = "@beirutclassiccircle";

/* -- Lady in Red — her own brand keeps her own DM line --------------- */
export const LADY_IN_RED_INSTAGRAM_URL =
  "https://www.instagram.com/ladyinred.sl/";
export const LADY_IN_RED_INSTAGRAM_HANDLE = "@ladyinred.sl";

/* -- Brand strings --------------------------------------------------- */
export const BRAND = {
  name: "Beirut Classic Circle",
  descriptor: "Classic & Iconic Car Experiences",
  monogram: "CC",
  location: "Beirut, Lebanon",
  tagline: "Drive icons. Live stories.",
  hero: "Timeless machines for unforgettable moments.",
  mission: "More than a rental. It’s a lifestyle.",
  short:
    "A curated collection of iconic machines for extraordinary occasions. We don’t just rent vehicles — we create moments that stay with you.",
  /* Fine-print availability + handling note (footer + booking pages) */
  availability:
    "Available for weddings, productions, editorials, and curated events. Chauffeur/handling terms apply.",
} as const;
