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
        // Brand navy backgrounds
        navy: {
          950: "#04060f",
          900: "#07091a",
          800: "#0d1024",
          700: "#111829",
          600: "#162035",
          500: "#1e2d4f",
        },
        // Primary cyan accent
        cyan: {
          400: "#22d3ee",
          500: "#00d4ff",
          600: "#00aed4",
        },
        // Secondary purple accent
        purple: {
          400: "#a78bfa",
          500: "#818cf8",
          600: "#6366f1",
        },
        // Text scale
        slate: {
          50:  "#f0f4ff",
          100: "#e0e8ff",
          200: "#c7d5f5",
          300: "#94a3c8",
          400: "#64748b",
          500: "#4a5a7a",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans:    ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #00d4ff 0%, #818cf8 100%)",
        "gradient-dark":
          "linear-gradient(180deg, #07091a 0%, #0d1024 100%)",
        "hero-grid":
          "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-60": "60px 60px",
      },
      animation: {
        "fade-up":     "fadeUp 0.6s ease-out forwards",
        "fade-in":     "fadeIn 0.8s ease-out forwards",
        "pulse-glow":  "pulseGlow 4s ease-in-out infinite",
        "float":       "float 6s ease-in-out infinite",
        "border-spin": "borderSpin 4s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        borderSpin: {
          "0%":   { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      boxShadow: {
        "glow-cyan":   "0 0 20px rgba(0, 212, 255, 0.25), 0 0 60px rgba(0, 212, 255, 0.08)",
        "glow-purple": "0 0 20px rgba(129, 140, 248, 0.25)",
        "card":        "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover":  "0 8px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 212, 255, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
