import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Work_Sans, Playfair_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

// Modern, friendly sans-serif for headings - professional but warmer than Montserrat
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Warm, readable sans-serif for body text - more approachable than Inter
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Elegant serif for special headings/accents
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOLA Pool Solutions | Premium Pool Services in New Orleans",
  description: "Expert pool maintenance, equipment repair, and renovation services in New Orleans. Professional, reliable pool care for residential and commercial clients.",
  keywords: ["pool service", "pool maintenance", "New Orleans", "NOLA", "pool repair", "pool renovation", "pool cleaning"],
  authors: [{ name: "NOLA Pool Solutions" }],
  openGraph: {
    title: "NOLA Pool Solutions",
    description: "Premier pool services in New Orleans",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${plusJakartaSans.variable} ${playfair.variable} antialiased flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}