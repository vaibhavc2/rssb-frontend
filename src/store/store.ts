import { DarkMedia, HTMLDarkClass, IsLoggedIn } from "@/types";
import { create } from "zustand";
import { darkMediaSlice, htmlDarkClassSlice, loginSlice } from "./features";

type Store = DarkMedia & HTMLDarkClass & IsLoggedIn;

const useBoundStore = create<Store>((...a) => ({
  ...htmlDarkClassSlice(...a),
  ...darkMediaSlice(...a),
  ...loginSlice(...a),
}));

const useStore = useBoundStore;

export default useStore;
