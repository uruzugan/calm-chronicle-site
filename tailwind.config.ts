import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C8A96A",
        charcoal: "#1F1F1F",
        beige: "#F5F1EA",
        "border-light": "#E8E4DC",
      },
      fontFamily: {
        serif: ["Noto Serif JP", "Playfair Display", "Georgia", "serif"],
        sans: ["Noto Sans JP", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          md: "2rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
