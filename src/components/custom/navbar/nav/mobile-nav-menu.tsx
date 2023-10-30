import { menuItems } from "@/constants/nav";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useMemo } from "react";

const MobileNavMenu = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const closeMenu = async () => {
    setIsMenuOpen(false);
  };

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
              onClick={closeMenu}
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

  return (
    <>
      {isMenuOpen && (
        <NavbarMenu className="pt-16">{displayMenuItems}</NavbarMenu>
      )}
    </>
  );
};
export default MobileNavMenu;
