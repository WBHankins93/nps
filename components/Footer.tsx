// Google Reviews URL - Update with your actual Google Business Profile review link
// To get the correct URL:
// 1. Go to your Google Business Profile
// 2. Click "Get more reviews" or find your business on Google Maps
// 3. Use the review link format: https://g.page/r/YOUR_PLACE_ID/review
// Or: https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
const GOOGLE_REVIEWS_URL = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || "https://www.google.com/maps/search/?api=1&query=NOLA+Pool+Solutions+New+Orleans";

export default function Footer() {
  return (
    <footer className="flex flex-shrink-0 items-center bg-[#0B1F3F] px-6 md:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between py-3 text-xs text-white/80 md:py-4 md:text-sm flex-wrap gap-2">
        <p>
          © {new Date().getFullYear()} NOLA Pool Solutions. All rights reserved.
        </p>
        <div className="flex items-center gap-4 md:gap-6 flex-wrap">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#D4AF6E] whitespace-nowrap"
          >
            Leave Us A Review!
          </a>
          <a
            href="https://getskimmer.com/Account/Login/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#D4AF6E] whitespace-nowrap"
          >
            Skimmer Customer Portal
          </a>
          <a
            href="mailto:nolapoolsolutions@gmail.com"
            className="transition-colors hover:text-[#D4AF6E]"
          >
            nolapoolsolutions@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

