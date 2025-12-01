import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./global.css";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import { DataProvider } from "./context/dataContext";
import Footer from "@/components/Home/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "TRIPI",
  description: "Travel to many places around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav/>
        <DataProvider>
        {children}
        </DataProvider>
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
