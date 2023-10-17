import { DarkMedia } from "@/types";
import { StateCreator } from "zustand";

export const darkMediaSlice: StateCreator<DarkMedia> = (set) => ({
  isDark: false,
  setIsDark: (arg: boolean) => {
    set(() => ({
      isDark: arg,
    }));
  },
});
