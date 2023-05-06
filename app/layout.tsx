/* eslint-disable @next/next/next-script-for-ga */
import RootLayout from "./root";

export const metadata = {
  title: {
    default: "CodeSanctum - A Safe Sanctuary for Learning to Code",
    template: "CodeSanctum - %s",
  },
  description:
    "Join CodeSanctum and embark on a journey to learn to code with the help of our expert mentors and gamified approach. No prior experience required.",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "CodeSanctum",
    "learn to code",
    "coding",
    "gamification",
    "mentoring",
  ],
  openGraph: {
    type: "website",
    url: "https://www.codesanctum.org/",
    title: "CodeSanctum - A Safe Sanctuary for Learning to Code",
    description:
      "Join CodeSanctum and embark on a journey to learn to code with the help of our expert mentors and gamified approach. No prior experience required.",
    images: [
      {
        url: "https://www.codesanctum.com/images/hero/sanctuary.png",
        width: 1200,
        height: 630,
        alt: "CodeSanctum landing page image",
      },
    ],
  },
};

export default function BaseLayout({
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
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
