import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingContact from "./components/FloatingContact";

const spectral = Spectral({ 
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Web Moose - We Build Websites That Sell",
  description: "Professional web development services for businesses looking to grow their online presence. We build websites that sell.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={spectral.className}>
        <Navigation />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
