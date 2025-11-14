import Button from "@/components/Button";
import { getBlobUrl } from "@/lib/blob-config";

export default function ContactShowcase() {
  return (
    <section className="relative w-full showcase-section" style={{ 
      height: 'auto',
      minHeight: 'calc(100vh - 80px - 64px)'
    }}>
      <div
        className="absolute inset-0 min-h-full"
        style={{
          backgroundImage:
            `linear-gradient(135deg, rgba(11,31,63,0.88) 0%, rgba(27,90,125,0.7) 50%, rgba(70,143,175,0.65) 100%), url(${getBlobUrl('/artem-militonian-UYW6FZLlnL8-unsplash.jpg')})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 min-h-full bg-black/20" />

      <div className="relative z-10 flex min-h-full items-start justify-center px-6 py-8 pb-32 text-white md:px-10 md:py-6 md:pb-24 lg:px-16 lg:pb-28 md:h-full">
        <div className="w-full max-w-7xl">
          <header className="mb-4 flex flex-col items-center space-y-1 text-center md:mb-6 md:space-y-2">
            <p className="text-xs uppercase tracking-[0.32em] text-white/60">
              NOLA Pool Solutions
            </p>
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Contact us today!
            </h1>
          </header>

          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:gap-8 lg:gap-10">
            {/* LEFT PANEL - COMPACT PADDING */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-md md:p-8 lg:p-10">
              <div className="space-y-4 md:space-y-5">
                <section>
                  <h2 className="text-lg font-semibold md:text-xl">
                    Service Inquiries
                  </h2>
                  <p className="mt-1 text-xs leading-relaxed text-white/80 md:text-sm">
                    Weekday maintenance routes, one-time cleanings, seasonal openings, and renovation consults.
                  </p>
                </section>

                <section className="grid gap-3 md:grid-cols-2 md:gap-4">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                      Phone
                    </h3>
                    <a
                      href="tel:15045551234"
                      className="mt-1 block text-sm font-medium text-white transition-opacity hover:opacity-80"
                    >
                      (504) 555-1234
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                      Email
                    </h3>
                    <a
                      href="mailto:nolapoolsolutions@gmail.com"
                      className="mt-1 block text-sm font-medium text-white transition-opacity hover:opacity-80"
                    >
                      nolapoolsolutions@gmail.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                      Service Hours
                    </h3>
                    <p className="mt-1 text-sm text-white/80">
                      Mon - Fri: 8:00a – 5:00p
                    </p>
                    <p className="text-sm text-white/80">Sat: By appointment</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                      Coverage
                    </h3>
                    <p className="mt-1 text-sm text-white/80">
                      Greater New Orleans & Northshore
                    </p>
                  </div>
                </section>
              </div>

              <div className="mt-4 rounded-2xl bg-white/8 p-3 text-center text-xs leading-relaxed text-white/75 md:text-sm">
                <strong className="font-semibold text-white">
                  Need emergency service?
                </strong>{" "}
                Call or email and we'll prioritize a same-day response whenever routes allow.
              </div>
            </div>

            {/* RIGHT PANEL - COMPACT PADDING */}
            <div className="rounded-3xl border border-white/15 bg-white/90 p-6 text-[#0B1F3F] shadow-xl backdrop-blur md:p-8 lg:p-10">
              <h2 className="text-center text-lg font-semibold md:text-xl">
                Start the conversation
              </h2>
              <p className="mt-1 text-center text-xs leading-relaxed text-[#536471] md:text-sm">
                Tell us about your pool and select preferred follow-up details. We'll be in touch within one business day.
              </p>

              <form className="mt-4 grid gap-3 md:gap-4">
                <div className="grid gap-2 md:grid-cols-2">
                  <label className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-[#0B1F3F]">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="rounded-xl border border-[#1B5A7D]/20 bg-white px-3 py-2 text-xs text-[#0B1F3F] outline-none transition focus:border-[#2C7DA0] focus:ring-2 focus:ring-[#2C7DA0]/30 md:text-sm"
                    />
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-[#0B1F3F]">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@email.com"
                      className="rounded-xl border border-[#1B5A7D]/20 bg-white px-3 py-2 text-xs text-[#0B1F3F] outline-none transition focus:border-[#2C7DA0] focus:ring-2 focus:ring-[#2C7DA0]/30 md:text-sm"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-[#0B1F3F]">
                    Phone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(504) 555-1234"
                    className="rounded-xl border border-[#1B5A7D]/20 bg-white px-3 py-2 text-xs text-[#0B1F3F] outline-none transition focus:border-[#2C7DA0] focus:ring-2 focus:ring-[#2C7DA0]/30 md:text-sm"
                  />
                </label>

                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-[#0B1F3F]">
                    Service Needs
                  </span>
                  <select
                    name="service"
                    className="rounded-xl border border-[#1B5A7D]/20 bg-white px-3 py-2 text-xs text-[#0B1F3F] outline-none transition focus:border-[#2C7DA0] focus:ring-2 focus:ring-[#2C7DA0]/30 md:text-sm"
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

                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-[#0B1F3F]">
                    Message
                  </span>
                  <textarea
                    name="message"
                    placeholder="Share details about your pool, timeline, or questions."
                    rows={3}
                    className="resize-none rounded-xl border border-[#1B5A7D]/20 bg-white px-3 py-2 text-xs text-[#0B1F3F] outline-none transition focus:border-[#2C7DA0] focus:ring-2 focus:ring-[#2C7DA0]/30 md:text-sm"
                  />
                </label>

                <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-between">
                  <p className="text-center text-xs text-[#536471] md:text-left">
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