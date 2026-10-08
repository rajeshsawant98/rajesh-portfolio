import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rajesh Sawant | Software Engineer — AI Systems & Full Stack",
  description:
    "Software engineer building production data pipelines, AI agents, and full-stack applications. MS Software Engineering, ASU. Published at IEEE COMPSAC 2025.",
  keywords: [
    "Software Engineer",
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
  openGraph: {
    title: "Rajesh Sawant | Software Engineer — AI Systems & Full Stack",
    description:
      "Software engineer building production data pipelines, AI agents, and full-stack applications.",
    url: siteUrl,
    siteName: "Rajesh Sawant Portfolio",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/hero.png`,
        width: 1200,
        height: 630,
        alt: "Rajesh Sawant portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajesh Sawant | Software Engineer — AI Systems & Full Stack",
    description:
      "Software engineer building production data pipelines, AI agents, and full-stack applications.",
    images: [`${siteUrl}/images/hero.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
