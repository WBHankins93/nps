import Button from '../Button';

interface HeroSectionProps {
  onNavigateToContact: () => void;
}

export default function HeroSection({ onNavigateToContact }: HeroSectionProps) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0a4c7a] via-[#1e88e5] to-[#42a5f5]">
      {/* Water ripple effect overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,76,122,0.1)_100%)]"></div>

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-20 md:py-24">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
            NOLA Pool Solutions
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-16 font-light">
            Premier Pool Services in the Heart of New Orleans
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-16 lg:p-20 mb-16 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Who We Are</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-50 mb-16 leading-relaxed font-light">
              Your trusted partner for exceptional pool maintenance, repair, and renovation services.
              We bring professional care and New Orleans spirit to every pool we service.
            </p>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Mission */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed text-base lg:text-lg">
                  To deliver exceptional pool services with integrity, reliability, and the warm hospitality
                  that New Orleans is known for.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                <p className="text-blue-100 leading-relaxed text-base lg:text-lg">
                  Excellence, honesty, and customer satisfaction drive everything we do. Your pool is our priority.
                </p>
              </div>

              {/* Stand Out */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us</h3>
                <p className="text-blue-100 leading-relaxed text-base lg:text-lg">
                  Local expertise, personalized service, and commitment to keeping your pool pristine year-round.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={onNavigateToContact}
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="https://getskimmer.com/account/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-[#1e88e5]"
            >
              Customer Portal
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
