import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { RecruitProvider } from "@/context/RecruitContext";

const chakraPetch = Chakra_Petch({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#E52521",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: "DEVUP — SPIDER-MAN: YOUR FIRST WEB | Introduction to GitHub & Tech Domains",
  description:
    "You are a new Spider-Man. Today, DevUp introduces you to the essential developer tools, GitHub version control, and 7 tech career domains.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='46' fill='%23E52521'/%3E%3Ccircle cx='50' cy='50' r='36' fill='none' stroke='%23FFFFFF' stroke-width='4'/%3E%3Cpath d='M50 14 L50 86 M14 50 L86 50 M24 24 L76 76 M24 76 L76 24' stroke='%23FFFFFF' stroke-width='3'/%3E%3Ccircle cx='50' cy='50' r='16' fill='%230F172A' stroke='%23FFFFFF' stroke-width='3'/%3E%3C/svg%3E",
  },
  openGraph: {
    title: "DEVUP — SPIDER-MAN: YOUR FIRST WEB",
    description:
      "A 1-day introductory developer mission for first-years. Enter the web, master Git & GitHub, and discover your tech domain.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${chakraPetch.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <RecruitProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </RecruitProvider>
      </body>
    </html>
  );
}
