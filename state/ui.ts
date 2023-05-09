import { create } from "zustand";

interface UIProps {
    hasAppLayout: boolean;
    enableAppLayout: (enable: boolean) => void;
}

export const useUI = create<UIProps>((set, get) => {
    return {
        hasAppLayout: Boolean(globalThis.window && globalThis.window.location.pathname.startsWith("/board")),
        enableAppLayout(enable = false) {
            set({ hasAppLayout: enable })
        },
    }
})