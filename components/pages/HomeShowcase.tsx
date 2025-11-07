import Button from "@/components/Button";

export default function HomeShowcase() {
  return (
    <section className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/zhiqiang-wang-uWB32BEOnuw-unsplash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(11, 31, 63, 0.78) 0%, rgba(27, 90, 125, 0.58) 45%, rgba(70, 143, 175, 0.62) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full items-center justify-center px-6 py-8 md:px-10 lg:px-16">
        <div className="flex w-full max-w-5xl flex-col items-center space-y-8 text-center md:space-y-10">
          <div className="space-y-3 md:space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70 md:text-base">
              Premium Pool Care | New Orleans
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_12px_32px_rgba(11,31,63,0.45)] md:text-5xl lg:text-6xl">
              NOLA Pool Solutions
            </h1>
            <p className="text-base font-light leading-relaxed text-white/85 md:text-lg">
              Full-service pool maintenance, equipment repair, and bespoke renovation guidance crafted for the Gulf South climate.
            </p>
          </div>

          <div className="grid w-full gap-4 md:grid-cols-3 md:gap-5">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/15 bg-white/12 px-6 py-6 backdrop-blur-md md:px-6 md:py-8"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80 md:text-base">
                  {feature.copy}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
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
              variant="outline"
              size="lg"
              href="/services"
              className="min-w-[180px] border-white/60 text-white hover:bg-white/10"
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

const FEATURES = [
  {
    title: "Meticulous Maintenance",
    copy: "Weekly cleaning, chemical balancing, and full-system checks keep your water pristine year-round.",
    icon: (
      <svg
        className="h-6 w-6 text-[#D4AF6E]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Expert Repairs",
    copy: "Certified technicians service pumps, heaters, automation, and lighting with premium parts and care.",
    icon: (
      <svg
        className="h-6 w-6 text-[#D4AF6E]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v1.5M17.25 3v1.5M3 18.75V7.5A1.5 1.5 0 014.5 6h15a1.5 1.5 0 011.5 1.5v11.25m-18 0A1.5 1.5 0 004.5 20.25h15a1.5 1.5 0 001.5-1.5m-18 0v-6a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.5 1.5v6"
        />
      </svg>
    ),
  },
  {
    title: "Elevated Upgrades",
    copy: "Tailored recommendations for resurfacing, energy savings, and luxe enhancements that fit your vision.",
    icon: (
      <svg
        className="h-6 w-6 text-[#D4AF6E]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69L11.05 2.927z"
        />
      </svg>
    ),
  },
] as const;

