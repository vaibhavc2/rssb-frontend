import { IsLoggedIn } from "@/types";
import { StateCreator } from "zustand";

export const loginSlice: StateCreator<IsLoggedIn> = (set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (arg: boolean) => {
    set(() => ({
      isLoggedIn: arg,
    }));
  },
});
