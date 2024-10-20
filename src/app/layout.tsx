import { allura, bruno_ace, noto_sans } from "@/utils/fonts";
import { Provider } from "jotai";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

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
      className={` ${noto_sans.variable} ${bruno_ace.variable} ${allura.variable} antialiased`}>
      <body>
        <Provider>
          <Providers>{children}</Providers>
        </Provider>
      </body>
    </html>
  );
}
