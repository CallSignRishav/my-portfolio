"use client";

import { darkModeAtom } from "@/utils/atoms";
import { Button } from "@nextui-org/button";
import { useAtom } from "jotai";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

const DarkBtn = () => {
  const [dark, setDark] = useAtom(darkModeAtom);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <Button
        onPress={() => setDark(!dark)}
        isIconOnly
        variant="light">
        {dark ? <Sun /> : <Moon />}
      </Button>
    </>
  );
};

export default DarkBtn;
