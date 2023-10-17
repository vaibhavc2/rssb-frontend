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
      className="py-1"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="invisible flex pr-3 sm:visible"
        justify="center"
      >
        <NavbarItem className="pt-1">
          <Link href="/">
            <NavbarBrand>
              {/* <Logo className={isDark || darkLogo ? "" : "hidden"} />
              <Logo
                className={isDark || darkLogo ? "hidden invert" : "invert"}
              /> */}
              {/* {darkLogo ? <Logo /> : <Logo className="invert" />} */}
              <div className="w-[2.8rem]">
                {!loading ? (
                  darkLogo ? (
                    <Logo />
                  ) : (
                    <Logo className="invert" />
                  )
                ) : null}
              </div>
            </NavbarBrand>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/">
            <h1 className="pb-1 text-2xl font-bold">RSSB.</h1>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
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
        {/* <NavbarItem className="flex sm:hidden">
          <ThemeToggler />
        </NavbarItem> */}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <ThemeToggler />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
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
