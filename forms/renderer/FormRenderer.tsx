import { useContext } from "react";
import { createContext } from "react";
import { PageRenderer } from "./PageRenderer";

const RenderingModeContext = createContext({ mode: "live" });

export function useRenderingMode() {
  return useContext(RenderingModeContext);
}

export function FormRenderer(props: { preview?: boolean }) {
  return (
    <RenderingModeContext.Provider
      value={{ mode: props.preview ? "preview" : "live" }}
    >
      <div className="w-full dark:text-white">
        <PageRenderer />
      </div>
    </RenderingModeContext.Provider>
  );
}
