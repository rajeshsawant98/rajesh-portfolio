import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajesh Sawant | AI Systems Engineer",
  description:
    "AI Systems Engineer specializing in knowledge graph architecture, LLM pipelines, and production data infrastructure. MS Software Engineering, ASU. Published at IEEE COMPSAC 2025.",
  keywords: [
    "AI Systems Engineer",
    "Knowledge Graph",
    "LLM Pipeline",
    "ETL",
    "Full-Stack Engineer",
    "SPARQL",
    "Next.js",
    "React",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResponsiveNav />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
