import { allura } from "@/utils/fonts";
import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|divider|image|navbar|tabs|popover|ripple|spinner).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        allura: ["var(--font-allura)"],
        noto_sans: ["var(--font-noto-sans)"],
        bruno_ace: ["var(--font-bruno-ace)"],
      },
    },
  },
  darkMode: "selector",
  plugins: [nextui()],
};
export default config;
