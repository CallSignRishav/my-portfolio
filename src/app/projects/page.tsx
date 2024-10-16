import ProjectCard from "@/components/ProjectComps/ProjectCard";

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
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default page;
