import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
