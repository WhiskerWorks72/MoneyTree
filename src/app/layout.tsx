import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Providers from "../components/Providers";

export const metadata: Metadata = {
  title: "WhiskerWorks - Home of Archie, Rocco, Des & Pete",
  description: "DIY pet tech • Shorts • Future merch & SaaS",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="antialiased bg-background text-foreground transition-colors duration-500">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
