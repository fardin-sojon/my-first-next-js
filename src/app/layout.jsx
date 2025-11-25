"use client"; 

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/Components/Navber";
import Footer from "@/Components/Footer";
import AuthProvider from "./Providers/AuthProvider";
import { Toaster } from "react-hot-toast";

// Google Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ShopEase</title>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navber />
            <main className="flex-1 pb-10">{children}</main>
            <Toaster 
            position="top-center" 
            reverseOrder={false} />
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
