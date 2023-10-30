import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import { ThemeProvider } from "@/components/providers";
import { Inter } from "@/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSSB Sewa",
  description: "Web Application to manage the Sewadars Entry in RSSB Sewa.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-light.ico",
        href: "/favicon-light.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.ico",
        href: "/favicon-dark.ico",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          Inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <div className="flex min-h-screen flex-col justify-between">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
