import { Button } from "@nextui-org/button";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();

  if (pathName !== "/" && pathName !== "/about" && pathName !== "/project") {
    return <></>;
  }

  return (
    <>
      <div className="bg-black/5 py-5 backdrop-blur-sm dark:bg-blue-950/30 dark:backdrop-blur-none">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 text-center font-noto_sans lg:flex-row">
          <div className="">@2024. All rights reserved</div>

          <div className="">
            Design and development by
            <span className="text-blue-500"> Rishav Mondal</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Button
              color="primary"
              variant="bordered"
              isIconOnly
              size="sm"
              radius="full">
              <Link
                target="_blank"
                href="https://www.facebook.com/RishavMondal5/">
                <Facebook size={18} />
              </Link>
            </Button>

            <Button
              color="primary"
              variant="bordered"
              isIconOnly
              size="sm"
              radius="full">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/rishavmondal5/">
                <Linkedin size={18} />
              </Link>
            </Button>

            <Button
              color="primary"
              variant="bordered"
              isIconOnly
              size="sm"
              radius="full">
              <Link
                href="https://www.instagram.com/rishav_mondal05/"
                target="_blank">
                <Instagram size={18} />
              </Link>
            </Button>

            <Button
              color="primary"
              variant="bordered"
              isIconOnly
              size="sm"
              radius="full">
              <Link
                target="_blank"
                href="https://github.com/CallSignRishav">
                <Github size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
