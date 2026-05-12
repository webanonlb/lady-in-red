"use client";

import Image from "next/image";
import Link from "next/link";
import { FLEET } from "@/lib/fleet";

type Props = { currentSlug: string; title?: string };

export default function FleetStrip({ currentSlug, title = "Meet the rest of the cast" }: Props) {
  const others = FLEET.filter((v) => v.slug !== currentSlug);
  return (
    <section className="relative py-24 md:py-32 px-5 lg:px-10 bg-gradient-to-b from-ink via-espresso/30 to-ink">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h3 className="font-serif text-2xl md:text-4xl text-cream uppercase tracking-tight">
            {title}
          </h3>
          <Link
            href="/#collection"
            className="text-[11px] tracking-widest2 uppercase text-gold-light hover:text-red-glow transition-colors"
          >
            View full collection →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {others.map((v) => (
            <Link
              key={v.slug}
              href={`/fleet/${v.slug}`}
              className="group relative block rounded-lg overflow-hidden border border-gold/15"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={v.cardImage}
                  alt={v.cardAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, 17vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 font-serif text-sm md:text-base text-cream uppercase tracking-wider line-clamp-1">
                  {v.character}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
