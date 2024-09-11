"use client";

import {
  Navbar,
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
          maxWidth="2xl"
          isBordered
          isBlurred>
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden"
            />
          </NavbarContent>

          <NavbarContent
            justify="center"
            className="hidden items-center justify-center gap-14 lg:flex">
            <NavbarItem>
              <Link
                href="/"
                className="flex items-center gap-1 text-xl hover:text-blue-600">
                <Home />
                Home
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link
                href="/about"
                className="flex items-center gap-1 text-xl hover:text-blue-600">
                <UserRound /> About
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link
                href="/project"
                className="flex items-center gap-1 text-xl hover:text-blue-600">
                <MonitorCheck /> Project
              </Link>
            </NavbarItem>

            <NavbarItem>
              <DarkBtn />
            </NavbarItem>
          </NavbarContent>

          <NavbarContent justify="end">
            <div className="flex lg:hidden">
              <DarkBtn />
            </div>
          </NavbarContent>

          <NavbarMenu className="space-y-5">
            <NavbarMenuItem>
              <Link
                href={"/"}
                className="flex items-center gap-1 text-xl hover:text-blue-600">
                <Home />
                Home
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem>
              <Link
                href={"/about"}
                className="flex items-center gap-1 text-xl hover:text-blue-600">
                <UserRound />
                About
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem>
              <Link
                href={"/project"}
                className="flex items-center gap-1 text-xl hover:text-blue-600">
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
