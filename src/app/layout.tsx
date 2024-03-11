import type { Metadata } from "next";
import CustomCursor from "@/components/navbar/custom-cursor/Cursor";
import { Azeret_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const azaretMono = Azeret_Mono({ subsets: ["latin"] });

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
      <body className={azaretMono.className}>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
