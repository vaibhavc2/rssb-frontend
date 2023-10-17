import { DarkMedia, HTMLDarkClass } from "@/types";
import { create } from "zustand";
import { darkMediaSlice, htmlDarkClassSlice } from "./features";

export const useBoundStore = create<HTMLDarkClass & DarkMedia>((...a) => ({
  ...htmlDarkClassSlice(...a),
  ...darkMediaSlice(...a),
}));
