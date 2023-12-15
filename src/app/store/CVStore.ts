import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
    PersonalInfoSlice,
    createPersonalInfo,
} from "./slices/personalInfo/personalInfo";

export const usePersonalInfo = create<PersonalInfoSlice>()((...a) => ({
    ...createPersonalInfo(...a),
}));
