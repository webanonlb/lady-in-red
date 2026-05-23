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
  metadataBase: new URL("https://classiccircle.example"),
  title: {
    default:
      "Beirut Classic Circle — Classic Car & Motorcycle Rental in Beirut, Lebanon",
    template: "%s | Beirut Classic Circle",
  },
  description:
    "A curated fleet of iconic cars and motorcycles — Mercedes 560 SL, Porsche 997, Royal Enfield, Ducati, Vespa and more — for weddings, films, editorial shoots, and timeless moments in Beirut, Lebanon. Book by Instagram DM.",
  keywords: [
    "Beirut Classic Circle",
    "classic car rental Lebanon",
    "vintage car rental Beirut",
    "wedding car Beirut",
    "Mercedes 560 SL rental Lebanon",
    "Porsche 997 rental Beirut",
    "Ducati rental Beirut",
    "Vespa rental Lebanon",
    "music video car rental Lebanon",
    "luxury wedding car Beirut",
    "Lady in Red",
    "The Affair Porsche",
  ],
  authors: [{ name: "Beirut Classic Circle" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title:
      "Beirut Classic Circle — Classic Car & Motorcycle Rental in Beirut, Lebanon",
    description:
      "Curated icons for weddings, films, and timeless moments. Book by Instagram DM.",
    siteName: "Beirut Classic Circle — Classic Car Rental",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-sunset.jpg",
        width: 1200,
        height: 1500,
        alt: "Beirut Classic Circle — vintage red Mercedes-Benz 560 SL at a Beirut sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beirut Classic Circle — Beirut, Lebanon",
    description:
      "Iconic cars and motorcycles for weddings, films, and timeless moments in Beirut. DM " +
      INSTAGRAM_HANDLE,
    images: ["/images/hero-sunset.jpg"],
  },
  robots: { index: true, follow: true },
  /* Explicit favicon set — Safari needs proper <link> tags rather
     than the App Router file-based convention. /favicon.ico is a
     multi-resolution .ico (16/24/32/48/64) generated from the logo. */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
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
