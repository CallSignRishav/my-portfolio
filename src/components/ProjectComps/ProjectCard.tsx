import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectsType {
  id: string;
  name: string;
  description: string;
  github: string;
}

const ProjectCard = ({ info }: { info: ProjectsType }) => {
  return (
    <>
      <div className="h-full w-full p-4 lg:p-8">
        <Card className="h-full w-full bg-white/5 p-3 hover:scale-105 dark:shadow-md dark:shadow-blue-500">
          <CardBody className="flex flex-col justify-between gap-1 font-noto_sans">
            <div className="text-2xl font-bold">{info.name}</div>

            <div className="text-sm">{info.description}</div>

            <div className="flex justify-start pt-5">
              <Link href={`${info.github}`}>
                <Button
                  color="secondary"
                  size="lg"
                  endContent={<SquareArrowOutUpRight />}>
                  GitHub
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ProjectCard;
