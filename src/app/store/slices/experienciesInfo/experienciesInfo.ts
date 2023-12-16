import { StateCreator } from "zustand";
import { v4 as uuidv4 } from "uuid";
type ExperiencesInfo = {
    id?: string;
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    location: string;
    description?: string;
};

export interface ExperiencesInfoSlice {
    experience: ExperiencesInfo;
    experienceInfo: ExperiencesInfo[];
    setExperience(info: Partial<ExperiencesInfo>): void;
    addExperience(info: ExperiencesInfo): void;
    setExperienceInfo(educationInfo: ExperiencesInfo[]): void;
    createForm: boolean;
    setCreateForm(state: boolean): void;
}

const initialState = {
    id: uuidv4(),
    company: "Google",
    position: "Programmer Junnior",
    startDate: "Agosto-2020",
    endDate: "present",
    location: "Ciudad de México, Mx",
    description: "",
};

export const createExperiencesInfo: StateCreator<ExperiencesInfoSlice> = (
    set
) => ({
    experience: initialState,
    experienceInfo: [],
    addExperience(info) {
        if (!info.id) info.id = uuidv4();
        set((state) => ({
            experienceInfo: [...state.experienceInfo, info],
        }));
    },
    setExperience(info) {
        set((state) => ({ experience: { ...state.experience, ...info } }));
    },
    setExperienceInfo(experience) {
        set({ experienceInfo: experience });
    },
    createForm: false,
    setCreateForm(state) {
        set({ createForm: state });
    },
});
