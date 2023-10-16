import { HTMLDarkClass } from "@/types";
import { create } from "zustand";
import { htmlDarkClassSlice } from "./features";

export const useBoundStore = create<HTMLDarkClass>((...a) => ({
  ...htmlDarkClassSlice(...a),
}));
