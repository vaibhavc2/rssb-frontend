import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = {} & ComponentProps<"main">;

const MainContainer = ({ children, className, ...restProps }: Props) => {
  return (
    <main
      className={cn(
        `flex max-w-full flex-col items-center justify-self-center`,
        className
      )}
      {...restProps}
    >
      {children}
    </main>
  );
};
export default MainContainer;
