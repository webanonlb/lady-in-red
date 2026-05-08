import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Allura } from "next/font/google";
import "./globals.css";
import { INSTAGRAM_HANDLE } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const allura = Allura({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-allura",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ladyinred.example"),
  title: "Lady in Red — Vintage Mercedes 560 SL Rental in Beirut",
  description:
    "Rent a vintage red Mercedes-Benz 560 SL for weddings, music videos, photoshoots, private events, and timeless drives in Beirut, Lebanon. Book by Instagram DM.",
  keywords: [
    "vintage Mercedes rental Beirut",
    "Mercedes 560 SL rental Lebanon",
    "wedding car Beirut",
    "classic car rental Lebanon",
    "vintage car photoshoot Beirut",
    "music video car rental Lebanon",
    "luxury wedding car Beirut",
    "Lady in Red",
    "classic convertible Lebanon",
  ],
  authors: [{ name: "Lady in Red" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Lady in Red — Vintage Mercedes 560 SL Rental in Beirut",
    description:
      "A vintage red Mercedes-Benz 560 SL for weddings, videos, photoshoots, and timeless arrivals in Beirut. Book by Instagram DM.",
    siteName: "Lady in Red — Classic Car Rental",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-sunset.jpg",
        width: 1200,
        height: 1500,
        alt: "Vintage red Mercedes-Benz 560 SL convertible at Beirut sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lady in Red — Vintage Mercedes 560 SL Rental in Beirut",
    description:
      "Vintage red Mercedes 560 SL for weddings, films, and editorial shoots in Beirut. DM " +
      INSTAGRAM_HANDLE,
    images: ["/images/hero-sunset.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0606",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${allura.variable}`}
    >
      <body>
        {children}
        <div className="grain-overlay" aria-hidden />
      </body>
    </html>
  );
}
