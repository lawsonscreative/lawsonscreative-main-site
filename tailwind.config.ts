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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Brand colors
        navy: {
          DEFAULT: '#27a6ea',
          dark: '#1e8bc3',
        },
        lime: {
          DEFAULT: '#FF6B35',
          light: '#FF8C61',
        },
        slate: {
          DEFAULT: '#475569',
          light: '#64748B',
        },
        lightgrey: '#F1F5F9',
        success: '#22C55E',
        warning: '#F97316',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
