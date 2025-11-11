import Button from "@/components/Button";

export default function HomeShowcase() {
  return (
    <section className="relative h-full min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/zhiqiang-wang-uWB32BEOnuw-unsplash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(11, 31, 63, 0.78) 0%, rgba(27, 90, 125, 0.58) 45%, rgba(70, 143, 175, 0.62) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full min-h-screen items-center justify-center px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="flex w-full max-w-4xl flex-col items-center text-center">
          <div className="space-y-6 md:space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70 md:text-base">
              Premium Pool Care | New Orleans
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_12px_32px_rgba(11,31,63,0.45)] md:text-5xl lg:text-6xl">
              NOLA Pool Solutions
            </h1>
            <p className="text-base font-light leading-relaxed text-white/85 md:text-lg">
              Full-service pool maintenance, equipment repair, and bespoke renovation guidance crafted for the Gulf South climate.
            </p>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/60 md:text-base">
              Licensed · Insured · Trusted by Families & Resorts
            </p>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-4 md:mt-20 md:gap-6 lg:mt-24">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className="min-w-[180px]"
            >
              Start Your Quote
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
            <Button
              variant="primary"
              size="lg"
              href="/services"
              className="min-w-[180px]"
            >
              View Services
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}