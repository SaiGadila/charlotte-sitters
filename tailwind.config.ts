import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dff0ff",
          500: "#2388f2",
          600: "#0f6bdc",
          700: "#0b55b3",
          900: "#12345c"
        },
        ink: "#102033"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 32, 51, 0.10)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeUp: "fadeUp 700ms ease-out both"
      }
    }
  },
  plugins: [],
};

export default config;
