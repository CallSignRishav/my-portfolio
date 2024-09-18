"use client";

import { darkModeAtom } from "@/utils/atoms";
import { Button } from "@nextui-org/button";
import { useAtom } from "jotai";
import { useEffect } from "react";
import LightIcon from "./LightIcon";
import DarkIcon from "./DarkIcon";

const DarkBtn = () => {
  const [black, setBlack] = useAtom(darkModeAtom);

  useEffect(() => {
    if (black) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [black]);

  return (
    <>
      <Button
        color={black ? "primary" : "default"}
        onPress={() => setBlack(!black)}
        isIconOnly
        variant="light">
        {black ? <DarkIcon /> : <LightIcon />}
      </Button>
    </>
  );
};

export default DarkBtn;
