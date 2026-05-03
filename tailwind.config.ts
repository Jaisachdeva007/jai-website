import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070710",
          900: "#0b0b14",
          800: "#13131f",
          700: "#1c1c2b",
          600: "#262638",
        },
        neon: {
          DEFAULT: "#ff014f",
          400: "#ff3a72",
          300: "#ff6f93",
          200: "#ffb3c6",
          glow: "rgba(255, 1, 79, 0.55)",
        },
        purple: {
          DEFAULT: "#6334ff",
          500: "#7c4dff",
          300: "#a78bff",
        },
        bone: {
          50: "#fafafa",
          100: "#f1f1f3",
          200: "#d6d6dd",
          300: "#a7a7b3",
          400: "#7a7a89",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "neon-gradient": "linear-gradient(135deg, #ff3a72 0%, #ff014f 100%)",
        "neon-gradient-v": "linear-gradient(180deg, #ff3a72 0%, #ff014f 100%)",
        "purple-gradient": "linear-gradient(135deg, #6334ff 0%, #4318cc 100%)",
        "dual-gradient": "linear-gradient(135deg, #ff3a72 0%, #ff014f 50%, #6334ff 100%)",
        "mesh": "radial-gradient(at 20% 10%, rgba(255,1,79,0.18) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(99,52,255,0.12) 0px, transparent 50%), radial-gradient(at 50% 90%, rgba(255,1,79,0.10) 0px, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 1, 79, 0.35)",
        "glow-lg": "0 0 80px rgba(255, 1, 79, 0.45)",
        "glow-sm": "0 0 20px rgba(255, 1, 79, 0.25)",
        "purple-glow": "0 0 40px rgba(99, 52, 255, 0.35)",
        card: "0 18px 50px rgba(0,0,0,0.45)",
        "card-lg": "0 30px 80px rgba(0,0,0,0.6)",
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "marquee": "marquee 32s linear infinite",
        "marquee-reverse": "marqueeReverse 32s linear infinite",
        "fade-up": "fadeUp 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
