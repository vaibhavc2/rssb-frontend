"use client";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

export function ThemeToggler({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [HTML, setHTML] = useState<HTMLElement | null>();

  useEffect(() => {
    setHTML(document.documentElement);
  }, []);

  const changeTheme = useCallback(() => {
    if (theme === "system") {
      if (HTML?.classList.contains("dark")) setTheme("light");
      else setTheme("dark");
    } else {
      if (theme === "dark") setTheme("light");
      else setTheme("dark");
    }
  }, [theme, setTheme, HTML?.classList]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={changeTheme}
      className={cn("scale-125", className)}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
