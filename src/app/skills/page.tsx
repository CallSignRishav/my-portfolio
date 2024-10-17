import MySkills from "@/components/AboutComps/MySkills";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Skills | Rishav Mondal",
  description: "Skills page of Rishav Mondal's portfolio",
};

const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-5 py-10 lg:grid-cols-2 lg:gap-10 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-5 p-5 text-center font-noto_sans lg:items-start lg:justify-start lg:text-start">
          <h1 className="text-2xl lg:text-4xl">
            LET ME <span className="text-blue-500">INTRODUCE</span> MYSELF
          </h1>

          <div className="flex flex-col items-start justify-center gap-6 text-base lg:text-xl">
            <div className="">
              My enthusiasm for computers started early, but it was
              <span className="text-blue-500"> web development</span> that
              transformed my curiosity into a
              <span className="text-blue-500"> passion</span>.
            </div>

            <div className="">
              Learning <span className="text-blue-500"> JavaScript </span> gave
              me the tools to explore the web more deeply, and my thirst for
              <span className="text-blue-500"> knowledge</span> hasn't slowed
              down since.
            </div>

            <div className="">
              I've made continuous progress through
              <span className="text-blue-500"> self-learning</span>. I pride
              myself on delivering{" "}
              <span className="text-blue-500"> high-quality work</span>, driven
              by thoughtful <span className="text-blue-500">analysis</span> and
              a commitment to <span className="text-blue-500"> precision</span>.
            </div>

            <div className="">
              Each version slightly varies but retains the essence of your story
              while polishing it up for a more professional tone.
            </div>
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
