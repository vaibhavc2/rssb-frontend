import { TypedLogo } from "@/components/custom/logo";
import LeftFooter from "./comp/left-footer";

const Footer = () => {
  return (
    <div className="z-10 flex w-full items-center justify-around bg-background p-6">
      <TypedLogo short={false} className="w-1/2" />

      <LeftFooter />
    </div>
  );
};
export default Footer;
