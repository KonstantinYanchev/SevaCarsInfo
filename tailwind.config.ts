import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a1628",
          50: "#e8eaf0",
          100: "#c5cad8",
          200: "#9ea7be",
          300: "#7784a4",
          400: "#586990",
          500: "#3a4f7c",
          600: "#2e4068",
          700: "#1e2f52",
          800: "#0f1e3c",
          900: "#0a1628",
        },
        accent: {
          DEFAULT: "#e63329",
          50: "#fdecea",
          100: "#f9cbc8",
          200: "#f4a8a4",
          300: "#ef847f",
          400: "#eb6862",
          500: "#e63329",
          600: "#cc2e25",
          700: "#a82620",
          800: "#851e19",
          900: "#621613",
        },
      },
    },
  },
  plugins: [],
};

export default config;
