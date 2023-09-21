"use client";
import "../styles/globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BEG3FPMVGP"></Script>
    <Script>
      {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-BEG3FPMVGP');`}
    </Script>

      <body className="bg-primary-light max-w-7xl mx-auto">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
