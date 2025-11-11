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
          DEFAULT: '#0A2540',
          dark: '#051828',
        },
        lime: {
          DEFAULT: '#00E676',
          light: '#69F0AE',
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
