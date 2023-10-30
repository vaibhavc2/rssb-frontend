import { IsLoggedIn } from "@/types";
import { create } from "zustand";
import { loginSlice } from "./features";

// type Store = HTMLDarkClass & IsLoggedIn & IsThemeToggled;
type Store = IsLoggedIn;

const useBoundStore = create<Store>((...a) => ({
  ...loginSlice(...a),
}));

export default useBoundStore;
