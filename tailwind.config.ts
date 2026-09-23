import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lemon: {
          50: "#f9fce8",
          100: "#f0f8c8",
          200: "#e3f096",
          300: "#cfe35c",
          400: "#b9d631",
          500: "#9ec21f",
          600: "#7a9b17",
          700: "#5c7616",
          800: "#4b5e17",
          900: "#405018",
        },
        charcoal: {
          800: "#2b2e2a",
          900: "#1c1e1b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 10px rgba(28, 30, 27, 0.06)",
        "card-hover": "0 12px 24px rgba(28, 30, 27, 0.10)",
      },
      backgroundImage: {
        "lemon-gradient": "linear-gradient(120deg, #d9f28e 0%, #f5e94a 100%)",
        "lemon-gradient-soft": "linear-gradient(135deg, #f3fadd 0%, #fdfbe0 55%, #fbf6c8 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
