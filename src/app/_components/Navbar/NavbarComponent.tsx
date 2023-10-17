"use client";

import { menuItems } from "@/constants";
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
import { useEffect, useState } from "react";
import { Logo, ThemeToggler } from "..";

const isBrowser = () => typeof window !== "undefined";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { isDark } = useBoundStore((state) => state);
  const [isDark, setIsDark] = useState(false);
  // useDarkMedia();
  // const [darkLogo, setDarkLogo] = useState(false);
  // const [loading, setLoading] = useState(true);
  // const { theme } = useTheme();
  // const isDark = useDarkClass();

  // useEffect(() => {
  //   setDarkLogo(isDark);
  //   // setLoading(false);
  // }, [isDark, theme]);

  // const useDark = ;
  if (isBrowser()) {
    useEffect(() => {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }, [window.matchMedia("(prefers-color-scheme: dark)").matches]);
  }

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
              <Logo className={isDark ? "" : "hidden"} />
              <Logo className={isDark ? "hidden invert" : "invert"} />
              {/* {isDark ? <Logo /> : <Logo className="invert" />} */}
              {/* {darkLogo ? <DarkLogo /> : <LightLogo />} */}
              {/* {!loading ? (
                darkLogo ? (
                  <DarkLogo />
                ) : (
                  <LightLogo />
                )
              ) : (
                <div className="w-[2.8rem]"></div>
              )} */}
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
