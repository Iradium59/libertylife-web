import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {  
        fond: "rgba(234,234,234,1)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#1d4ed8',
        secondary: '#9333ea',
        backgroundLight: '#F8FAFC',
        backgroundDark: '#1E293B',
        textLight: '#334155',
        textDark: '#F8FAFC',
      },
      letterSpacing: {
        widestp: "0.2em",
      },
    },
  },
  plugins: [],
} satisfies Config;
