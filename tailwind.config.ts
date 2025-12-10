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
        primary: {
          peach: "#F4A582",
          coral: "#E67E50",
          orange: "#D96840",
          burgundy: "#6B2A3E",
          dark: "#2D1B24",
        },
        neutral: {
          cream: "#F5E6D3",
          beige: "#E8D4BE",
          light: "#FAF8F5",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;