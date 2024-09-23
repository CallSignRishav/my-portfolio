import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-5 text-center font-noto_sans">
      <h1 className="py-5 text-8xl font-bold">Oops!</h1>

      <h2 className="text-xl font-bold">404 - Page Not Found</h2>

      <Button
        size="lg"
        color="secondary"
        variant="bordered">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
