import { create } from "zustand";

interface UIProps {
    hasAppLayout: boolean;
    enableAppLayout: (enable: boolean) => void;
}

export const useUI = create<UIProps>((set, get) => {
    return {
        hasAppLayout: globalThis.window && globalThis.window.location.pathname.startsWith("/app"),
        enableAppLayout(enable = false) {
            set({ hasAppLayout: enable })
        },
    }
})