import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        richcourt: {
          gold: "#C5A059",
          black: "#0A0A0A",
          charcoal: "#1A1A1A",
          cream: "#F4F1EA",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        luxury: ".5em",
      },
    },
  },
  plugins: [],
};
export default config;