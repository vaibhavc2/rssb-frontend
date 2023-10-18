import { Button as ShadButton } from "@/components/ui/button";
import { Button as NextButton } from "@nextui-org/button";

type Props = {};

const page = ({}: Props) => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex justify-between">HOME</div>
      <div className="flex max-w-full justify-around">
        <ShadButton>Shadcn/UI Button</ShadButton>
      </div>
      <div className="flex max-w-full justify-around">
        <NextButton>NextUI Button</NextButton>
      </div>
    </div>
  );
};

export default page;
