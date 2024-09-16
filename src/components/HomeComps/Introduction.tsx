const Introduction = () => {
  return (
    <>
      <div className="grid grid-cols-1 py-20 lg:grid-cols-2">
        <div className=""></div>

        <div className="flex flex-col items-center justify-center gap-10 font-noto_sans">
          <h1 className="text-center text-4xl font-bold lg:text-start">
            LET ME <span className="text-blue-500">INTRODUCE</span> MYSELF
          </h1>

          <div className="flex flex-col items-start justify-center gap-6 text-xl">
            <div className="">
              My enthusiasm for computers started early, but it was
              <span className="text-blue-500"> web development</span> that
              transformed my{" "}
              <span className="text-blue-500"> curiosity into a passion</span>.
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
