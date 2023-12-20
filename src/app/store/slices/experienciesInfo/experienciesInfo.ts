import { StateCreator } from "zustand";
import { v4 as uuidv4 } from "uuid";
type ExperiencesInfo = {
    id?: string | undefined;
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
    setExperienceInfo(experienceInfo: ExperiencesInfo[]): void;
    createForm: boolean;
    setCreateForm(state: boolean): void;
    getExampleExperiences(): void;
    clearInfoExperience(): void;
}

const initialState = {
    id: uuidv4(),
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
};

export const createExperiencesInfo: StateCreator<ExperiencesInfoSlice> = (
    set,
    get
) => ({
    experience: initialState,
    experienceInfo: [],

    setExperience(info) {
        set((state) => ({ experience: { ...state.experience, ...info } }));
    },
    addExperience(info) {
        if (!info.id) info.id = uuidv4();

        if (
            get().experienceInfo.filter(
                (experience) => experience.id === info.id
            )
        )
            console.log("Está");
        set((state) => ({ experienceInfo: [...state.experienceInfo, info] }));
    },
    setExperienceInfo(experience) {
        set({ experienceInfo: experience });
    },
    createForm: false,
    setCreateForm(state) {
        set({ createForm: state });
    },
    getExampleExperiences() {
        set((state) => ({
            experienceInfo: [
                {
                    id: uuidv4(),
                    company: "Google",
                    position: "Pasante",
                    startDate: "Julio/2018",
                    endDate: "Julio/2019",
                    location: "Ciudad de México",
                    description:
                        "Diseñaba y realizaba prototipos de las interfaces",
                },
            ],
        }));
    },
    clearInfoExperience() {
        set((state) => ({ experienceInfo: [] }));
    },
});
