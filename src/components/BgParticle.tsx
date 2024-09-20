"use client";

import { darkModeAtom } from "@/utils/atoms";
import { ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSnowPreset } from "@tsparticles/preset-snow";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";

const BgParticle = () => {
  const [init, setInit] = useState(false);
  const [black, setBlack] = useAtom(darkModeAtom);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // await loadSlim(engine);
      await loadSnowPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: black ? "#000000" : "#ffffff",
        },
      },

      particles: {
        color: {
          value: black ? "#ffffff" : "#000000",
        },

        move: {
          enable: true,
          random: true,
          speed: 1,
          straight: false,
        },

        number: {
          density: {
            enable: true,
          },

          value: 150,
        },

        opacity: {
          value: 0.5,
        },

        shape: {
          type: "circle",
        },

        size: {
          value: { min: 1, max: 3 },
        },
      },

      detectRetina: true,
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
