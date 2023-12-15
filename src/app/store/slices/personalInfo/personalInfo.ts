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
    clearInfo(): void;
}

const initialState = {
    fullname: "Juan HV",
    email: "juan@hotmail.com",
    phoneNumber: "5555555555",
    address: "Coatzacoalcos, Ver",
};

export const createPersonalInfo: StateCreator<PersonalInfoSlice> = (set) => ({
    personalInfo: initialState,
    setPersonalInfo(info) {
        set((state) => ({
            personalInfo: { ...state.personalInfo, ...info },
        }));
    },
    clearInfo() {
        set(() => ({
            personalInfo: {
                fullname: "",
                email: "",
                phoneNumber: "",
                address: "",
            },
        }));
    },
});
