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
import { StateCreator } from "zustand";

export interface LoadExampleSlice {
    [x: string]: any;
    clear: () => void;
    loadExample: () => void;
}

const createLoadExample: StateCreator<LoadExampleSlice> = (set, get) => ({
    clear: () => {
        get().clearInfoExperience();
        get().clearInfoPersonal();
        get().clearInfoEducation();
    },
    loadExample: () => {
        get().getExampleExperiences();
        get().getExamplePersonalInfo();
        get().getExampleEducation();
    },
});

export const useCVInfo = create<
    PersonalInfoSlice &
        EducationInfoSlice &
        ExperiencesInfoSlice &
        LoadExampleSlice
>()(
    devtools((...a) => ({
        ...createPersonalInfo(...a),
        ...createEducationInfo(...a),
        ...createExperiencesInfo(...a),
        ...createLoadExample(...a),
    }))
);
