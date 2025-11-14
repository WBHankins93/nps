import type { Metadata } from "next";
import ServicesShowcase from "@/components/pages/ServicesShowcase";

export const metadata: Metadata = {
  title: "Pool Services in New Orleans | Maintenance, Repair & Renovation",
  description: "Comprehensive pool services in New Orleans: weekly maintenance, equipment repair, and renovation guidance. Licensed professionals serving Greater New Orleans & Northshore. Get a free consultation.",
  keywords: [
    "pool maintenance New Orleans",
    "pool repair service",
    "pool equipment repair",
    "pool renovation consultation",
    "pool cleaning service NOLA"
  ],
  openGraph: {
    title: "Pool Services in New Orleans | Maintenance, Repair & Renovation",
    description: "Comprehensive pool services: maintenance, equipment repair, and renovation guidance. Licensed professionals in New Orleans.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="h-full w-full">
      <ServicesShowcase />
    </div>
  );
}

