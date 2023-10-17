import { NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { DarkLogo, Logo } from "../..";

type Props = { isMenuOpen: boolean };

const NavLogo = ({ isMenuOpen }: Props) => {
  const { theme } = useTheme();

  return (
    <>
      {!isMenuOpen ? (
        <NavbarContent className="flex pr-3" justify="center">
          <NavbarItem>
            <Link href="/">
              <NavbarBrand>
                <div className="w-[3rem] sm:w-[4rem]">
                  {theme === "light" ? <Logo /> : <DarkLogo />}
                </div>
                <h1 className="ml-3 hidden pb-1 text-4xl font-bold sm:block">
                  RSSB.
                </h1>
              </NavbarBrand>
            </Link>
          </NavbarItem>
        </NavbarContent>
      ) : null}
    </>
  );
};
export default NavLogo;
