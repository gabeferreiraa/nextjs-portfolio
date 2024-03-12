import type { Metadata } from "next";
import CustomCursor from "@/components/navbar/custom-cursor/Cursor";
import { Azeret_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import localFont from "next/font/local";
import "@splidejs/react-splide/css";

const azaretMono = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-azeret_mono",
});

const gilroy = localFont({
  src: "./Gilroy-Light.otf",
  variable: "--font-gilroy-light",
  weight: "light",
});

export const metadata: Metadata = {
  title: "Gabriel Ferreira's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${azaretMono.variable} ${gilroy.variable}`}>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
