"use client";

import { useScrollTop } from "@/hooks";
import {
  NavbarContent,
  NavbarMenuToggle,
  Navbar as NavbarUI,
} from "@nextui-org/react";
import { useState } from "react";
import MobileNavMenu from "./nav/MobileNavMenu";
import NavButtons from "./nav/NavButtons";
import NavDashLinks from "./nav/NavDashLinks";
import NavLogo from "./nav/NavLogo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollTop();

  return (
    <NavbarUI
      isBordered={scrolled ? true : false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="z-50 h-20 sm:h-24"
    >
      <NavLogo isMenuOpen={isMenuOpen} />

      <NavDashLinks />

      <NavButtons isMenuOpen={isMenuOpen} />

      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <MobileNavMenu />
    </NavbarUI>
  );
}
