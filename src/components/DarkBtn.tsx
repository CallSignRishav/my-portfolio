"use client";

import { darkModeAtom } from "@/utils/atoms";
import { Button } from "@nextui-org/button";
import { useAtom } from "jotai";
import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";

const DarkBtn = () => {
  const [black, setBlack] = useAtom(darkModeAtom);

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
