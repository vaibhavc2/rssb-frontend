"use client";

import { menuItems } from "@/constants";
import { useDarkClass } from "@/hooks";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo, ThemeToggler } from "..";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkLogo, setDarkLogo] = useState(false);

  // const { isDark } = useBoundStore((state) => state);
  // useDarkMedia();
  const [loading, setLoading] = useState(true);

  const { theme } = useTheme();
  const isDarkClass = useDarkClass();

  useEffect(() => {
    setDarkLogo(isDarkClass);
    setLoading(false);
  }, [isDarkClass, theme]);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="h-20 sm:h-24"
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden pr-3 sm:flex" justify="center">
        <NavbarItem>
          <Link href="/">
            <NavbarBrand>
              {/* <Logo className={isDark || darkLogo ? "" : "hidden"} />
              <Logo
                className={isDark || darkLogo ? "hidden invert" : "invert"}
              /> */}
              {/* {darkLogo ? <Logo /> : <Logo className="invert" />} */}
              <div className="w-[4rem]">
                {!loading ? (
                  darkLogo ? (
                    <Logo />
                  ) : (
                    <Logo className="invert" />
                  )
                ) : null}
              </div>
              <h1 className="ml-3 pb-1 text-4xl font-bold">RSSB.</h1>
            </NavbarBrand>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex lg:space-x-5" justify="end">
        <NavbarItem>
          <Link
            color="foreground"
            href="/about"
            className="text-xl transition-all hover:border-b-1 hover:border-b-white hover:pb-1"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/contact"
            className="text-xl transition-all hover:border-b-1 hover:border-b-white hover:pb-1"
          >
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/help"
            className="text-xl transition-all hover:border-b-1 hover:border-b-white hover:pb-1"
          >
            Help / Feedback
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="flex justify-around">
        <NavbarItem className="mx-5 hidden lg:flex">
          <ThemeToggler />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/login" className="text-xl font-semibold">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            href="/register"
            variant="flat"
            className="text-lg sm:ml-3 sm:p-6 sm:pb-7 sm:text-xl"
          >
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full text-xl ${
                index === 2
                  ? "text-yellow-500"
                  : index === menuItems.length - 1
                  ? "text-red-600"
                  : "foreground"
              }`}
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
