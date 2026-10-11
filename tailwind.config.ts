import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E0D0C",
        surface: "#161412",
        raised: "#1F1C19",
        bone: "#EDE8E0",
        muted: "#9B948A",
        brass: "#B8935A",
        hair: "#2A2622",
        ivory: "#F2EEE7",
        stone: "#E4DED4",
        coal: "#1A1816",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: { lux: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
export default config;
