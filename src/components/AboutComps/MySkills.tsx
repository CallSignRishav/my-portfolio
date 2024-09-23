import { sklillsInfo } from "@/utils/information";
import { Card, CardBody } from "@nextui-org/card";
import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";

const MySkills = () => {
  return (
    <>
      <div className="grid grid-cols-2 place-items-center gap-10 lg:grid-cols-4">
        {sklillsInfo.map((skill) => (
          <Tooltip
            key={skill.id}
            content={skill.skillName}
            closeDelay={200}
            offset={5}
            classNames={{
              base: [
                // arrow color
                "before:bg-neutral-400 dark:before:bg-white",
              ],
              content: [
                "text-black font-noto_sans bg-gradient-to-br from-white to-neutral-400",
              ],
            }}>
            <Card className="w-36 bg-white/5 p-5 hover:scale-105 lg:w-52 dark:shadow-md dark:shadow-blue-500">
              <CardBody>
                <div className="relative flex h-[80px] w-full items-center justify-center">
                  <Image
                    src={skill.skillImg}
                    alt={skill.skillName}
                    fill
                    priority
                    className="h-auto w-auto object-contain antialiased"
                  />
                </div>
              </CardBody>
            </Card>
          </Tooltip>
        ))}
      </div>
    </>
  );
};

export default MySkills;
