import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Importamos la fuente Inter para usarla en toda la aplicación
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AG Kapital - Professional Services On Demand",
  description: "Hire the best freelancers for your business. Find top talent for development, design, marketing, writing, and more.",
  keywords: "freelancers, professional services, remote work, talent marketplace, hire developers, hire designers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
