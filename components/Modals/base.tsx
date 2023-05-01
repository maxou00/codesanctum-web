"use client";
import ReactModal from "react-modal";
import { useTheme } from "next-themes";
import { X } from "phosphor-react";

export default function Modal({
  title,
  ...props
}: ReactModal.Props & { title?: string }) {
  const { theme } = useTheme();

  return (
    <ReactModal
      {...props}
      style={{
        overlay: {
          background: "#29292990",
          zIndex: "10000",
        },
        content: {
          background: "#0b132b",
          color: "#f9f9f9",
          borderRadius: "8px",
          width: "640px",
          top: "50%",
          left: "50%",
          border: "none",
          boxShadow: "0px 5px 10px rgba(4, 10, 34, 0.2)",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          minHeight: "128px",
        },
      }}
    >
      <div className="flex w-full flex-row items-start justify-end gap-2 p-1">
        {title && <h1 className="grow text-xl font-bold">{title}</h1>}
        {props.onRequestClose && (
          <button
            onClick={(ev) => props.onRequestClose(ev)}
            className="rounded border border-white/10 p-2"
          >
            <X fill={theme === "dark" ? "#fff" : "#292929"} />
          </button>
        )}
      </div>
      <div className="w-full grow">{props.children}</div>
    </ReactModal>
  );
}
