import Button from "@/components/Button";

const SERVICES = [
  {
    title: "Pool Maintenance",
    description:
      "Weekly or bi-weekly service plans keep chemistry balanced, surfaces spotless, and equipment tuned.",
    highlights: [
      "Precision chemical testing & dosing",
      "Skimming, vacuuming, and brushing",
      "Filter cleans and equipment checks",
      "Detailed visit reporting",
    ],
  },
  {
    title: "Equipment Expertise",
    description:
      "Dependable diagnostics and repairs for pumps, heaters, automation, and advanced lighting.",
    highlights: [
      "Pump & filter repair / replacement",
      "Heater & automation calibration",
      "Salt systems & mineral solutions",
      "LED lighting and feature installs",
    ],
  },
  {
    title: "Renovation Guidance",
    description:
      "Strategic upgrades that refresh aesthetics, improve efficiency, and extend the life of your pool.",
    highlights: [
      "Resurfacing and tile direction",
      "Energy-smart equipment planning",
      "Water feature & lighting design",
      "Luxury finish recommendations",
    ],
  },
] as const;

export default function ServicesShowcase() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#F8FBFF]">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "url(/adheesha-paranagama-kOYh8C_xLUQ-unsplash.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/88 via-white/82 to-[#E8F4F8]/92" />

      <div className="relative z-10 flex h-full flex-col px-6 py-8 md:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          <header className="space-y-4 md:space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-[#1B5A7D]/70 md:text-base">
              Our Services
            </p>
            <h1 className="text-3xl font-bold text-[#0B1F3F] md:text-4xl lg:text-5xl">
              Tailored Care for Pools that Demand Excellence
            </h1>
            <p className="text-base leading-relaxed text-[#536471] md:text-lg">
              From weekly maintenance routes to complex repairs and curated upgrade planning, NOLA Pool Solutions delivers precision care shaped by the unique climate of New Orleans.
            </p>
          </header>

          <div className="rounded-3xl border border-[#1B5A7D]/10 bg-white/80 px-6 py-6 shadow-lg backdrop-blur-sm md:px-8 md:py-8">
            <h2 className="text-xl font-semibold text-[#0B1F3F] md:text-2xl">
              Quote-Only Consultations
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#536471] md:text-base">
              Every pool is different. We assess your system, understand your goals, and deliver transparent pricing before we begin.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full bg-[#1B5A7D]/10 px-4 py-2 text-sm font-medium text-[#1B5A7D]">
                Residential & Commercial
              </div>
              <div className="rounded-full bg-[#D4AF6E]/20 px-4 py-2 text-sm font-medium text-[#8C7051]">
                Licensed & Insured
              </div>
            </div>
            <div className="mt-6">
              <Button variant="primary" size="md" href="/contact">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid flex-1 grid-cols-1 gap-4 md:mt-8 md:grid-cols-3 md:gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="flex flex-col justify-between rounded-3xl border border-white/60 bg-white/85 px-6 py-6 shadow-md transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl md:px-7 md:py-7"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#0B1F3F] md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#536471] md:text-base">
                  {service.description}
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[#1B5A7D] md:space-y-3 md:text-base">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#D4AF6E]/90" />
                    <span className="text-[#536471]">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

