import MySkills from "@/components/AboutComps/MySkills";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-5 py-10 lg:grid-cols-2 lg:gap-10 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-5 p-5 text-center lg:items-start lg:justify-start lg:text-start">
          <h1 className="pb-10 font-noto_sans text-4xl font-bold">About Me</h1>

          <div className="space-y-3 font-noto_sans text-xl">
            <p className="">
              Hi everyone, I am{" "}
              <span className="text-blue-500">Rishav Mondal</span> form{" "}
              <span className="text-blue-500">Kolkata, India</span>.
            </p>

            <p>
              I'm a<span className="text-blue-500"> full-stack developer </span>{" "}
              and my journey has been shaped by a love of technology and
              problem-solving.
            </p>

            <p>
              Outside of work, I love playing{" "}
              <span className="text-blue-500">PC games</span>, discovering new
              places through <span className="text-blue-500">travel</span>, and
              reading <span className="text-blue-500">books</span>.
            </p>

            <p>
              These activities help me stay curious and bring a unique
              perspective to my development projects.
            </p>
          </div>
        </div>

        <div className="relative flex h-[500px] w-auto items-center justify-center p-5">
          <Image
            src="/developer2.svg"
            alt="User Research"
            fill
            priority
            className="h-auto w-auto object-contain antialiased"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 py-10 lg:py-20">
        <div className="font-noto_sans text-2xl font-bold lg:text-4xl">
          My Development Stack
        </div>

        <MySkills />
      </div>
    </>
  );
};

export default page;
