import type { Metadata } from "next";
import HomeShowcase from "@/components/pages/HomeShowcase";

export const metadata: Metadata = {
  title: "Premium Pool Services in New Orleans | NOLA Pool Solutions",
  description: "Expert pool maintenance, equipment repair, and renovation services in New Orleans. Licensed, insured, and community-trusted. Serving Greater New Orleans Area. Get your free quote today!",
  openGraph: {
    title: "Premium Pool Services in New Orleans | NOLA Pool Solutions",
    description: "Expert pool maintenance, equipment repair, and renovation services in New Orleans. Licensed, insured, and community-trusted.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="h-full w-full">
      <HomeShowcase />
    </div>
  );
}
