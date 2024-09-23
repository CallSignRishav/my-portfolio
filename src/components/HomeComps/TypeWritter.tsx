"use client";

import { Typewriter } from "react-simple-typewriter";

const TypeWritter = () => {
  return (
    <>
      <div className="font-bruno_ace text-xl font-bold tracking-wider text-blue-600 lg:text-3xl">
        <Typewriter
          words={[
            "Frontend Developer",
            "Backend Developer",
            "Fullstack Developer",
          ]}
          loop
          cursor
          typeSpeed={120}
          delaySpeed={2000}
          cursorBlinking={true}
        />
      </div>
    </>
  );
};

export default TypeWritter;
