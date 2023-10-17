import { menuItems } from "@/constants";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import { useCallback } from "react";
import { ThemeChangerButton } from "../../ThemeChangers/ThemeChangerButton";

const MobileNavMenu = () => {
  const displayMenuItems = useCallback(
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
              {item.title === "Change Theme" ? (
                <ThemeChangerButton />
              ) : (
                item.title
              )}
            </div>
          )}
        </NavbarMenuItem>
      )),
    [menuItems]
  );
  return <NavbarMenu className="pt-16">{displayMenuItems()}</NavbarMenu>;
};
export default MobileNavMenu;
