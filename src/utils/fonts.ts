import { Jacques_Francois_Shadow, Lobster } from "next/font/google";

export const jacques_francois_shadow = Jacques_Francois_Shadow({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-jacques",
  weight: ["400"],
});

export const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-lobster",
  weight: ["400"],
});
