import { create } from "zustand";

interface UIProps {
    isDashboard: boolean;
    enableDashboard: (enable: boolean) => void;
}

export const useUI = create<UIProps>((set, get) => {
    return {
        isDashboard: false,
        enableDashboard(enable = false) {
            set({ isDashboard: enable })
        },
    }
})