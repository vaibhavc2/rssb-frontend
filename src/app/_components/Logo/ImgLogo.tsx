"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { DarkLogo, Logo } from "../";

const ImgLogo = () => {
  const { theme, setTheme } = useTheme();
  const [logo, setLogo] = useState("hidden");
  const [darkLogo, setDarkLogo] = useState("hidden");

  useEffect(
    useCallback(() => {
      if (theme === "dark") {
        setLogo("hidden");
        setDarkLogo("");
      } else if (theme === "light") {
        setLogo("");
        setDarkLogo("hidden");
      }
    }, [theme, setTheme]),
    [theme, setTheme]
  );

  return (
    <>
      <Logo className={logo} />
      <DarkLogo className={darkLogo} />
      {/* {theme === "light" ? <Logo /> : null} */}
      {/* {theme === "dark" ? <DarkLogo /> : null} */}
      {/* <Logo className={`${theme === "dark" ? "hidden" : ""}`} /> */}
    </>
  );
};

export default ImgLogo;
