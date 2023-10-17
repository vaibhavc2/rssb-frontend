"use client";

import { useDarkClass } from "@/hooks";
import { Navbar, NavbarContent, NavbarMenuToggle } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MobileNavMenu from "./nav/MobileNavMenu";
import NavButtons from "./nav/NavButtons";
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
      <NavLogo darkLogo={darkLogo} isMenuOpen={isMenuOpen} />

      <NavDashLinks />

      <NavButtons isMenuOpen={isMenuOpen} />

      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <MobileNavMenu />
    </Navbar>
  );
}
