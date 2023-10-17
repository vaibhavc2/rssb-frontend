"use client";

import { useDarkClass } from "@/hooks";
import {
  Button,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggler } from "..";
import MobileNavMenu from "./nav/MobileNavMenu";
import NavDashLinks from "./nav/NavDashLinks";
import NavLogo from "./nav/NavLogo";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkLogo, setDarkLogo] = useState(false);

  // const { isDark } = useBoundStore((state) => state);
  // useDarkMedia();
  // const [loading, setLoading] = useState(true);

  const { theme } = useTheme();
  const isDarkClass = useDarkClass();

  useEffect(() => {
    setDarkLogo(isDarkClass);
    // setLoading(false);
  }, [isDarkClass, theme]);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="h-20 sm:h-24"
    >
      <NavLogo darkLogo={darkLogo} />

      <NavDashLinks />

      <NavbarContent justify="end" className="hidden justify-around lg:flex">
        <NavbarItem className="mx-5">
          <ThemeToggler />
        </NavbarItem>
        <NavbarItem>
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
            className="ml-3 p-6 pb-7 text-xl"
          >
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <MobileNavMenu />
    </Navbar>
  );
}
