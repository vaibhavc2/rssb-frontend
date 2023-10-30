import { navItems } from "@/constants/nav";
import { NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { useMemo } from "react";

const NavDashLinks = () => {
  const displayNavItems = useMemo(
    () =>
      navItems.map((item, index) => (
        <NavbarItem key={`${item.title}-${index}`}>
          <Link
            color="foreground"
            href={item.href}
            className="text-xl transition-all hover:border-b-1 hover:border-b-white hover:pb-1"
          >
            {item.title}
          </Link>
        </NavbarItem>
      )),
    [navItems]
  );

  return (
    <NavbarContent className="hidden lg:flex lg:space-x-5" justify="end">
      {displayNavItems}
    </NavbarContent>
  );
};
export default NavDashLinks;
