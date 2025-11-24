import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/Components/Navber";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShopEase – Simple Product Showcase",
  description: "Browse, showcase, and discover products easily with ShopEase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navber></Navber>
          <div className="flex-1 bg-gradient-to-r from-blue-100 to-indigo-200">
            {children}
            </div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
