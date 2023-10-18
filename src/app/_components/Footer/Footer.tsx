import TypedLogo from "../Logo/TypedLogo";
import LeftFooter from "./comp/LeftFooter";

const Footer = () => {
  return (
    <div className="z-10 flex w-full items-center justify-around bg-background p-6">
      <TypedLogo short={false} className="w-1/2" />

      <LeftFooter />
    </div>
  );
};
export default Footer;
