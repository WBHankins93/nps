import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: 'Pool Maintenance',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Weekly or bi-weekly service plans keep chemistry balanced, surfaces spotless, and equipment tuned.',
      imageUrl: '/pool-maintenance.jpg',
      placeholderBg: 'bg-gradient-to-br from-cerulean to-ocean',
      href: '/services/maintenance',
    },
    {
      title: 'Equipment Expertise',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: 'Dependable diagnostics and repairs for pumps, heaters, automation, and advanced lighting.',
      imageUrl: '/equipment-repair.jpg',
      placeholderBg: 'bg-gradient-to-br from-ocean to-midnight',
      href: '/services/equipment',
    },
    {
      title: 'Renovation Guidance',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      description: 'Strategic upgrades that refresh aesthetics, improve efficiency, and extend the life of your pool.',
      imageUrl: '/pool-renovation.jpg',
      placeholderBg: 'bg-gradient-to-br from-cerulean to-navy',
      href: '/services/renovation',
    },
  ];

  return (
    <section className="relative h-full w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30 md:opacity-50"
        style={{
          backgroundImage: 'url(/services-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(248,251,255,0.82) 0%, rgba(255,255,255,0.78) 50%, rgba(232,244,248,0.82) 100%)',
        }}
      />
      
      {/* Content - Centered with flex */}
      <div className="relative z-10 flex h-full flex-col px-6 py-8 md:px-10 lg:px-16">
        
        {/* Header - Compact */}
        <div className="text-center mb-6 md:mb-8 flex justify-center">
          <div className="max-w-4xl">
            <p className="text-cerulean text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-2">
              NOLA Pool Solutions
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-midnight mb-3">
              Our Services
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-ocean to-transparent mx-auto mb-4" />
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
              From weekly maintenance routes to complex repairs and curated upgrade planning, 
              NOLA Pool Solutions delivers precision care shaped by the unique climate of New Orleans.
            </p>
          </div>
        </div>

        {/* Services Grid - Takes remaining space */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative block h-[320px] cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl md:h-[360px]"
                >
                  {/* Background */}
                  <div 
                    className={`absolute inset-0 ${service.placeholderBg} transition-transform duration-700 group-hover:scale-105`}
                    style={{
                      backgroundImage: service.imageUrl ? `url(${service.imageUrl})` : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                    {/* Icon at top */}
                    <div className="flex justify-start">
                      <div className="bg-cerulean w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Text at bottom */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/90 text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quote-Only CTA - Compact with proper spacing */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-ocean to-cerulean" />
              <div className="relative z-10 text-center px-6 py-8 md:px-10 md:py-10 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Quote-Only Consultations
                </h3>
                <p className="text-sm md:text-base text-white/95 mb-3 max-w-2xl mx-auto leading-relaxed">
                  Every pool is different. We assess your system, understand your goals, 
                  and deliver transparent pricing before we begin.
                </p>
                <p className="text-xs md:text-sm text-white/80 mb-6">
                  Residential & Commercial | Licensed & Insured
                </p>
                <button className="bg-white text-ocean px-10 py-4 rounded-xl font-semibold text-base hover:bg-white/95 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center gap-3">
                  Schedule a Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}