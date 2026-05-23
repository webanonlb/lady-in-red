import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FLEET, getVehicle } from "@/lib/fleet";
import {
  BRAND,
  BOOKING_EMAIL,
  mailtoFor,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  LADY_IN_RED_INSTAGRAM_URL,
  LADY_IN_RED_INSTAGRAM_HANDLE,
} from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FleetStrip from "@/components/FleetStrip";

export const dynamicParams = false;

export function generateStaticParams() {
  return FLEET.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const v = getVehicle(params.slug);
  if (!v) return {};
  const title = `${v.character} — ${v.model}`;
  const description = `${v.tagline} ${v.intro}`.slice(0, 180);
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: v.poster, alt: v.posterAlt }],
    },
  };
}

export default function VehiclePage({ params }: { params: { slug: string } }) {
  const v = getVehicle(params.slug);
  if (!v) notFound();

  /* Per-vehicle booking channel:
       - Lady in Red keeps her own dedicated DM line @ladyinred.sl
       - Everyone else routes to the brand IG @beirutclassiccircle
     The concierge email is offered as a quieter, secondary option
     on the bottom CTA section only — primary CTA stays IG. */
  const isLadyInRed = v.slug === "lady-in-red";
  const igHref = isLadyInRed ? LADY_IN_RED_INSTAGRAM_URL : INSTAGRAM_URL;
  const igHandle = isLadyInRed ? LADY_IN_RED_INSTAGRAM_HANDLE : INSTAGRAM_HANDLE;
  const heroIgLabel = `DM for ${v.character}`;
  const finalIgLabel = `Message ${igHandle}`;
  const bookingMailto = mailtoFor(v.character);

  // Highlight headline emphasis
  const headlineParts = v.headlineEm
    ? v.headline.split(v.headlineEm)
    : [v.headline];

  const renderHeadline = () => {
    if (!v.headlineEm) return v.headline;
    return (
      <>
        {headlineParts[0]}
        <em>{v.headlineEm}</em>
        {headlineParts[1] ?? ""}
      </>
    );
  };

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-[100svh] w-full overflow-hidden vignette">
          <div className="absolute inset-0">
            <Image
              src={v.poster}
              alt={v.posterAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/30 to-ink/95" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/30" />
          </div>

          <div className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-10 items-center gap-3">
            <span className="floating-label">Beirut · Lebanon</span>
            <span className="block w-px h-24 bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10 pt-44 md:pt-52 pb-24 min-h-[100svh] flex flex-col">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-[10.5px] tracking-widest2 uppercase text-cream/65 mb-6">
              <Link href="/" className="hover:text-gold-light transition-colors">{BRAND.name}</Link>
              <span className="mx-2 text-gold/50">/</span>
              <Link href="/#collection" className="hover:text-gold-light transition-colors">Collection</Link>
              <span className="mx-2 text-gold/50">/</span>
              <span className="text-gold-light">{v.character}</span>
            </nav>

            <span className="luxury-badge">
              <span className="block w-1.5 h-1.5 rounded-full bg-red-glow animate-subtle-pulse" />
              {v.badge}
            </span>

            <p className="script-mark mt-6 text-3xl md:text-5xl">{v.character}</p>

            <h1 className="headline mt-3 text-[40px] sm:text-6xl lg:text-[80px] max-w-4xl uppercase tracking-tight">
              {v.tagline}
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-cream/80">
              {v.intro}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 cta-stack">
              <a
                href={igHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red"
              >
                {heroIgLabel}
              </a>
              <Link href="#story" className="btn-ghost">
                Explore {v.character}
              </Link>
            </div>

            <div className="mt-auto pt-16 hidden md:flex flex-wrap items-center gap-6 text-[10.5px] tracking-widest2 uppercase text-gold/75">
              {v.bestFor.slice(0, 4).map((b, i) => (
                <span key={b} className="flex items-center gap-6">
                  <span>{b}</span>
                  {i < v.bestFor.slice(0, 4).length - 1 && <span className="block w-1 h-1 rounded-full bg-gold/50" />}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROFILE */}
        <section id="story" className="relative py-28 md:py-40 px-5 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
              <div className="lg:col-span-7">
                <span className="eyebrow text-red-glow">— The Character</span>
                <h2 className="headline mt-5 text-[36px] md:text-5xl lg:text-[60px] uppercase tracking-tight">
                  {renderHeadline()}
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pb-3">
                <p className="text-cream/75 text-base leading-relaxed max-w-md">
                  {v.body}
                </p>
              </div>
            </div>

            <div className="gold-line mb-14" />

            {/* Specs */}
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 rounded-lg overflow-hidden border border-gold/15">
              {[
                { label: "Model", value: v.model },
                { label: "Era", value: v.era },
                { label: "Body", value: v.bodyType },
                { label: "Colour", value: v.color },
                { label: "Origin", value: v.origin },
                { label: "Best for", value: v.bestFor.slice(0, 3).join(" · ") },
              ].map((s) => (
                <li key={s.label} className="bg-espresso/70 backdrop-blur-sm p-6 md:p-7">
                  <p className="text-[10px] tracking-widest2 uppercase text-gold/80">{s.label}</p>
                  <p className="mt-2 font-serif text-lg md:text-xl text-cream leading-snug">
                    {s.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OFFICIAL POSTER — branded "Beirut Classic Circle presents…" art */}
        {v.characterPoster && (
          <section
            aria-label={`${v.character} — official poster`}
            className="relative py-20 md:py-28 px-5 lg:px-10"
          >
            <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="eyebrow text-red-glow">— Official poster</span>
                <h2 className="headline mt-5 text-[30px] md:text-4xl lg:text-[48px] uppercase tracking-tight">
                  Presented by <em>Beirut Classic Circle.</em>
                </h2>
                <p className="mt-6 text-cream/75 text-[15px] md:text-base leading-relaxed max-w-md">
                  {v.character} has her own poster — a film-room frame for
                  the character that lives between the lines of every booking.
                  Saved for the moodboard, the production deck, the wedding
                  brief.
                </p>
                <div className="gold-line my-8 max-w-[180px]" />
                <p className="font-serif italic text-cream/65 text-lg max-w-md">
                  “{v.tagline}”
                </p>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 relative aspect-[2/3] max-w-[440px] mx-auto lg:max-w-none w-full rounded-md overflow-hidden border border-gold/20 shadow-soft">
                <Image
                  src={v.characterPoster}
                  alt={v.characterPosterAlt ?? v.character}
                  fill
                  sizes="(max-width: 1024px) 80vw, 560px"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_80px_rgba(0,0,0,0.5)]" />
              </div>
            </div>
          </section>
        )}

        {/* SCENES / GALLERY */}
        <section className="relative py-20 md:py-28 px-5 lg:px-10 bg-gradient-to-b from-ink via-burgundy/30 to-ink">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <span className="eyebrow text-red-glow">— Scenes</span>
                <h2 className="headline mt-4 text-[32px] md:text-5xl uppercase tracking-tight">
                  A few frames. <em>A lot of feeling.</em>
                </h2>
              </div>
              <p className="text-cream/65 text-sm max-w-sm">
                Glimpses of {v.character} on her better days.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {v.gallery.map((g, i) => (
                <div
                  key={g.src + i}
                  className={`gallery-card aspect-[4/5] ${i === 0 ? "md:row-span-2 md:aspect-[4/6]" : ""}`}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent pointer-events-none" />
                  <div className="caption">
                    <p className="font-serif text-xl text-cream">{g.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-28 md:py-40 px-5 lg:px-10 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="font-serif italic text-cream/70 text-xl md:text-2xl">
              {v.quote}
            </p>
            <h2 className="headline mt-8 text-[36px] md:text-5xl lg:text-[64px] uppercase tracking-tight">
              Bring her into <em>your scene.</em>
            </h2>
            <p className="mt-6 text-cream/75 text-base md:text-[17px] leading-relaxed max-w-xl mx-auto">
              Availability for {v.character} is handled through Instagram DM.
              Send your date, location, and the moment you want to create.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 cta-stack">
              <a
                href={igHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red"
              >
                {finalIgLabel}
              </a>
              <Link href="/#collection" className="btn-ghost">Browse the collection</Link>
            </div>

            {/* Quieter email alternative — for booking inquiries that prefer email */}
            <p className="mt-5 text-[11px] tracking-widest2 uppercase text-cream/55">
              or{" "}
              <a
                href={bookingMailto}
                className="text-gold-light hover:text-cream transition-colors"
              >
                {BOOKING_EMAIL}
              </a>
            </p>
          </div>
        </section>

        {/* OTHER CHARACTERS */}
        <FleetStrip currentSlug={v.slug} />
      </main>
      <Footer />
    </>
  );
}
