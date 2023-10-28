import { ThemeToggler } from "@/components/custom/theme";
import { Button, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";

type Props = { isMenuOpen: boolean };

const NavButtons = ({ isMenuOpen }: Props) => {
  return (
    <NavbarContent
      justify={`${isMenuOpen ? "start" : "end"}`}
      className={`flex justify-between ${isMenuOpen ? "" : "ml-[-3rem]"}`}
    >
      <NavbarItem className={`${isMenuOpen ? "" : "mr-5 hidden lg:flex"}`}>
        <ThemeToggler />
      </NavbarItem>

      <NavbarItem className="hidden lg:flex">
        <Link
          href="/login"
          //TODO: change acc. to theme
          className="text-xl font-semibold transition-all hover:text-gray-300"
        >
          Login
        </Link>
      </NavbarItem>
      <NavbarItem className="hidden lg:flex">
        <Button
          as={Link}
          color="warning"
          href="/register"
          variant="flat"
          //TODO: change acc. to theme
          className="ml-3 p-6 pb-7 text-xl transition-all hover:bg-yellow-900"
        >
          Register
        </Button>
      </NavbarItem>
    </NavbarContent>
  );
};
export default NavButtons;
