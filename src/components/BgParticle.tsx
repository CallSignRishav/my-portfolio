"use client";

import { darkModeAtom } from "@/utils/atoms";
import { ISourceOptions } from "@tsparticles/engine";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";

const BgParticle = () => {
  const [init, setInit] = useState(false);
  const [black, setBlack] = useAtom(darkModeAtom);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      // await loadAll(engine);
      // await loadFull(engine);
      // await loadSlim(engine);
      // await loadSnowPreset(engine);
      await loadStarsPreset(engine);
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
          value: black ? "#00dbff" : "#000000",
        },

        number: {
          density: {
            enable: true,
          },

          value: 250,
        },

        shape: {
          type: "circle",
        },

        size: {
          value: { min: 1, max: 2 },
        },
      },

      preset: "stars",

      detectRetina: true,
    }),
    [black],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="absolute left-0 top-0 -z-50"
      />
    );
  }

  return <></>;
};

export default BgParticle;
