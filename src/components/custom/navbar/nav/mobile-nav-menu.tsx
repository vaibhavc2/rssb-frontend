import { menuItems } from "@/constants/nav";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import { useMemo } from "react";

const MobileNavMenu = () => {
  const displayMenuItems = useMemo(
    () =>
      menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item.title}-${index}`}>
          {item.href !== undefined ? (
            <Link
              className={`w-full text-2xl sm:text-3xl ${
                item.title === "Register" ? "text-yellow-500" : "foreground"
              }`}
              href={item.href}
            >
              {item.title}
            </Link>
          ) : (
            <div
              className={`w-full text-2xl sm:text-3xl ${
                item.title === "Log Out" ? "text-red-600" : "foreground"
              }`}
            >
              {item.title}
            </div>
          )}
        </NavbarMenuItem>
      )),
    [menuItems]
  );
  return <NavbarMenu className="pt-16">{displayMenuItems}</NavbarMenu>;
};
export default MobileNavMenu;
