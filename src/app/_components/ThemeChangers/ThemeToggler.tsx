"use client";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useBoundStore } from "@/store";
import { useTheme } from "next-themes";
import { useCallback } from "react";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const { darkClassHTML } = useBoundStore((state) => state);

  const changeTheme = useCallback(() => {
    if (theme === "system") {
      if (darkClassHTML) setTheme("light");
      else setTheme("dark");
    } else {
      if (theme === "dark") setTheme("light");
      else setTheme("dark");
    }
  }, [theme, setTheme, darkClassHTML]);

  return (
    <Button variant="outline" size="icon" onClick={changeTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
