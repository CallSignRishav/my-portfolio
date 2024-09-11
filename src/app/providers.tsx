import Nav from "@/components/Nav";
import { NextUIProvider } from "@nextui-org/system";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Nav />

      <main className="container mx-auto max-w-screen-xl overflow-hidden px-3">
        {children}
      </main>
    </NextUIProvider>
  );
}
