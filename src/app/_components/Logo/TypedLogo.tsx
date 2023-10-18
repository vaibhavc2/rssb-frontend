import { fontSerif } from "@/fonts";
import { cn } from "@/lib/utils";

type Props = {
  short: boolean;
  className?: string;
};

const TypedLogo = ({ short, className }: Props) => {
  return (
    <div
      className={`${cn(
        "block text-center font-semibold",
        className,
        fontSerif.className
      )}`}
    >
      {short ? "RSSB." : "RSSB Sewa."}
    </div>
  );
};

export default TypedLogo;
