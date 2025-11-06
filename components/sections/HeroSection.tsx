import Button from '../Button';
import FleurDeLis from '../FleurDeLis';

interface HeroSectionProps {
  onNavigateToContact: () => void;
}

export default function HeroSection({ onNavigateToContact }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0a4c7a] via-[#1e88e5] to-[#42a5f5]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 opacity-10">
          <FleurDeLis className="w-32 h-32" color="white" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <FleurDeLis className="w-40 h-40" color="white" />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-5">
          <FleurDeLis className="w-64 h-64" color="white" />
        </div>
      </div>

      {/* Water ripple effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,76,122,0.1)_100%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <FleurDeLis className="w-16 h-16 md:w-20 md:h-20 text-[#d4af37] animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          NOLA Pool Solutions
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Premier Pool Services in the Heart of New Orleans
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Who We Are</h2>
          <p className="text-lg md:text-xl text-blue-50 mb-8 leading-relaxed">
            Your trusted partner for exceptional pool maintenance, repair, and renovation services.
            We bring professional care and New Orleans spirit to every pool we service.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Mission */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To deliver exceptional pool services with integrity, reliability, and the warm hospitality
                that New Orleans is known for.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Values</h3>
              <p className="text-blue-100 leading-relaxed">
                Excellence, honesty, and customer satisfaction drive everything we do. Your pool is our priority.
              </p>
            </div>

            {/* Stand Out */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Why Choose Us</h3>
              <p className="text-blue-100 leading-relaxed">
                Local expertise, personalized service, and commitment to keeping your pool pristine year-round.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
    </section>
  );
}
