import Image from "next/image";
import Img from "/public/logo.png";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Image src={Img} alt="RSSB" width={60} height={60} priority />
    </div>
  );
};

export default Logo;
