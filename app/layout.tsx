import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Genuitech — Building AI Agents That Work Like Real Employees",
    template: "%s | Genuitech",
  },
  description:
    "Genuitech designs and builds custom AI-powered applications that automate your team's most time-consuming work. AI agents for SMBs, in weeks not months.",
  keywords: [
    "AI agents",
    "AI automation",
    "business automation",
    "small business AI",
    "AI consulting",
    "workflow automation",
    "custom AI applications",
    "SMB automation",
  ],
  authors: [{ name: "Genuitech" }],
  creator: "Genuitech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://genuitech.ai",
    siteName: "Genuitech",
    title: "Genuitech — Building AI Agents That Work Like Real Employees",
    description:
      "Custom AI applications that eliminate your team's biggest bottlenecks — in weeks, not months.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genuitech — AI Agents That Work Like Real Employees",
    description:
      "Custom AI applications that eliminate your team's biggest bottlenecks — in weeks, not months.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-[#07091a] text-slate-100 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
