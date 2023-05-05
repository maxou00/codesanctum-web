import RootLayout from "./root-layout"

export const metadata = {
  title: {
    default: "CodeSanctum - A Safe Sanctuary for Learning to Code",
    template: "CodeSanctum - %s"
  },
  description: "Join CodeSanctum and embark on a journey to learn to code with the help of our expert mentors and gamified approach. No prior experience required.",
  robots: {
    index: true, 
    follow: true
  },
  keywords: ["CodeSanctum", "learn to code", "coding", "gamification", "mentoring"],
  openGraph: {
    type: "website",
    url: "https://www.codesanctum.org/",
    title: "CodeSanctum - A Safe Sanctuary for Learning to Code",
    description: "Join CodeSanctum and embark on a journey to learn to code with the help of our expert mentors and gamified approach. No prior experience required.",
    images: [
      {
        url: "https://www.codesanctum.com/images/hero/sanctuary.png",
        width: 1200,
        height: 630,
        alt: "CodeSanctum landing page image"
      }
    ]
  }
}


export default function BaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  )
}
