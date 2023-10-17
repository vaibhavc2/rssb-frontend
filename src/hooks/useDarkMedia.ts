import { useBoundStore } from "@/store";
import { useEffect } from "react";

// const isBrowser = () => typeof window !== "undefined";

export const useDarkMedia = () => {
  // let browserEnv: boolean;
  // if (isBrowser()) {
  //   browserEnv =
  // }
  const { setIsDark } = useBoundStore((state) => state);
  useEffect(() => {
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, [window.matchMedia("(prefers-color-scheme: dark)").matches]);
};
