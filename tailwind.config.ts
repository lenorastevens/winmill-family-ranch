import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#9C7945",
        accent1: "#45050C",
        accent2: "#E1D28F"
      },
      fontFamily: {
        rancho: ['var(--font-rancho)', 'serif'],
        bigShot: ['var(--font-bigshot)', 'serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
