import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spidey: {
          red: "#E52521",
          "red-dark": "#B91C1C",
          "red-light": "#FEE2E2",
          blue: "#0284C7",
          "blue-dark": "#0369A1",
          navy: "#0F172A",
        },
        domain: {
          web: "#E52521",
          android: "#10B981",
          ai: "#D97706",
          uiux: "#EC4899",
          dsa: "#0284C7",
          cloud: "#10B981",
          cyber: "#EC4899",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Chakra Petch", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "18px",
      },
      keyframes: {
        swing: {
          "0%, 100%": { transform: "rotate(-4deg)", transformOrigin: "top center" },
          "50%": { transform: "rotate(4deg)", transformOrigin: "top center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shoot: {
          "0%": { transform: "scale(0) rotate(-15deg)", opacity: "0" },
          "50%": { transform: "scale(1.1) rotate(0deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
      },
      animation: {
        swing: "swing 4s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        shoot: "shoot 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
