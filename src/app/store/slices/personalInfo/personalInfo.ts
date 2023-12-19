import { StateCreator } from "zustand";

type PersonalInfo = {
    fullname: string;
    email: string;
    phoneNumber: string;
    address: string;
};

export interface PersonalInfoSlice {
    personalInfo: PersonalInfo;
    setPersonalInfo(info: Partial<PersonalInfo>): void;
    getExamplePersonalInfo(): void;
    clearInfoPersonal: () => void;
}

const initialState = {
    fullname: "",
    email: "",
    phoneNumber: "",
    address: "",
};

export const createPersonalInfo: StateCreator<PersonalInfoSlice> = (set) => ({
    personalInfo: initialState,
    setPersonalInfo(info) {
        set((state) => ({
            personalInfo: { ...state.personalInfo, ...info },
        }));
    },
    getExamplePersonalInfo() {
        set((state) => ({
            personalInfo: {
                fullname: "Juan Herrera",
                email: "juan13@gmail.com",
                phoneNumber: "5567190293",
                address: "Ciudad de México, México",
            },
        }));
    },
    clearInfoPersonal() {
        set((state) => ({ personalInfo: initialState }));
    },
});
