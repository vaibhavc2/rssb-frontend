import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  sans: ["Inter", ...defaultTheme.fontFamily.sans],
  theme: {
    // extend: {
    //   backgroundImage: {
    //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //     "gradient-conic":
    //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //   },
    // },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
