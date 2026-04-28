import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const SITE_URL = "https://jaisachdeva.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jai Sachdeva — CS Student & Builder",
    template: "%s · Jai Sachdeva",
  },
  description:
    "Computer Science student at Dalhousie University. I build at the intersection of AI, HCI, and design — and occasionally win hackathons doing it.",
  keywords: [
    "Jai Sachdeva",
    "Dalhousie",
    "Computer Science",
    "AI",
    "HCI",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Jai Sachdeva" }],
  creator: "Jai Sachdeva",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    title: "Jai Sachdeva — CS Student & Builder",
    description:
      "I build at the intersection of AI, HCI, and design. Portfolio, projects, and writing.",
    siteName: "Jai Sachdeva",
    images: [
      {
        url: "/assets/header.png",
        width: 1200,
        height: 630,
        alt: "Jai Sachdeva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jai Sachdeva — CS Student & Builder",
    description:
      "I build at the intersection of AI, HCI, and design.",
    images: ["/assets/header.png"],
  },
  icons: {
    icon: "/assets/logo.jpg",
    shortcut: "/assets/logo.jpg",
    apple: "/assets/logo.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#070710",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
