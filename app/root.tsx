/* eslint-disable @next/next/next-script-for-ga */
"use client";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

import "../styles/index.css";
import RootContent from "./content";
import ReactModal from "react-modal";

ReactModal.setAppElement("body");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <RootContent>{children}</RootContent>
      <Toaster position="top-center" />
      <ScrollToTop />
    </Providers>
  );
}
