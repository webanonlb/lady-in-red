// =====================================================================
//  Classic Circle — Fleet
// ---------------------------------------------------------------------
//  Each character is a vehicle in the curated collection. The same
//  data drives the home page collection grid and every individual
//  /fleet/[slug] page.
// =====================================================================

export type ScenePhoto = {
  src: string;
  alt: string;
  caption: string;
  ratio?: string; // tailwind aspect-ratio class
};

export type Vehicle = {
  slug: string;
  character: string;        // e.g. "LADY IN RED"
  italianTitle?: string;
  model: string;            // e.g. "Mercedes-Benz 560 SL"
  era: string;              // e.g. "1980s classic"
  bodyType: string;         // "Convertible roadster"
  color: string;            // "Signature red"
  origin: string;           // "Germany"
  badge: string;            // small tagline on hero
  tagline: string;          // poster-style overline
  headline: string;         // big serif headline (italic accent)
  headlineEm?: string;      // italic accented part within headline
  intro: string;            // first paragraph
  body: string;             // longer description
  poster: string;           // hero portrait image (4:5 / 3:4)
  posterAlt: string;
  cardImage: string;        // image used in collection grid
  cardAlt: string;
  characterPoster?: string; // branded "presents" poster art (optional)
  characterPosterAlt?: string;
  gallery: ScenePhoto[];
  bestFor: string[];        // chips/list
  quote: string;            // italic pull quote at bottom
  accent?: "red" | "gold" | "yellow" | "noir";
};

const ladyInRed: Vehicle = {
  slug: "lady-in-red",
  character: "Lady in Red",
  model: "Mercedes-Benz 560 SL",
  era: "1980s classic",
  bodyType: "Convertible roadster",
  color: "Signature red",
  origin: "Germany · R107",
  badge: "Vintage Mercedes-Benz 560 SL",
  tagline: "She’s not just a car. She’s the scene.",
  headline: "The red 560 SL that turns every arrival into a frame.",
  headlineEm: "arrival",
  intro:
    "An icon of 1980s German craft, dressed in deep cinematic red. Long hood, low silhouette, chrome that catches the light, a cabin trimmed in cream, and a top that drops for the moment the camera waits for.",
  body:
    "She doesn’t carry a guest list — she carries a frame. Available for weddings, music videos, photoshoots, private events, and timeless drives across Beirut and Lebanon.",
  poster: "/images/hero-sunset.jpg",
  posterAlt:
    "Lady in Red — vintage red Mercedes-Benz 560 SL against a Beirut sunset",
  cardImage: "/images/hero-sunset.jpg",
  cardAlt: "Lady in Red — Mercedes-Benz 560 SL",
  characterPoster: "/posters/lady-in-red.jpg",
  characterPosterAlt:
    "Lady in Red — branded Classic Circle poster for the Mercedes 560 SL at night in Beirut",
  gallery: [
    {
      src: "/images/hero-sunset.jpg",
      alt: "The 560 SL on the Beirut waterfront at golden hour",
      caption: "Golden hour in Beirut",
    },
    {
      src: "/images/wedding-couple.jpg",
      alt: "Bride and groom posing with the red Mercedes 560 SL",
      caption: "The wedding exit",
    },
    {
      src: "/images/night-beirut.jpg",
      alt: "The 560 SL on the Beirut corniche at night",
      caption: "After hours",
    },
    {
      src: "/images/snow-mountain.jpg",
      alt: "The 560 SL in the Lebanese mountains under snow",
      caption: "Winter has its icons too",
    },
    {
      src: "/images/just-married.jpg",
      alt: "Lady in Red — Just Married wedding exit",
      caption: "Your moment starts here",
    },
  ],
  bestFor: ["Weddings", "Videos", "Editorial", "Private events", "Timeless drives"],
  quote: "“A timeless entrance to a timeless day.”",
  accent: "red",
};

