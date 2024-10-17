import Image from "next/image";

const Introduction = () => {
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-14 py-10 lg:grid-cols-2 lg:py-20">
        <div className="flex h-full w-full items-end justify-center">
          <div className="flex w-1/2 items-center justify-center">
            <Image
              src="/dp-pic.jpg"
              alt="Rishav Mondal"
              width={500}
              height={500}
              className="rounded-full border-2 border-blue-500 p-1 antialiased"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 font-noto_sans">
          <h1 className="pb-10 font-noto_sans text-4xl font-bold">About Me</h1>

          <div className="space-y-3 font-noto_sans text-xl">
            <p className="">
              Hi everyone, I am{" "}
              <span className="text-blue-500">Rishav Mondal</span> from{" "}
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
      </div>
    </>
  );
};

export default Introduction;
