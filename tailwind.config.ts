import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cinematic dark base
        ink: "#0A0606",          // deep black
        char: "#14100E",         // charcoal
        espresso: "#1F1714",     // warm espresso
        burgundy: "#2A0A0E",     // dark burgundy
        // Accents
        red: {
          DEFAULT: "#B8252E",    // vintage red
          deep: "#8E1A22",
          glow: "#D8323D",
        },
        gold: {
          DEFAULT: "#C9A86A",    // champagne gold
          light: "#E0C689",
          dim: "#8C7344",
        },
        cream: "#F4E9D8",
        bone: "#E8DFC9",
        muted: "#9A8C7A",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        script: ["var(--font-allura)", "Allura", "cursive"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      boxShadow: {
        glow: "0 20px 60px -10px rgba(184, 37, 46, 0.35)",
        soft: "0 30px 80px -20px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        "subtle-pulse": "subtlePulse 4s ease-in-out infinite",
        "fade-up": "fadeUp 1.2s ease-out forwards",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        subtlePulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
