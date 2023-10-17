import { Button, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { ThemeToggler } from "../..";

const NavButtons = () => {
  return (
    <NavbarContent justify="end" className="hidden justify-around lg:flex">
      <NavbarItem className="mx-5">
        <ThemeToggler />
      </NavbarItem>
      <NavbarItem>
        <Link href="/login" className="text-xl font-semibold">
          Login
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Button
          as={Link}
          color="warning"
          href="/register"
          variant="flat"
          className="ml-3 p-6 pb-7 text-xl"
        >
          Register
        </Button>
      </NavbarItem>
    </NavbarContent>
  );
};
export default NavButtons;
