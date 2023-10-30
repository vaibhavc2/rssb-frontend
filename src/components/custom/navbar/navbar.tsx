"use client";

import { useScrollTop } from "@/hooks";
import {
  NavbarContent,
  NavbarMenuToggle,
  Navbar as NavbarUI,
} from "@nextui-org/react";
import { useState } from "react";
import MobileNavMenu from "./nav/mobile-nav-menu";
import NavButtons from "./nav/nav-buttons";
import NavDashLinks from "./nav/nav-dash-links";
import NavLogo from "./nav/nav-logo";

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

      <MobileNavMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </NavbarUI>
  );
}