const theAffair: Vehicle = {
  slug: "the-affair",
  character: "The Affair",
  model: "Porsche 911 (997) Carrera S",
  era: "Modern classic",
  bodyType: "Coupé",
  color: "Guards red",
  origin: "Germany · 997",
  badge: "Porsche 997 Carrera S",
  tagline: "Some temptations are worth it.",
  headline: "A timeless silhouette built for the moment.",
  headlineEm: "the moment",
  intro:
    "Wide hips, round eyes, an unmistakable profile — the 997 Carrera S is the Porsche shape at its purest, dressed in guards red.",
  body:
    "Equally at home framing a wedding entrance or anchoring a film scene, The Affair arrives with quiet confidence and walks away with the shot.",
  poster: "/fleet/valentino-hero.png",
  posterAlt: "The Affair — red Porsche 911 (997) Carrera S on a forest road",
  cardImage: "/fleet/valentino-hero.png",
  cardAlt: "The Affair — Porsche 997 Carrera S",
  characterPoster: "/posters/the-affair.jpg",
  characterPosterAlt:
    "The Affair — branded Classic Circle poster for the Porsche 997",
  gallery: [
    {
      src: "/fleet/valentino-hero.png",
      alt: "Porsche 997 on a forest road",
      caption: "Some temptations are worth it",
    },
    {
      src: "/fleet/valentino-arrive.png",
      alt: "Porsche 997 photographed for a wedding arrival",
      caption: "Arrive unforgettable",
    },
    {
      src: "/fleet/valentino-moment.png",
      alt: "Porsche 997 in editorial light",
      caption: "Built for the moment",
    },
    {
      src: "/fleet/valentino-icon.png",
      alt: "Porsche 997 head-on portrait",
      caption: "An icon for hire",
    },
  ],
  bestFor: ["Weddings", "Productions", "Music videos", "Editorial", "Special arrivals"],
  quote: "“Make your entrance count.”",
  accent: "red",
};

const theMachine: Vehicle = {
  slug: "the-machine",
  character: "The Machine",
  model: "Mercedes-Benz W124",
  era: "1990s classic",
  bodyType: "Executive sedan",
  color: "Obsidian black",
  origin: "Germany",
  badge: "Mercedes-Benz · The Machine",
  tagline: "Built to dominate.",
  headline: "Quiet power, in a tailored suit.",
  headlineEm: "tailored",
  intro:
    "Square-jawed and unbothered, the W124 is the executive sedan at its peak — chrome touches, deep paint, and presence that does the talking.",
  body:
    "A serious frame for night drives, brand films, music videos, and cinematic establishing shots. Discreet, unbreakable, unforgettable.",
  poster: "/fleet/the-machine-cafe.png",
  posterAlt:
    "The Machine — black Mercedes-Benz W124 parked outside Aïn El Mréisseh Café in Beirut",
  cardImage: "/fleet/the-machine-cafe.png",
  cardAlt: "The Machine — Mercedes-Benz W124 in Beirut",
  characterPoster: "/posters/the-machine.jpg",
  characterPosterAlt:
    "The Machine — branded Classic Circle poster for the black Mercedes-Benz sedan",
  gallery: [
    {
      src: "/fleet/the-machine-cafe.png",
      alt: "Black Mercedes W124 outside Aïn El Mréisseh Café",
      caption: "Beirut, after the rain",
    },
    {
      src: "/fleet/the-machine-rain.png",
      alt: "Black Mercedes W124 rear three-quarter on a wet Beirut street",
      caption: "Three-quarters of a power move",
    },
    {
      src: "/fleet/the-machine-hero.png",
      alt: "Black Mercedes-Benz W124 portrait",
      caption: "Built to dominate",
    },
  ],
  bestFor: ["Film", "Music videos", "Editorial", "Private chauffeur scenes", "Night drives"],
  quote: "“Some scenes don’t need a soundtrack.”",
  accent: "noir",
};

