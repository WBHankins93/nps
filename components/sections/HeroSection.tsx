'use client';

import Button from '../Button';

interface HeroSectionProps {
  onNavigateToContact: () => void;
}

export default function HeroSection({ onNavigateToContact }: HeroSectionProps) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Hero Background Image - Largest, most dramatic pool image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/zhiqiang-wang-uWB32BEOnuw-unsplash.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark overlay with gradient for depth and readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(11, 31, 63, 0.7) 0%, rgba(27, 90, 125, 0.55) 50%, rgba(44, 125, 160, 0.6) 100%)',
        }}
      />
      
      {/* Water caustics overlay - animated depth effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(70, 143, 175, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(44, 125, 160, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(27, 90, 125, 0.15) 0%, transparent 50%)
          `,
          animation: 'caustics-move 15s ease-in-out infinite alternate',
        }}
      />

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-12 py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center">
          {/* Main Hero Heading */}
          <header className="text-center space-y-4 md:space-y-5 mb-12 md:mb-16">
            <h1 className="text-5xl md:text-[4.5rem] lg:text-[5rem] font-extrabold text-white tracking-tight drop-shadow-[0_10px_28px_rgba(11,31,63,0.4)]">
              NOLA Pool Solutions
            </h1>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF6E] to-transparent mx-auto"></div>
            <p className="text-lg md:text-2xl text-white/95 font-light tracking-[0.01em] leading-relaxed drop-shadow-md max-w-2xl mx-auto">
              Premier Pool Services in the Heart of New Orleans
            </p>
          </header>

          {/* Supporting Statement */}
          <div className="text-center space-y-3 md:space-y-4 max-w-3xl mb-14 md:mb-16">
            <h2 className="text-3xl md:text-[2.1rem] font-semibold text-white tracking-tight">
              Crafted with Care
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed font-light tracking-[0.01em]">
              Your trusted partner for exceptional pool maintenance, repair, and renovation services.
              <span className="block mt-3 text-gold-shimmer font-medium">
                We bring professional care and New Orleans spirit to every pool we service.
              </span>
            </p>
          </div>

          {/* Feature Tiles */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-14 md:mb-16">
            {/* Mission */}
            <div className="px-7 py-8 md:px-8 md:py-9 text-center rounded-3xl bg-white/14 backdrop-blur-lg border border-white/20 shadow-[0_16px_40px_rgba(11,31,63,0.22)] transition-transform duration-500 hover:-translate-y-1">
              <div className="flex justify-center mb-5">
                <div className="p-3 bg-gradient-to-br from-gold-shimmer/30 to-brass/40 text-bronze rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
              <p className="text-white/85 text-sm md:text-base leading-relaxed">
                To deliver exceptional pool services with integrity, reliability, and the warm hospitality that New Orleans is known for.
              </p>
            </div>

            {/* Values */}
            <div className="px-7 py-8 md:px-8 md:py-9 text-center rounded-3xl bg-white/14 backdrop-blur-lg border border-white/20 shadow-[0_16px_40px_rgba(11,31,63,0.22)] transition-transform duration-500 hover:-translate-y-1">
              <div className="flex justify-center mb-5">
                <div className="p-3 bg-gradient-to-br from-gold-shimmer/30 to-brass/40 text-bronze rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Our Values</h3>
              <p className="text-white/85 text-sm md:text-base leading-relaxed">
                Excellence, honesty, and customer satisfaction drive everything we do. Your pool is our priority.
              </p>
            </div>

            {/* Stand Out */}
            <div className="px-7 py-8 md:px-8 md:py-9 text-center rounded-3xl bg-white/14 backdrop-blur-lg border border-white/20 shadow-[0_16px_40px_rgba(11,31,63,0.22)] transition-transform duration-500 hover:-translate-y-1">
              <div className="flex justify-center mb-5">
                <div className="p-3 bg-gradient-to-br from-gold-shimmer/30 to-brass/40 text-bronze rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Why Choose Us</h3>
              <p className="text-white/85 text-sm md:text-base leading-relaxed">
                Local expertise, personalized service, and commitment to keeping your pool pristine year-round.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={onNavigateToContact}
              className="min-w-[190px] shadow-[0_18px_30px_rgba(11,31,63,0.22)]"
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="https://getskimmer.com/account/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[190px] bg-white text-midnight border border-white/70 hover:bg-white/95"
            >
              Customer Portal
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes caustics-move {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(40px, 40px) scale(1.2);
          }
        }
      `}</style>
    </section>
  );
}