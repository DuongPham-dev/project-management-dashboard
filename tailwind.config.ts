import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

// Themes
import { COLORS } from "./src/libs/next-ui";

const config: Config = {
  content: [
    "./src/ui/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/common/icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/mocks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|ripple|spinner|skeleton).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: COLORS,
    },
  },
  plugins: [nextui({})],
};
export default config;
