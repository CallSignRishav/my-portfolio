"use client";

import { Typewriter } from "react-simple-typewriter";

const TypeWritter = () => {
  return (
    <>
      <div className="text-4xl font-bold text-blue-600 lg:text-5xl">
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
