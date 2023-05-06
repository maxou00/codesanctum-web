/* eslint-disable @next/next/next-script-for-ga */
"use client";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import { Providers } from "./providers";
import ReactModal from "react-modal";
import { Toaster } from "react-hot-toast";

import "../styles/index.css";
import RootContent from "./content";

ReactModal.setAppElement("body");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VK3LE19SRX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WVFJLKJ');`,
          }}
        />
      </head>
      <body className="dark:bg-black">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WVFJLKJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Providers>
          <RootContent>{children}</RootContent>
          <Toaster position="top-center" />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
