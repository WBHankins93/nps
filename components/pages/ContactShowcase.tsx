import Button from "@/components/Button";

export default function ContactShowcase() {
  return (
    <section className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(11,31,63,0.88) 0%, rgba(27,90,125,0.7) 50%, rgba(70,143,175,0.65) 100%), url(/artem-militonian-UYW6FZLlnL8-unsplash.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 py-8 text-white md:px-10 lg:px-16">
        <div className="w-full max-w-6xl">
          <header className="mb-10 flex flex-col items-center space-y-3 text-center md:mb-12 md:space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-white/60 md:text-base">
              NPS
            </p>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Contact us today!
            </h1>
            <p className="max-w-2xl text-center text-base leading-relaxed text-white/80 md:text-lg">
              Share your goals and schedule a personalized consultation with our service team.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-12">
            <div className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur-md md:p-12 lg:p-16">
              <div className="space-y-5 md:space-y-6">
                <section>
                  <h2 className="text-xl font-semibold md:text-2xl">
                    Service Inquiries
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/80 md:text-base">
                    Weekday maintenance routes, one-time cleanings, seasonal openings, and renovation consults.
                  </p>
                </section>

                <section className="grid gap-4 md:grid-cols-2 md:gap-5">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
                      Phone
                    </h3>
                    <a
                      href="tel:15045551234"
                      className="mt-1 block text-base font-medium text-white transition-opacity hover:opacity-80"
                    >
                      (504) 555-1234
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
                      Email
                    </h3>
                    <a
                      href="mailto:nolapoolsolutions@gmail.com"
                      className="mt-1 block text-base font-medium text-white transition-opacity hover:opacity-80"
                    >
                      nolapoolsolutions@gmail.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
                      Service Hours
                    </h3>
                    <p className="mt-1 text-base text-white/80">
                      Mon - Fri: 8:00a – 5:00p
                    </p>
                    <p className="text-base text-white/80">Sat: By appointment</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
                      Coverage
                    </h3>
                    <p className="mt-1 text-base text-white/80">
                      Greater New Orleans & Northshore
                    </p>
                  </div>
                </section>
              </div>

              <div className="mt-6 rounded-2xl bg-white/8 p-4 text-center text-sm leading-relaxed text-white/75 md:text-base">
                <strong className="font-semibold text-white">
                  Need emergency service?
                </strong>{" "}
                Call or email and we’ll prioritize a same-day response whenever routes allow.
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/90 p-8 text-[#0B1F3F] shadow-xl backdrop-blur md:p-12 lg:p-16">
              <h2 className="text-center text-xl font-semibold md:text-2xl">
                Start the conversation
              </h2>
              <p className="mt-2 text-center text-sm leading-relaxed text-[#536471] md:text-base">
                Tell us about your pool and select preferred follow-up details. We’ll be in touch within one business day.
              </p>

              <form className="mt-6 grid gap-4 md:gap-5">
                <div className="grid gap-3 md:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-[#0B1F3F]">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="rounded-xl border border-[#1B5A7D]/20 bg-white px-4 py-3 text-sm text-[#0B1F3F] outline-none transition focus:border-[#2C7DA0] focus:ring-2 focus:ring-[#2C7DA0]/30 md:text-base"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-[#0B1F3F]">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@email.com"
                      className="rounded-xl border border-[#1B5A7D]/20 bg-white px-4 py-3 text-sm text-[#0B1F3F] outline-none transition focus:border-[#2C7DA0] focus:ring-2 focus:ring-[#2C7DA0]/30 md:text-base"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-[#0B1F3F]">
                    Service Needs
                  </span>
                  <select
                    name="service"
                    className="rounded-xl border border-[#1B5A7D]/20 bg-white px-4 py-3 text-sm text-[#0B1F3F] outline-none transition focus:border-[#2C7DA0] focus:ring-2 focus:ring-[#2C7DA0]/30 md:text-base"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="maintenance">Recurring maintenance</option>
                    <option value="repair">Equipment repair</option>
                    <option value="renovation">Renovation planning</option>
                    <option value="other">Something else</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-[#0B1F3F]">
                    Message
                  </span>
                  <textarea
                    name="message"
                    placeholder="Share details about your pool, timeline, or questions."
                    rows={4}
                    className="resize-none rounded-xl border border-[#1B5A7D]/20 bg-white px-4 py-3 text-sm text-[#0B1F3F] outline-none transition focus:border-[#2C7DA0] focus:ring-2 focus:ring-[#2C7DA0]/30 md:text-base"
                  />
                </label>

                <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-center text-xs text-[#536471] md:text-left md:text-sm">
                    We respond within one business day. No marketing emails—ever.
                  </p>
                  <Button type="submit" variant="primary" size="md">
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

