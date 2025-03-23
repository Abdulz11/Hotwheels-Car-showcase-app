import type { Metadata } from "next";
import StartPage from "@/components/StartPage"

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata:Metadata = {
  title:'AI Models for Business Solutions',
  description:"Leverage AI to automate and optimize workflows."
}

// export const metadata: Metadata = {
//   title: "Hot Wheels",
//   description: "Website for car enthusiats",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar/> */}
        {/* <StartPage /> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
