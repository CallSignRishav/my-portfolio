import Introduction from "@/components/HomeComps/Introduction";
import TypeWritter from "@/components/HomeComps/TypeWritter";
import { Button } from "@nextui-org/button";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Rishav Mondal",
  description: "About page of Rishav Mondal's portfolio",
};

const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-10 py-10 lg:grid-cols-2 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-5 text-center lg:items-start lg:p-5 lg:text-start">
          <h1 className="pb-10 font-noto_sans text-4xl font-bold">Hi There!</h1>

          <p className="font-noto_sans text-3xl lg:text-4xl">
            I'm &nbsp;
            <span className="font-allura text-4xl font-bold tracking-wider text-blue-500 lg:text-5xl xl:text-6xl">
              Rishav Mondal
            </span>
          </p>

          <TypeWritter />
        </div>

        <div className="relative flex h-[500px] w-auto items-center justify-center p-5">
          <Image
            src="/user-research.svg"
            alt="User Research"
            fill
            priority
            className="h-auto w-auto object-contain antialiased"
          />
        </div>
      </div>

      <div className="">
        <Introduction />
      </div>

      <div className="flex flex-col items-center justify-center gap-8 py-10 font-noto_sans lg:py-20">
        <div className="">
          Feel free to <span className="text-blue-500">connect</span> with me
        </div>

        <div className="flex items-center justify-center gap-5">
          <Button
            color="primary"
            isIconOnly
            radius="full">
            <Link
              target="_blank"
              href="https://www.facebook.com/RishavMondal5/">
              <Facebook />
            </Link>
          </Button>

          <Button
            color="primary"
            isIconOnly
            radius="full">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/rishavmondal5/">
              <Linkedin />
            </Link>
          </Button>

          <Button
            color="primary"
            isIconOnly
            radius="full">
            <Link
              target="_blank"
              href="https://www.instagram.com/rishav_mondal05/">
              <Instagram />
            </Link>
          </Button>

          <Button
            color="primary"
            isIconOnly
            radius="full">
            <Link
              target="_blank"
              href="https://github.com/CallSignRishav">
              <Github />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
