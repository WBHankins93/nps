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
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[var(--color-off-white)] via-white to-[var(--color-mist)] py-20 md:py-28">
      {/* Water texture background */}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'url(/adheesha-paranagama-kOYh8C_xLUQ-unsplash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
      
      {/* Centered Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cerulean text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-midnight mb-5">
            Tailored Care for Pools that<br />Demand Excellence
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-ocean to-transparent mx-auto mb-6" />
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-4xl mx-auto font-light leading-relaxed">
            From weekly maintenance routes to complex repairs and curated upgrade planning, 
            NOLA Pool Solutions delivers precision care shaped by the unique climate of New Orleans.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative h-[320px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
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
              <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end">
                <div className="bg-cerulean w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                  {service.title}
                </h3>
                
                <p className="text-white/90 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-semibold mr-2">Learn More</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote-Only CTA */}
        <div className="pt-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-ocean to-cerulean" />
            <div className="relative z-10 text-center p-10 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Quote-Only Consultations
              </h3>
              <p className="text-base md:text-lg text-white/95 mb-3 max-w-3xl mx-auto leading-relaxed">
                Every pool is different. We assess your system, understand your goals, 
                and deliver transparent pricing before we begin.
              </p>
              <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-6">
                Residential & Commercial | Licensed & Insured
              </p>
              <button className="bg-white text-ocean px-8 py-3 rounded-lg font-semibold text-base hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}