import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import CollectionGrid from "@/components/CollectionGrid";
import Lifestyle from "@/components/Lifestyle";
import UseCasesStrip from "@/components/UseCasesStrip";
import ValueIcons from "@/components/ValueIcons";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { BRAND, INSTAGRAM_HANDLE } from "@/lib/constants";
import { FLEET } from "@/lib/fleet";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: `${BRAND.name} — ${BRAND.descriptor}`,
  description:
    "A curated collection of iconic machines (Mercedes-Benz 560 SL, Porsche 997 Carrera S, Mercedes-Benz W124, Royal Enfield, Ducati Monster, Ducati 749, Vespa) for weddings, films, editorial shoots, private events, and timeless drives in Beirut, Lebanon.",
  areaServed: { "@type": "Country", name: "Lebanon" },
  address: { "@type": "PostalAddress", addressLocality: "Beirut", addressCountry: "LB" },
  sameAs: ["https://instagram.com/ladyinred.sl"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${BRAND.name} — Fleet`,
    itemListElement: FLEET.map((v) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `${v.character} — ${v.model}` },
    })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="overflow-hidden">
        <HomeHero />
        <CollectionGrid />
        <UseCasesStrip />
        <Lifestyle />
        <ValueIcons />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomBar />

      {/* Hidden SEO content with target keywords used naturally */}
      <p className="sr-only">
        {BRAND.name} is a Beirut-based curated rental of classic cars and motorcycles:
        a vintage Mercedes 560 SL (Lady in Red), Porsche 997 Carrera S (Valentino),
        Mercedes-Benz W124 (The Machine), Royal Enfield (The Gentleman), Ducati
        Monster (The Predator), Ducati 749 (Il Giallo), and Vespa (Il Signore).
        Available across Lebanon for weddings, music videos, photoshoots, private
        events, and timeless drives. Book by Instagram DM at {INSTAGRAM_HANDLE}.
      </p>
    </>
  );
}
