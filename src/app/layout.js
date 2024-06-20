import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Walshinn Group",
  description: "Walshinn Group stands as the premier provider of hospitality services in the UAE, setting the standard for excellence and innovation. Our tailored solutions ensure exceptional guest experiences and operational efficiency, making us the trusted partner for hotels, restaurants, and event venues across the region.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    </head>
      <body className={inter.className}>
      <Navbar />
      {children}
      <Footer />
      <Toaster />
      </body>
    </html>
  );
}
