import { AppleIcon, GoogleIcon } from "@/components/icons";
import { Poppins } from "@/fonts";
import { Button as NextButton } from "@nextui-org/button";

// type Props = {};

const OAuth = () => {
  return (
    <div
      className={`flex min-w-[20rem] justify-evenly gap-y-6 ${Poppins.className}`}
    >
      <NextButton className="w-36">
        <GoogleIcon className="scale-[65%]" />
        <span className="text-base">Google</span>
      </NextButton>
      <NextButton className="w-36">
        <AppleIcon className="scale-[60%] invert-0 dark:invert" />
        <span className="text-base">Apple</span>
      </NextButton>
    </div>
  );
};
export default OAuth;
