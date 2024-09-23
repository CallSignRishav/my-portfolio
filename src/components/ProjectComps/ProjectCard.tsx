import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <>
      <div className="p-4 lg:p-8">
        <Card className="bg-white/5 p-3 hover:scale-105 dark:shadow-md dark:shadow-blue-500">
          <CardBody className="space-y-3 font-noto_sans">
            <div className="text-2xl font-bold">Random User Generator</div>

            <div className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              officiis quas suscipit corrupti aspernatur expedita!
            </div>

            <div className="flex justify-start">
              <Button
                color="secondary"
                size="lg"
                endContent={<SquareArrowOutUpRight />}>
                <Link href="/project">GitHub</Link>
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ProjectCard;
