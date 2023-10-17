import { NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { Logo } from "../..";

const NavLogo = ({ darkLogo }: { darkLogo: boolean }) => {
  return (
    <NavbarContent className="flex pr-3" justify="center">
      <NavbarItem>
        <Link href="/">
          <NavbarBrand>
            <div className="w-[3rem] sm:w-[4rem]">
              {/* <Logo className={isDark || darkLogo ? "" : "hidden"} />
              <Logo
                className={isDark || darkLogo ? "hidden invert" : "invert"}
              /> */}
              {darkLogo ? <Logo /> : <Logo className="invert" />}
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
  );
};
export default NavLogo;
