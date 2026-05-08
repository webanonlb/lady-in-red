import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PositioningStrip from "@/components/PositioningStrip";
import TheCar from "@/components/TheCar";
import Services from "@/components/Services";
import WeddingFeature from "@/components/WeddingFeature";
import ProductionFeature from "@/components/ProductionFeature";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { INSTAGRAM_HANDLE } from "@/lib/constants";

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "Lady in Red — Classic Car Rental",
  description:
    "Vintage red Mercedes-Benz 560 SL convertible available for weddings, music videos, photoshoots, private events, and timeless drives in Beirut, Lebanon.",
  areaServed: {
    "@type": "Country",
    name: "Lebanon",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beirut",
    addressCountry: "LB",
  },
  sameAs: ["https://instagram.com/ladyinred.sl"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lady in Red — Bookings",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding car rental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Music video & film car rental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Editorial photoshoot car rental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Private event & timeless drives" } },
    ],
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
        <Hero />
        <PositioningStrip />
        <TheCar />
        <Services />
        <WeddingFeature />
        <ProductionFeature />
        <Gallery />
        <Experience />
        <Booking />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomBar />

      {/* Hidden SEO content with target keywords used naturally */}
      <p className="sr-only">
        Lady in Red is a vintage Mercedes 560 SL rental in Beirut, offering a
        classic car rental in Lebanon for weddings, music videos, photoshoots,
        and private events. A luxury wedding car in Beirut and a vintage car
        for editorial photoshoots — book the Mercedes 560 SL rental in Lebanon
        by Instagram DM at {INSTAGRAM_HANDLE}.
      </p>
    </>
  );
}
