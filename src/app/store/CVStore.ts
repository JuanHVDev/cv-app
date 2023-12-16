import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import {
    ExperiencesInfoSlice,
    createExperiencesInfo,
} from "./slices/experienciesInfo/experienciesInfo";
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
    PersonalInfoSlice &
        EducationInfoSlice &
        ClearInformacion &
        ExperiencesInfoSlice
>()(
    devtools(
        persist(
            (...a) => ({
                ...createPersonalInfo(...a),
                ...createEducationInfo(...a),
                ...createExperiencesInfo(...a),
                clear() {},
            }),
            { name: "CV" }
        )
    )
);
