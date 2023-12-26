import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import { colors } from "./styles/colors";
import { keyframes, animations } from "./styles/animations";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
      keyframes: keyframes,
      animation: animations,
    },
  },
  plugins: [daisyui],
};
export default config;
