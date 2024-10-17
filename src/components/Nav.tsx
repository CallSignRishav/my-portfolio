"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Home, ListCheck, MonitorCheck } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import DarkBtn from "./DarkBtn";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { push } = useRouter();

  const pathName = usePathname();

  if (pathName !== "/" && pathName !== "/skills" && pathName !== "/projects") {
    return <></>;
  }

  return (
    <>
      <Navbar
        maxWidth="xl"
        isBlurred
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent justify="start">
          <NavbarMenuToggle className="lg:hidden" />

          <NavbarBrand className="hidden lg:flex">
            <Link
              href={"/"}
              className="font-allura text-5xl font-bold">
              Rm.
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="flex justify-center lg:hidden"
          justify="center">
          <NavbarBrand>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                push("/");
              }}
              className="font-allura text-4xl font-bold">
              Rm.
            </button>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          justify="center"
          className="hidden items-center justify-center gap-14 lg:flex">
          <NavbarItem>
            <Link
              href="/"
              className="flex items-center gap-2 font-noto_sans text-xl antialiased hover:text-blue-600">
              <Home />
              Home
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="/skills"
              className="flex items-center gap-2 font-noto_sans text-xl hover:text-blue-600">
              <ListCheck /> Skills
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="/projects"
              className="flex items-center gap-2 font-noto_sans text-xl hover:text-blue-600">
              <MonitorCheck /> Projects
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <div className="">
            <DarkBtn />
          </div>
        </NavbarContent>

        <NavbarMenu className="space-y-5">
          <NavbarMenuItem>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                push("/");
              }}
              className="flex items-center gap-3 font-noto_sans text-xl hover:text-blue-600">
              <Home />
              Home
            </button>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                push("/skills");
              }}
              className="flex items-center gap-3 font-noto_sans text-xl hover:text-blue-600">
              <ListCheck />
              Skills
            </button>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                push("/projects");
              }}
              className="flex items-center gap-3 font-noto_sans text-xl hover:text-blue-600">
              <MonitorCheck />
              Project
            </button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Nav;
