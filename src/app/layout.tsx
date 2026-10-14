import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S. Abhiram | Futuristic Developer Portfolio & AI Systems",
  description: "Personal portfolio of S. Abhiram — Student developer exploring AI agents, LangGraph pipelines, backend systems, database design, and practical software engineering.",
  keywords: [
    "S. Abhiram",
    "Abhiram",
    "Developer Portfolio",
    "AI Agent Engineer",
    "LangGraph",
    "FastAPI",
    "MySQL",
    "Vellore Institute of Technology",
    "VIT",
    "Auriseg Intern",
    "CrisisOS",
    "CourierX"
  ],
  authors: [{ name: "S. Abhiram", url: "https://github.com/abhi-45-dev" }],
  creator: "S. Abhiram",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/abhi-45-dev",
    title: "S. Abhiram | Futuristic Developer Portfolio & AI Systems",
    description: "Building intelligent systems. Turning ideas into software. AI agent development, backend engineering, and database systems.",
    siteName: "S. Abhiram Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "S. Abhiram | Developer Portfolio",
    description: "Student developer exploring AI agents, backend systems, databases, and practical software engineering.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#05070c] text-[#e6edf3] font-sans antialiased selection:bg-[#00f59b] selection:text-[#05070c]">
        {children}
      </body>
    </html>
  );
}
