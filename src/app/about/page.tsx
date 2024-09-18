import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-10 py-20 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-5 p-5 text-center lg:items-start lg:justify-start">
          <h1 className="pb-10 font-noto_sans text-4xl font-bold">About Me</h1>

          <p className="font-noto_sans text-xl">
            Hi devs, I am <span className="text-blue-500">Rishav Mondal</span>{" "}
            form <span className="text-blue-500">Kolkata, India</span>.
          </p>
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
    </>
  );
};

export default page;
