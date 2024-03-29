import type { Config } from "tailwindcss";
import { colors } from "./styles/colors";
import { keyframes, animations } from "./styles/animations";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
      keyframes: keyframes,
      animation: animations,
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
