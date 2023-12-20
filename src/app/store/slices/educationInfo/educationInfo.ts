import { StateCreator } from "zustand";
import { v4 as uuidv4 } from "uuid";
type EducationInfo = {
    id?: string | undefined;
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
    getExampleEducation(): void;
    clearInfoEducation(): void;
}

const initialState = {
    id: uuidv4(),
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
};

export const createEducationInfo: StateCreator<EducationInfoSlice> = (
    set,
    get
) => ({
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
    getExampleEducation() {
        set((state) => ({
            educationInfo: [
                {
                    id: uuidv4(),
                    school: "UNAM",
                    degree: "Lic. en Medicina",
                    startDate: "2018",
                    endDate: "2022",
                    location: "Ciudad de México",
                },
            ],
        }));
    },
    clearInfoEducation() {
        set((state) => ({ educationInfo: [] }));
    },
});
