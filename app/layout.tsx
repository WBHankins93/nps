import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Work_Sans, Playfair_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nolapoolsolutions.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NOLA Pool Solutions | Premium Pool Services in New Orleans",
    template: "%s | NOLA Pool Solutions"
  },
  description: "Expert pool maintenance, equipment repair, and renovation services in New Orleans. Licensed, insured, and community-trusted pool care for residential and commercial clients. Serving Greater New Orleans Area.",
  keywords: [
    "pool service New Orleans",
    "pool maintenance NOLA",
    "pool repair New Orleans",
    "pool renovation Louisiana",
    "pool cleaning service",
    "pool equipment repair",
    "swimming pool maintenance",
    "pool service Metairie",
    "pool service Uptown",
    "pool service Garden District",
    "licensed pool service",
    "pool opening service",
    "pool closing service",
    "pool chemical balancing",
    "pool filter cleaning"
  ],
  authors: [{ name: "NOLA Pool Solutions" }],
  creator: "NOLA Pool Solutions",
  publisher: "NOLA Pool Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "NOLA Pool Solutions",
    title: "NOLA Pool Solutions | Premium Pool Services in New Orleans",
    description: "Expert pool maintenance, equipment repair, and renovation services in New Orleans. Licensed, insured, and community-trusted pool care.",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "NOLA Pool Solutions - Premium Pool Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOLA Pool Solutions | Premium Pool Services in New Orleans",
    description: "Expert pool maintenance, equipment repair, and renovation services in New Orleans.",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
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
        <StructuredData />
        <Navigation />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}