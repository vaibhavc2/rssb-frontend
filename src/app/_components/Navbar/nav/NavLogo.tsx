import { NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { Logo } from "../..";

type Props = { darkLogo: boolean; isMenuOpen: boolean };

const NavLogo = ({ darkLogo, isMenuOpen }: Props) => {
  return (
    <>
      {!isMenuOpen ? (
        <NavbarContent className="flex pr-3" justify="center">
          <NavbarItem>
            <Link href="/">
              <NavbarBrand>
                <div className="w-[3rem] sm:w-[4rem]">
                  {darkLogo ? (
                    <Logo className="invert-[20%]" />
                  ) : (
                    <Logo className="invert-[90%]" />
                  )}

                  {/* {!loading ? (
                darkLogo ? (
                  <Logo />
                ) : (
                  <Logo className="invert" />
                )
              ) : null} */}
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
