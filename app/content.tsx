import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useUI } from "@/state/ui";
import { PropsWithChildren } from "react";

export default function RootContent(props: PropsWithChildren<{}>) {
    const uiprops = useUI();
  
    return (
      <div className="w-full">
        {false && !uiprops.hasAppLayout && <Header />}
        {props.children}
        {false && !uiprops.hasAppLayout && <Footer />}
      </div>
    );
  }