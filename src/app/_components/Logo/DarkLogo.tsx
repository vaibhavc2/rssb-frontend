import Image from "next/image";
import Img from "/public/logo-dark.png";

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
      className={className}
      priority
    />
  );
};

export default Logo;
