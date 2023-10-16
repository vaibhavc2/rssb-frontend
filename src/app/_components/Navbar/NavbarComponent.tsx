"use client";

import { menuItems } from "@/constants";
import { useDarkClass } from "@/hooks";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkLogo, LightLogo, ThemeChangerButton } from "..";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkLogo, setDarkLogo] = useState(false);
  const { theme } = useTheme();
  const isDark = useDarkClass();

  useEffect(() => {
    setDarkLogo(isDark);
  }, [isDark, theme]);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          {darkLogo ? <DarkLogo /> : <LightLogo />}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarBrand>
          {darkLogo ? <DarkLogo /> : <LightLogo />}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
        <NavbarItem className="flex sm:hidden">
          <ThemeChangerButton />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <ThemeChangerButton />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="/register" variant="flat">
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
