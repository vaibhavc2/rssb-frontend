import { Poppins } from "@/fonts";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = {} & ComponentProps<"h1">;
const Heading = ({ children, className, ...restProps }: Props) => {
  return (
    <h1
      className={cn(
        `my-10 text-center text-3xl font-bold ${Poppins.className}`,
        className
      )}
      {...restProps}
    >
      {children}
    </h1>
  );
};
export default Heading;
