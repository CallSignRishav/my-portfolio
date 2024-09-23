"use client";

import BgParticle from "@/components/BgParticle";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { darkModeAtom } from "@/utils/atoms";
import { NextUIProvider } from "@nextui-org/system";
import { useAtom } from "jotai";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [black, setBlack] = useAtom(darkModeAtom);

  useEffect(() => {
    if (black) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [black]);

  return (
    <NextUIProvider>
      <Nav />

      <main className="container mx-auto max-w-screen-xl overflow-hidden px-3">
        {children}
      </main>

      <Footer />

      <BgParticle />
    </NextUIProvider>
  );
}
