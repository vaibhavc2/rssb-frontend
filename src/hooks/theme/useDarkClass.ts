import { useBoundStore } from "@/store";
import { useTheme } from "next-themes";
import { useCallback, useEffect } from "react";

export const useDarkClass = () => {
  const { theme } = useTheme();
  const { darkClassHTML, setDarkClassHTML } = useBoundStore((state) => state);

  useEffect(
    useCallback(() => {
      setDarkClassHTML(
        document.getElementsByTagName("html")[0].classList.contains("dark")
      );
    }, [darkClassHTML, setDarkClassHTML, theme]),
    [theme === "system"]
  );

  const changeLogo = useCallback(() => {
    if (theme === "system") {
      if (darkClassHTML) return true;
      else return false;
    } else {
      if (theme === "dark") return true;
      else return false;
    }
  }, [theme, darkClassHTML, setDarkClassHTML]);

  return changeLogo();
};
