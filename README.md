# Classic Circle — Classic Car Rental

A cinematic, editorial site for **Classic Circle**, a Beirut-based curated
fleet of classic cars and motorcycles. Lady in Red, Valentino, The Machine,
The Gentleman, The Predator, Il Giallo, and Il Signore — each a character,
each cast for its own kind of story.

> _Drive icons. Live stories._
>
> _Timeless machines for unforgettable moments._

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.
Booking is exclusively via Instagram DM at **@ladyinred.sl** — there is
intentionally no phone number, email, WhatsApp, contact form, map, or
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

The site can be deployed straight to **Vercel** or **Netlify**. A
`netlify.toml` is included.

---

## Routes

| Path                       | Page                                           |
| -------------------------- | ---------------------------------------------- |
| `/`                        | Home (hero + collection + use cases + lifestyle + CTA) |
| `/fleet/lady-in-red`       | Lady in Red — Mercedes-Benz 560 SL             |
| `/fleet/valentino`         | Valentino — Porsche 911 (997) Carrera S        |
| `/fleet/the-machine`       | The Machine — Mercedes-Benz W124               |
| `/fleet/the-gentleman`     | The Gentleman — Royal Enfield Classic          |
| `/fleet/the-predator`      | The Predator — Ducati Monster                  |
| `/fleet/il-giallo`         | Il Giallo — Ducati 749 (yellow)                |
| `/fleet/il-signore`        | Il Signore — Vespa GTS                         |

All vehicle pages are generated from the data in `lib/fleet.ts` and
prerendered to static HTML at build time.

---

## 1. Update the Instagram link

There is a single source of truth for the Instagram URL.

Open **`lib/constants.ts`** and edit:

```ts
export const INSTAGRAM_URL = "https://www.instagram.com/ladyinred.sl/";
```

Every CTA on the site (header, hero, vehicle pages, lifestyle section,
final CTA, footer, mobile bottom bar) reads from this constant. Updating it
once updates every link on the site.

---

## 2. Add, remove, or edit a vehicle character

All fleet data lives in **`lib/fleet.ts`**. Each entry is one character:

```ts
{
  slug: "valentino",                                    // URL slug
  character: "Valentino",                                // character name
  model: "Porsche 911 (997) Carrera S",
  era: "Modern classic",
  bodyType: "Coupé",
  color: "Guards red",
  origin: "Germany · 997",
  badge: "Porsche 997 Carrera S",
  tagline: "Arrive unforgettable.",
  headline: "A timeless silhouette built for the moment.",
  headlineEm: "the moment",
  intro: "...",
  body:  "...",
  poster: "/fleet/valentino-hero.png",
  cardImage: "/fleet/valentino-hero.png",
  gallery: [ { src, alt, caption } … ],
  bestFor: ["Weddings", "Productions", "Music videos", "Editorial"],
  quote: "“Make your entrance count.”",
  accent: "red",
}
```

To add a new character: append a new entry, drop your images in
`public/fleet/`, and rebuild — the homepage grid, the dynamic page, the
sitemap, and the footer all update automatically.

To remove one: delete its entry from the array. The static route falls
away on the next build.

---

## 3. Replace the photos

| Folder              | Used by                                |
| ------------------- | -------------------------------------- |
| `public/images/`    | Lady in Red character & global hero    |
| `public/fleet/`     | All other fleet characters             |

Drop a new file with the same filename and the site picks it up
automatically (Next.js Image will optimize to AVIF/WebP).

To add additional shots to a vehicle’s gallery, edit the `gallery` array
in that vehicle’s entry in `lib/fleet.ts`.

---

## 4. Brand guidelines baked into the design

- **Palette**
  - `ink` `#0A0606` — deep black base
  - `espresso` `#1F1714`, `burgundy` `#2A0A0E` — warm dark surfaces
  - `red` `#B8252E` / `red-glow` `#D8323D` — signature accent
  - `gold` `#C9A86A` / `gold-light` `#E0C689` — champagne hairlines
  - `cream` `#F4E9D8` — body text on dark
- **Typography**
  - Headings: **Playfair Display** (italic for emphasis, often gold)
  - Body: **Inter**
  - Character / brand script: **Allura**
- **Logo**: SVG CC monogram (`components/Monogram.tsx`) — no raster asset
  to maintain or replace.
- **Tone**: cinematic, romantic, premium. Each vehicle is a “she”, a
  “character”, an “icon”, never a unit of inventory.
- **Texture**: a fixed SVG grain overlay sits on every page; gold
  hairlines separate sections; vignettes soften image edges.

---

## 5. What is intentionally _not_ on the site

By design there is **no**:

- Phone number
- WhatsApp link
- Email address
- Contact form that submits anywhere
- Call button
- Map / address / directions
- Business hours
- Pricing
- Fake reviews, client logos, or press mentions

The single contact path is Instagram DM.

---

## 6. File structure

```
site/
├── app/
│   ├── layout.tsx        # fonts + SEO metadata + grain overlay
│   ├── page.tsx          # /  → home composition
│   ├── globals.css       # design tokens, buttons, animations
│   └── fleet/[slug]/
│       └── page.tsx      # dynamic character pages (7 static)
├── components/
│   ├── Header.tsx        # CC monogram + nav + Contact pill
│   ├── HomeHero.tsx
│   ├── CollectionGrid.tsx
│   ├── UseCasesStrip.tsx
│   ├── Lifestyle.tsx
│   ├── ValueIcons.tsx    # Weddings / Films & Shoots / Events / etc.
│   ├── FinalCTA.tsx
│   ├── FleetStrip.tsx    # cross-sell row at the end of vehicle pages
│   ├── Footer.tsx
│   ├── MobileBottomBar.tsx
│   └── Monogram.tsx      # SVG CC logo
├── lib/
│   ├── constants.ts      # ← Instagram URL + brand strings
│   └── fleet.ts          # ← all vehicle data
├── public/
│   ├── images/           # Lady in Red & global photography
│   └── fleet/            # Valentino, The Machine, Predator, …
├── netlify.toml
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## 7. Deployment

### Vercel (one click)

```bash
npm i -g vercel
vercel
```

### Netlify

`netlify.toml` already declares:

- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs` (installed automatically)
- Node 20

Push to GitHub → connect on Netlify → done.

---

_Built with care for Classic Circle — Beirut, Lebanon._