const theGentleman: Vehicle = {
  slug: "the-gentleman",
  character: "The Gentleman",
  model: "Royal Enfield Classic",
  era: "Timeless British craft",
  bodyType: "Cruiser motorcycle",
  color: "Squadron black",
  origin: "United Kingdom / India",
  badge: "Royal Enfield Classic",
  tagline: "Some journeys deserve character.",
  headline: "Some machines don’t age. They evolve.",
  headlineEm: "evolve",
  intro:
    "Single-cylinder thump, leather seat, chromed lamp — the Royal Enfield is the gentleman’s motorcycle. As at home in old Beirut alleys as on a Mediterranean port.",
  body:
    "A travel-ready character for editorial, lifestyle content, fashion campaigns, and slow-rolled storytelling.",
  poster: "/fleet/the-gentleman-port.png",
  posterAlt: "The Gentleman — Royal Enfield classic motorcycle at a Mediterranean port",
  cardImage: "/fleet/the-gentleman-port.png",
  cardAlt: "The Gentleman — Royal Enfield Classic",
  characterPoster: "/posters/the-gentleman.jpg",
  characterPosterAlt:
    "The Gentleman — branded Classic Circle poster for the Royal Enfield Classic at Beirut port",
  gallery: [
    {
      src: "/fleet/the-gentleman-port.png",
      alt: "Royal Enfield in front of fishing boats and an old clock tower",
      caption: "It doesn’t belong to one place",
    },
    {
      src: "/fleet/the-gentleman-studio.png",
      alt: "Royal Enfield in a smoke-lit studio",
      caption: "Some machines don’t age — they evolve",
    },
  ],
  bestFor: ["Editorial", "Lifestyle", "Travel films", "Fashion campaigns", "Brand stories"],
  quote: "“Old soul. New stories.”",
  accent: "gold",
};

const thePredator: Vehicle = {
  slug: "the-predator",
  character: "The Predator",
  model: "Ducati Monster",
  era: "Contemporary icon",
  bodyType: "Naked sport motorcycle",
  color: "Ducati red",
  origin: "Italy",
  badge: "Ducati Monster · The Predator",
  tagline: "Built to be felt. Not just seen.",
  headline: "All silhouette. All snarl.",
  headlineEm: "snarl",
  intro:
    "Exposed trellis frame, single round eye, unmistakable Ducati red — the Monster is raw character without a single line out of place.",
  body:
    "A high-voltage scene-setter for action sequences, attitude-led editorials, brand campaigns, and motion-rich music videos.",
  poster: "/fleet/the-predator-beirut.png",
  posterAlt:
    "The Predator — red Ducati Monster on a Beirut downtown street with stone façades and street cafés",
  cardImage: "/fleet/the-predator-beirut.png",
  cardAlt: "The Predator — Ducati Monster in downtown Beirut",
  characterPoster: "/posters/the-predator.jpg",
  characterPosterAlt:
    "The Predator — branded Classic Circle poster for the red Ducati Monster",
  gallery: [
    {
      src: "/fleet/the-predator-beirut.png",
      alt: "Ducati Monster parked on a Beirut downtown street",
      caption: "Downtown teeth",
    },
    {
      src: "/fleet/the-predator-beirut-rear.png",
      alt: "Ducati Monster rear three-quarter on a Beirut backstreet",
      caption: "She doesn’t whisper",
    },
    {
      src: "/fleet/the-predator-hero.png",
      alt: "Ducati Monster front three-quarter close-up",
      caption: "Built to be felt",
    },
    {
      src: "/fleet/the-predator-angle.png",
      alt: "Ducati Monster headlamp detail",
      caption: "Not just seen",
    },
  ],
  bestFor: ["Music videos", "Action sequences", "Fashion editorial", "Brand campaigns"],
  quote: "“She doesn’t whisper.”",
  accent: "red",
};

