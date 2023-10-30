import Image from "next/image";
import Img from "/public/logo.png";

const Logo = () => {
  return (
    <Image
      src={Img}
      alt="RSSB"
      width={60}
      height={60}
      className="block dark:hidden"
    />
  );
};

export default Logo;
