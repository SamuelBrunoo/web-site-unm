import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#212428",
        border: "#e4e6e9",
        input: "#e4e6e9",
        ring: "#fd6d33",
        primary: {
          DEFAULT: "#1b295c",
          dark: "#0c153b",
          foreground: "#f9fafd",
          50: "#f2f6fe",
          100: "#e2eafb",
        },
        secondary: {
          DEFAULT: "#f1f2f4",
          foreground: "#1b295c",
        },
        muted: {
          DEFAULT: "#f8f9fa",
          foreground: "#6b7280",
        },
        accent: {
          DEFAULT: "#fd6d33",
          deep: "#e2320a",
          foreground: "#0c153b",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#212428",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#212428",
        },
        navy: {
          50: "#eef3f8",
          100: "#d6e2ee",
          200: "#adc5dd",
          300: "#7fa3c8",
          400: "#4d7ba8",
          500: "#2c5985",
          600: "#1d4266",
          700: "#153450",
          800: "#0f2740",
          900: "#0a1c30",
          950: "#071526",
        },
        flame: {
          50: "#fff4ed",
          100: "#ffe4d3",
          200: "#ffc4a3",
          300: "#ff9c69",
          400: "#fd6d33",
          500: "#f5480f",
          600: "#e2320a",
          700: "#bb220b",
          800: "#951c10",
          900: "#791b11",
        },
        neutral: {
          50: "#f8f9fa",
          100: "#f1f2f4",
          200: "#e4e6e9",
          300: "#cdd1d6",
          400: "#9aa1ab",
          500: "#6b7280",
          600: "#4d525b",
          700: "#363a40",
          800: "#212428",
          900: "#131517",
        },
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "flame-gradient": "linear-gradient(90deg, #fd6d33 0%, #e2320a 100%)",
        "navy-gradient": "linear-gradient(180deg, #0a1c30 0%, #153450 100%)",
      },
      boxShadow: {
        lift: "0 24px 60px -32px rgba(10, 28, 48, 0.55)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        heroKen: {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        heroKen: "heroKen 8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
