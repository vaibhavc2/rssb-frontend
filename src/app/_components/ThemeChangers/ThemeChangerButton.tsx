"use client";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
// import { useCallback, useEffect, useState } from "react";

export function ThemeChangerButton() {
  // const { theme, setTheme } = useTheme();
  // const [darkClassHTML, setDarkClassHTML] = useState(false);

  // useEffect(() => {
  //   setDarkClassHTML(
  //     document.getElementsByTagName("html")[0].classList.contains("dark")
  //   );
  // }, [theme === "system"]);

  // const changeTheme = useCallback(() => {
  //   if (theme === "system") {
  //     if (darkClassHTML) setTheme("light");
  //     else setTheme("dark");
  //   } else {
  //     if (theme === "dark") setTheme("light");
  //     else setTheme("dark");
  //   }
  // }, [theme, darkClassHTML, setDarkClassHTML]);

  return (
    <Button variant="outline" size="icon" onClick={() => {}}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
