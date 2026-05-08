# Lady in Red — Classic Car Rental

A cinematic one-page website for **Lady in Red**, a vintage red Mercedes‑Benz 560 SL
based in Beirut, Lebanon, available for weddings, music videos, editorial shoots,
private events, and timeless drives.

> _“She’s not just a car. She’s the scene.”_

The site is built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS +
Framer Motion**. Booking is handled exclusively via Instagram DM —
there is intentionally no phone number, email, WhatsApp, contact form, map, or
address anywhere on the site.

---

## Quick Start

```bash
cd site
npm install
npm run dev
```

Open <http://localhost:3000>.

To build a production bundle:

```bash
npm run build
npm run start
```

The site can be deployed straight to **Vercel**, **Netlify**, or any host that
runs Next.js 14.

---

## 1. Update the Instagram link

There is a single source of truth for the Instagram URL.

Open **`lib/constants.ts`** and replace the placeholder:

```ts
// lib/constants.ts
export const INSTAGRAM_URL = "INSTAGRAM_URL_PLACEHOLDER";
```

with the real profile or DM link, for example:

```ts
export const INSTAGRAM_URL = "https://instagram.com/ladyinred.sl";
```

Every CTA on the page (header, hero, service cards, wedding section, production
section, booking section, final CTA, footer, and mobile bottom bar) reads from
this constant. Updating it once updates every link on the site.

The Instagram handle string (`@ladyinred.sl`) is also exported from the same
file as `INSTAGRAM_HANDLE` if you ever need to update the handle copy.

---

## 2. Replace the photos

All site imagery lives in **`public/images/`**:

| File                     | Where it appears                          | Recommended subject                       |
| ------------------------ | ----------------------------------------- | ----------------------------------------- |
| `hero-sunset.jpg`        | Hero, "The Car" section, Gallery (×2)     | Cinematic Beirut sunset / signature shot  |
| `wedding-couple.jpg`     | Services card, Wedding feature, Gallery   | Bride & groom with the car                |
| `night-beirut.jpg`       | Services card, Production feature, Gallery | The car at night in Beirut               |
| `snow-mountain.jpg`      | Services card, Gallery                    | Snow / Faqra / mountains range            |
| `just-married.jpg`       | Final CTA, Gallery                        | "Just Married" branded scene              |

To swap a photo, drop a new file in `public/images/` using the same filename.
The Next.js `<Image>` component will automatically optimize and serve modern
formats (AVIF / WebP).

If you want to **add more images** to the gallery, edit
`components/Gallery.tsx` and add new entries to the `FRAMES` array, e.g.

```ts
{
  src: "/images/new-shot.jpg",
  alt: "Descriptive alt text",
  category: "Beirut",
  caption: "Golden hour in Beirut",
  span: "md:col-span-7",     // 12-column grid span (optional)
  ratio: "aspect-[4/5]",     // tailwind aspect-ratio class (optional)
},
```

Recommended image guidelines:

- **Format:** JPEG (or WebP) at high quality
- **Hero:** at least 2000×2500 px, portrait or 4:5
- **Gallery:** 1600×2000 px or 2000×1250 px works well
- Keep file sizes reasonable (300–700 KB each); Next.js will optimize further.
- Always provide meaningful, descriptive alt text.

---

## 3. Edit copy

All copy is hard-coded in component files, kept as plain strings so it’s easy
to scan and tweak. The most-edited files are likely:

- `components/Hero.tsx` — headline / subheadline
- `components/Services.tsx` — the four service cards
- `components/WeddingFeature.tsx` & `ProductionFeature.tsx`
- `components/FAQ.tsx` — Q & A list
- `components/Booking.tsx` — DM checklist
- `app/layout.tsx` — SEO title / description / Open Graph metadata

The brand name, descriptor, location and tagline are also exported from
`lib/constants.ts` if you’d like to reuse them in additional components.

---

## 4. Brand guidelines baked into the design

- **Palette**
  - `ink` `#0A0606` — deep black base
  - `espresso` `#1F1714`, `burgundy` `#2A0A0E` — warm dark surfaces
  - `red` `#B8252E` (with `red-glow` `#D8323D`) — the signature accent
  - `gold` `#C9A86A` (with `gold-light` `#E0C689`) — champagne hairlines & micro‑text
  - `cream` `#F4E9D8` — body text on dark
- **Typography**
  - Headings: **Playfair Display** (Google Fonts, loaded via `next/font`)
  - Body: **Inter**
  - Brand script accent: **Allura**
- **Tone**: cinematic, romantic, premium, treats the car as a character (“she”,
  “the scene”, “the icon”).
- **Texture**: a fixed SVG grain overlay (`.grain-overlay`) sits on top of every
  page for a subtle film feel; gold hairlines (`.gold-line`) separate sections;
  vignettes soften image edges.

---

## 5. What is intentionally _not_ on the site

By design the site contains **no**:

- Phone number
- WhatsApp link
- Email address
- Contact form that submits anywhere
- Call buttons
- Map / address / directions
- Business hours
- Pricing
- Fake reviews, client logos, or press mentions

The single contact path is Instagram DM. If you need to add a different channel
later, that is a deliberate brand decision — don’t add it without intent.

---

## 6. File structure

```
site/
├── app/
│   ├── layout.tsx        # fonts + SEO metadata + grain overlay
│   ├── page.tsx          # one-page composition + JSON-LD
│   └── globals.css       # design tokens, buttons, animations
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── PositioningStrip.tsx
│   ├── TheCar.tsx
│   ├── Services.tsx
│   ├── WeddingFeature.tsx
│   ├── ProductionFeature.tsx
│   ├── Gallery.tsx       # masonry + lightbox + keyboard nav
│   ├── Experience.tsx
│   ├── Booking.tsx       # concierge DM checklist
│   ├── FAQ.tsx           # accessible <details> accordion
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   └── MobileBottomBar.tsx
├── lib/
│   └── constants.ts      # ← edit INSTAGRAM_URL here
├── public/
│   └── images/           # ← drop new photos here
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## 7. Accessibility & performance notes

- All images carry descriptive `alt` text.
- The header and gallery support full keyboard navigation; the lightbox
  responds to `Esc`, `←`, and `→`.
- The grain overlay and marquee respect `prefers-reduced-motion`.
- Images are served as AVIF/WebP via `next/image` with explicit `sizes`.
- Mobile-first layout, with a sticky bottom action bar (DM · Gallery · Book) on
  small screens for one-thumb conversion.
- Type stays ≥16 px for body, contrast meets WCAG AA on cream-on-ink.

---

## 8. Deployment

The simplest path:

```bash
npm i -g vercel
vercel
```

Or push to a GitHub repo and import it on [vercel.com](https://vercel.com).
No environment variables are required.

---

_Built with care for Lady in Red — Beirut, Lebanon._
