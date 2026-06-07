import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/shared/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HyprZoom | We Edit Videos That Sell",
  description: "Built for brands that want attention. Focused on performance-driven editing.",
  icons: {
    icon: "/logo/hyprzoon.jpeg",
    shortcut: "/logo/hyprzoon.jpeg",
    apple: "/logo/hyprzoon.jpeg",
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
      className={cn(geistSans.variable, geistMono.variable, "bg-background text-foreground")}
    >
      <body className="min-h-screen selection:bg-accent font-sans outline-none overflow-x-hidden">
        <div className="grain-overlay" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}