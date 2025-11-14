import type { Metadata } from "next";
import ContactShowcase from "@/components/pages/ContactShowcase";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Contact Us | Get Your Free Pool Service Quote in New Orleans",
  description: "Contact NOLA Pool Solutions for pool maintenance, repair, or renovation services. Serving Greater New Orleans & Northshore. Call (504) 555-1234 or email nolapoolsolutions@gmail.com. Free consultations available.",
  keywords: [
    "pool service contact New Orleans",
    "pool maintenance quote",
    "pool repair consultation",
    "contact pool company NOLA",
    "pool service phone number"
  ],
  openGraph: {
    title: "Contact Us | Get Your Free Pool Service Quote in New Orleans",
    description: "Contact NOLA Pool Solutions for pool services. Serving Greater New Orleans & Northshore. Free consultations available.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="h-full w-full">
        <ContactShowcase />
      </div>
      <FAQ />
    </>
  );
}

