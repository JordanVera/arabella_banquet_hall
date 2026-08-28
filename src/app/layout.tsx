import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const emylis = localFont({
  src: "./fonts/Emylis.otf",
  variable: "--font-emylis",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${COMPANY.name} — Houston Event Venue`,
  description:
    "Arabella Banquet Hall is a two-level banquet hall on Jensen Drive in Houston, TX — hosting weddings, quinceañeras, corporate events, and private celebrations.",
  keywords:
    "Arabella Banquet Hall, Houston banquet hall, Houston wedding venue, quinceañera venue Houston, event venue Houston, Jensen Drive banquet hall",
  openGraph: {
    title: `${COMPANY.name} — Houston Event Venue`,
    description:
      "A modern two-level banquet hall for weddings, galas, and celebrations across Greater Houston.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${emylis.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
