import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#F1EBDE",
        chalk: "#18140F",
        surface: "#231D15",
        "surface-2": "#2A231A",
        sandstone: "#C08A52",
        mark: "#C0713A",
        muted: "#B8AC97",
        line: "rgba(241,235,222,0.12)",
      },
      fontFamily: {
        display: ["var(--font-bitter)", "Georgia", "Times New Roman", "serif"],
        body: ["var(--font-archivo)", "Archivo", "Segoe UI", "sans-serif"],
        mono: ["var(--font-plex)", "IBM Plex Mono", "SF Mono", "Menlo", "monospace"],
      },
      fontSize: {
        body: ["17px", { lineHeight: "1.6" }],
        copy: ["1.08rem", { lineHeight: "1.68" }],
        eyebrow: ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.06em" }],
      },
      borderRadius: {
        panel: "14px",
      },
      maxWidth: {
        page: "1080px",
      },
      boxShadow: {
        lift: "0 10px 28px rgba(0,0,0,0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
