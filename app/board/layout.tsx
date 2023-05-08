/* eslint-disable @next/next/no-img-element */
"use client";
import Protected from "@/components/Protected";
import { useUI } from "@/state/ui";
import { PropsWithChildren, useEffect } from "react";
import SidebarContent from "./sidebar-content";

export default function PageLayout(props: PropsWithChildren<{}>) {
  const uiProps = useUI();

  useEffect(() => {
    uiProps.enableAppLayout(true);
    return () => {
      uiProps.enableAppLayout(false);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <Protected>
        <div className="z-2 fixed left-0 top-0 h-screen w-[280px]">
          <SidebarContent />
        </div>
        <div className="w-full pl-[280px]">
          <div className="w-full p-8">{props.children}</div>
        </div>
      </Protected>
    </div>
  );
}
