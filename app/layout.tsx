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
  title: "Rajesh Sawant | Portfolio",
  description: "A portfolio showcasing my skills and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
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
