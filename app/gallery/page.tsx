import type { Metadata } from "next";
import GalleryShowcase from "@/components/pages/GalleryShowcase";

export const metadata: Metadata = {
  title: "Pool Gallery | Past Work & Projects in New Orleans",
  description: "View our portfolio of pool renovation and maintenance projects across Greater New Orleans. See examples of our quality work, from resurfacing to complete pool redesigns.",
  keywords: [
    "pool renovation gallery New Orleans",
    "pool project portfolio",
    "pool before and after",
    "pool renovation examples",
    "pool maintenance projects"
  ],
  openGraph: {
    title: "Pool Gallery | Past Work & Projects in New Orleans",
    description: "View our portfolio of pool renovation and maintenance projects across Greater New Orleans.",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <div className="h-full w-full">
      <GalleryShowcase />
    </div>
  );
}

