import Nav from "@/components/Nav";
import { NextUIProvider } from "@nextui-org/system";
import { Provider } from "jotai";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Provider>
        <Nav />

        <main className="container mx-auto max-w-screen-xl overflow-hidden px-3">
          {children}
        </main>
      </Provider>
    </NextUIProvider>
  );
}
