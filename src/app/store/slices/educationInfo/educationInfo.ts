import { StateCreator } from "zustand";
import { v4 as uuidv4 } from "uuid";
type EducationInfo = {
    id?: string;
    school: string;
    degree: string;
    startDate: string;
    endDate?: string;
    location: string;
};

export interface EducationInfoSlice {
    education: EducationInfo;
    educationInfo: EducationInfo[];
    setEducation(info: Partial<EducationInfo>): void;
    addEducation(info: EducationInfo): void;
    setEducationInfo(educationInfo: EducationInfo[]): void;
    createForm: boolean;
    setCreateForm(state: boolean): void;
}

const initialState = {
    id: uuidv4(),
    school: "Escuela Primaria Reforma Educativo Liberal",
    degree: "Primaria",
    startDate: "Agosto-2007",
    endDate: "Agosto-2013",
    location: "Cuernavaca, Morelos",
};

export const createEducationInfo: StateCreator<EducationInfoSlice> = (set) => ({
    education: initialState,
    educationInfo: [],
    setEducation(info) {
        set((state) => ({
            education: {
                ...state.education,
                ...info,
            },
        }));
    },
    addEducation(info) {
        if (!info.id) info.id = uuidv4();
        set((state) => ({
            educationInfo: [...state.educationInfo, info],
        }));
    },
    setEducationInfo(educations) {
        set({ educationInfo: educations });
    },
    createForm: false,
    setCreateForm(state) {
        set({ createForm: state });
    },
});
