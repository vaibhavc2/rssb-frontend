import { Poppins } from "@/fonts";
import { Button as NextButton } from "@nextui-org/button";
import Image from "next/image";

// type Props = {};

const OAuth = () => {
  return (
    <div
      className={`flex min-w-[20rem] justify-evenly gap-y-6 ${Poppins.className}`}
    >
      <NextButton className="w-36">
        <Image src={"/google.svg"} alt="Google" width={20} height={20} />
        <span className="text-base">Google</span>
      </NextButton>
      <NextButton className="w-36">
        <Image
          src={"/apple.svg"}
          alt="Apple"
          width={18}
          height={18}
          className="dark:invert"
        />
        <span className="text-base">Apple</span>
      </NextButton>
    </div>
  );
};
export default OAuth;
