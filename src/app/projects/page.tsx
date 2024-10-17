import ProjectCard from "@/components/ProjectComps/ProjectCard";
import { projetsArray } from "@/utils/projectsDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Rishav Mondal",
  description: "Projects page of Rishav Mondal's portfolio",
};

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 py-10 lg:py-20">
        <div className="space-y-5 text-center font-noto_sans">
          <div className="text-4xl font-bold">
            <span className="text-blue-500">Projects </span> I've Built
          </div>

          <div className="text-base lg:text-xl">
            Browse through some of the projects I've developed
          </div>
        </div>

        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
          {projetsArray.map((item) => {
            return (
              <ProjectCard
                key={item.id}
                info={item}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
