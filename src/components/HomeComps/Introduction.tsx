import Image from "next/image";

const Introduction = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-14 py-20 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image
            src="/ai-character.png"
            alt="ai-character"
            width={400}
            height={400}
            priority
            className="h-auto w-auto antialiased"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-10 font-noto_sans">
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
      </div>
    </>
  );
};

export default Introduction;
