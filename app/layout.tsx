import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
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
  title: "Preyum Kumar | Full Stack AI Engineer",
  description: "Portfolio website showcasing my projects, skills, and experience as a full stack developer.",
  keywords: ["portfolio", "developer", "full stack", "AI", "AI Engineer", "ML", "ML Engineer", "projects", "TypeScript", "Next.js"],
  authors: [{ name: "Preyum Kumar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Preyum Kumar | Full Stack AI Engineer",
    description: "Portfolio website showcasing my projects, skills, and experience.",
    siteName: "Preyum's Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col overflow-x-hidden" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
