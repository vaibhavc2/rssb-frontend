import { HTMLDarkClass } from "@/types";
import { StateCreator } from "zustand";

export const htmlDarkClassSlice: StateCreator<HTMLDarkClass> = (set) => ({
  darkClassHTML: false,
  setDarkClassHTML: (arg: boolean) => {
    set(() => ({
      darkClassHTML: arg,
    }));
  },
  toggleDarkClassHTML: () => {
    set((state) => ({
      darkClassHTML: !state.darkClassHTML,
    }));
  },
});
