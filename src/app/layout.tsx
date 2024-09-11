import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { jacques_francois_shadow, lobster } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lobster.variable} ${jacques_francois_shadow.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