const ilGiallo: Vehicle = {
  slug: "il-giallo",
  character: "Il Giallo",
  italianTitle: "The Yellow One",
  model: "Ducati 749",
  era: "Modern Italian classic",
  bodyType: "Supersport motorcycle",
  color: "Giallo (yellow)",
  origin: "Italy · Borgo Panigale",
  badge: "Ducati 749 · Il Giallo",
  tagline: "Born to stand apart.",
  headline: "An underground icon, painted in sunshine.",
  headlineEm: "underground",
  intro:
    "Sharp, slim, unapologetic — the 749 in Ducati’s rarest livery. A motorcycle the streets remember.",
  body:
    "An attention-magnet for editorial, fashion, music videos, and cult-cool brand work. She moves the frame before she moves.",
  poster: "/fleet/il-giallo-color.png",
  posterAlt: "Il Giallo — yellow Ducati 749 supersport motorcycle",
  cardImage: "/fleet/il-giallo-underground.png",
  cardAlt: "Il Giallo — Ducati 749 in yellow",
  characterPoster: "/posters/il-giallo.jpg",
  characterPosterAlt:
    "Il Giallo — branded Classic Circle poster for the yellow Ducati 749",
  gallery: [
    {
      src: "/fleet/il-giallo-color.png",
      alt: "Yellow Ducati 749 in a back alley",
      caption: "It chooses you",
    },
    {
      src: "/fleet/il-giallo-underground.png",
      alt: "Yellow Ducati 749 in a moody parking garage",
      caption: "Underground icon",
    },
    {
      src: "/fleet/il-giallo-outlier.png",
      alt: "Yellow Ducati 749 standing out at a bike meet",
      caption: "The outlier",
    },
  ],
  bestFor: ["Music videos", "Fashion", "Editorial", "Cult brand work"],
  quote: "“Loud in silence. Louder in motion.”",
  accent: "yellow",
};

const ilSignore: Vehicle = {
  slug: "il-signore",
  character: "Il Signore",
  italianTitle: "The Gentleman",
  model: "Vespa GTS",
  era: "Italian classic, modern",
  bodyType: "Scooter",
  color: "Bronzo elegante",
  origin: "Italy · Pontedera",
  badge: "Vespa · Il Signore",
  tagline: "Dolce vita, on wheels.",
  headline: "An Italian story, written in two strokes of style.",
  headlineEm: "two strokes",
  intro:
    "Sunglasses on, blazer thrown over a crisp shirt, espresso somewhere nearby — Il Signore is mood, packaged.",
  body:
    "A perfect frame for lifestyle content, fashion, travel films, hospitality brands, and slow-rolled Mediterranean storytelling.",
  poster: "/fleet/il-signore-marina.png",
  posterAlt:
    "Il Signore — bronze Vespa GTS parked at the Beirut marina at golden hour",
  cardImage: "/fleet/il-signore-marina.png",
  cardAlt: "Il Signore — Vespa GTS at Beirut marina",
  characterPoster: "/posters/il-signore.jpg",
  characterPosterAlt:
    "Il Signore — branded Classic Circle poster for the bronze Vespa GTS in Rome",
  gallery: [
    {
      src: "/fleet/il-signore-marina.png",
      alt: "Bronze Vespa GTS at the Beirut marina with yachts and palm trees",
      caption: "Beirut, slow rolled",
    },
    {
      src: "/fleet/il-signore-trattoria.png",
      alt: "Bronze Vespa parked outside Trattoria Da Enzo in Rome",
      caption: "Roman, by feeling",
    },
    {
      src: "/fleet/il-signore-rome.png",
      alt: "Stylish man on a Vespa outside Trattoria Da Enzo",
      caption: "Dolce vita",
    },
  ],
  bestFor: ["Lifestyle", "Editorial", "Travel film", "Hospitality", "Fashion"],
  quote: "“The gentleman’s slow lane.”",
  accent: "gold",
};

export const FLEET: Vehicle[] = [
  ladyInRed,
  theAffair,
  theMachine,
  theGentleman,
  thePredator,
  ilGiallo,
  ilSignore,
];

export const getVehicle = (slug: string): Vehicle | undefined =>
  FLEET.find((v) => v.slug === slug);
