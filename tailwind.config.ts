import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#F1EBDE",
        chalk: "#2A241B",
        surface: "#352D21",
        "surface-2": "#3C3326",
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
        body: ["20px", { lineHeight: "1.7" }],
        copy: ["21px", { lineHeight: "1.7" }],
        eyebrow: ["0.9375rem", { lineHeight: "1.45", letterSpacing: "0.05em" }],
        chip: ["16px", { lineHeight: "1.4" }],
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
