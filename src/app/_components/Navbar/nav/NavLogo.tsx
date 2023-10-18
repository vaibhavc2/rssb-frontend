import { NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { ImgLogo } from "../..";
import TypedLogo from "../../Logo/TypedLogo";

type Props = { isMenuOpen: boolean };

const NavLogo = ({ isMenuOpen }: Props) => {
  return (
    <>
      {!isMenuOpen ? (
        <NavbarContent className="flex pr-3" justify="center">
          <NavbarItem>
            <Link href="/">
              <NavbarBrand>
                <div className="w-[3rem] sm:w-[4rem]">
                  {/* {theme === "light" ? <Logo /> : <Logo className="invert" />} */}

                  {/* <Logo className={`${theme === "light" ? "" : "hidden"}`} />
                  <DarkLogo className={`${theme === "dark" ? "" : "hidden"}`} /> */}
                  <ImgLogo />
                </div>
                <TypedLogo
                  short
                  className="ml-3 hidden pb-1 text-4xl font-bold sm:block"
                />
              </NavbarBrand>
            </Link>
          </NavbarItem>
        </NavbarContent>
      ) : null}
    </>
  );
};
export default NavLogo;
