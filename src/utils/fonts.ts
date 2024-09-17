import {
  Allura,
  Bruno_Ace,
  Jacques_Francois_Shadow,
  Noto_Sans,
} from "next/font/google";

export const jacques_francois_shadow = Jacques_Francois_Shadow({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-jacques",
  weight: ["400"],
});

export const allura = Allura({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-allura",
  weight: ["400"],
});

export const noto_sans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-noto-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const bruno_ace = Bruno_Ace({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-bruno-ace",
  weight: ["400"],
});