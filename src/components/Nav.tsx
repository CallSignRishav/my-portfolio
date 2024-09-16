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
import { Home, MonitorCheck, UserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import DarkBtn from "./DarkBtn";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="">
        <Navbar
          maxWidth="xl"
          isBordered
          isBlurred
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
              <Link
                href={"/"}
                className="font-allura text-4xl font-bold">
                Rm.
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent
            justify="center"
            className="hidden items-center justify-center gap-14 lg:flex">
            <NavbarItem>
              <Link
                href="/"
                className="font-noto_sans flex items-center gap-2 text-xl antialiased hover:text-blue-600">
                <Home />
                Home
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link
                href="/about"
                className="font-noto_sans flex items-center gap-2 text-xl hover:text-blue-600">
                <UserRound /> About
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link
                href="/project"
                className="font-noto_sans flex items-center gap-2 text-xl hover:text-blue-600">
                <MonitorCheck /> Project
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
              <Link
                href={"/"}
                className="font-noto_sans flex items-center gap-3 text-xl hover:text-blue-600">
                <Home />
                Home
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem>
              <Link
                href={"/about"}
                className="font-noto_sans flex items-center gap-3 text-xl hover:text-blue-600">
                <UserRound />
                About
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem>
              <Link
                href={"/project"}
                className="font-noto_sans flex items-center gap-3 text-xl hover:text-blue-600">
                <MonitorCheck />
                Project
              </Link>
            </NavbarMenuItem>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  );
};

export default Nav;
