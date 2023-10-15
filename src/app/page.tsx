import { Button as ShadButton } from "@/components/ui/button";
import { Button as NextButton } from "@nextui-org/button";
import Link from "next/link";
import { ThemeChangerButton } from "./_components/ThemeChangerButton";

type Props = {};

const page = ({}: Props) => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex justify-between">HOME</div>
      <div className="flex justify-around">
        <Link href={"/login"}>Go to Login</Link>
        <Link href={"/signup"}>Go to SignUp</Link>
        <Link href={"/contact"}>Go to Contact</Link>
        <Link href={"/about"}>Go to About</Link>
      </div>
      <div className="flex max-w-full justify-around">
        <ShadButton>Shadcn/UI Button</ShadButton>
      </div>
      <div className="flex max-w-full justify-around">
        <NextButton>NextUI Button</NextButton>
      </div>
      <div className="flex max-w-full justify-around">
        <ThemeChangerButton />
      </div>
    </div>
  );
};

export default page;
