"use client";

import { darkModeAtom } from "@/utils/atoms";
import { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";

const BgParticle = () => {
  const [init, setInit] = useState(false);
  const [black, setBlack] = useAtom(darkModeAtom);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      key: "snow",
      name: "Snow",

      background: {
        color: {
          value: black ? "#fffff" : " #000000",
        },
      },

      particles: {
        shape: {
          type: "square", // starting from v2, this require the square shape script
        },

        color: {
          value: black ? "#000000" : "#ffffff",
        },
      },
      preset: "snow",
    }),
    [black],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        // particlesLoaded={particlesLoaded}
        options={options}
        className="absolute left-0 top-0 -z-50"
      />
    );
  }

  return <></>;
};

export default BgParticle;
