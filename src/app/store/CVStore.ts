import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
    EducationInfoSlice,
    createEducationInfo,
} from "./slices/educationInfo/educationInfo";
import {
    PersonalInfoSlice,
    createPersonalInfo,
} from "./slices/personalInfo/personalInfo";

interface ClearInformacion {
    clear(): void;
}

export const useCVInfo = create<
    PersonalInfoSlice & EducationInfoSlice & ClearInformacion
>()(
    devtools((...a) => ({
        ...createPersonalInfo(...a),
        ...createEducationInfo(...a),
        clear() {},
    }))
);
