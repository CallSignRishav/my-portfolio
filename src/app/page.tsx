import Image from "next/image";
import developer from "../public/developer.svg";
import userResearch from "../public/user-research.svg";
import TypeWritter from "@/components/HomeComps/TypeWritter";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-10 py-20 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-5 text-center lg:items-start lg:p-5">
          <h1 className="font-noto_sans pb-10 text-4xl font-bold">Hi There!</h1>

          <p className="font-noto_sans text-4xl lg:text-5xl">
            I'm{" "}
            <span className="font-jacques tracking-widest text-blue-500">
              Rishav Mondal
            </span>
          </p>

          <TypeWritter />
        </div>

        <div className="flex items-center justify-center p-5">
          <Image
            src={userResearch}
            alt="User Research"
            priority
            className="w-[80%] antialiased"
          />
        </div>
      </div>
    </>
  );
};

export default page;
