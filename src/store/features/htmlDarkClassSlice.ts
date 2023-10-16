import { HTMLDarkClass } from "@/types";
import { StateCreator } from "zustand";

export const htmlDarkClassSlice: StateCreator<HTMLDarkClass> = (set) => ({
  darkClassHTML: false,
  setDarkClassHTML: (arg?: boolean) => {
    if (arg === null) {
      set((state) => ({
        darkClassHTML: !state.darkClassHTML,
      }));
    } else {
      set(() => ({
        darkClassHTML: arg,
      }));
    }
  },
});
