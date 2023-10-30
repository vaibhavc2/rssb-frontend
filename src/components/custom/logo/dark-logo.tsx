import Image from "next/image";
import Img from "/public/logo-dark.png";

const DarkLogo = () => {
  return (
    <Image
      src={Img}
      alt="RSSB"
      width={60}
      height={60}
      className="hidden dark:block"
    />
  );
};

export default DarkLogo;
