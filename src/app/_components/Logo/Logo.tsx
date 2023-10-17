// import { cn } from "@/lib/utils";
import Image from "next/image";
import Img from "/public/logo.png";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <Image
      src={Img}
      alt="RSSB"
      width={60}
      height={60}
      // className={cn("", className)}
      className={className}
    />
  );
};

export default Logo;
