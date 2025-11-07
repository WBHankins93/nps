export default function ServicesSection() {
  const services = [
    {
      title: 'Pool Maintenance',
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Regular pool servicing and cleaning to keep your pool crystal clear and safe.',
      features: [
        'Weekly or bi-weekly cleaning',
        'Chemical balancing and testing',
        'Skimming and vacuuming',
        'Filter cleaning',
        'Water level management',
        'Pool inspection and reporting',
      ],
    },
    {
      title: 'Equipment Repair',
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: 'Expert repair and installation of all pool equipment for optimal performance.',
      features: [
        'Pump repair and replacement',
        'Filter installation and servicing',
        'Heater maintenance',
        'Automatic cleaner repair',
        'Salt system servicing',
        'LED lighting installation',
      ],
    },
    {
      title: 'Renovation & Recommendations',
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      description: 'Transform your pool with professional renovation services and expert recommendations.',
      features: [
        'Pool resurfacing consultation',
        'Tile and coping upgrades',
        'Equipment upgrade recommendations',
        'Energy efficiency improvements',
        'Aesthetic enhancements',
        'Modernization planning',
      ],
    },
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#F8FBFF] via-white to-[#E8F4F8] py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* More visible water texture background */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'url(/adheesha-paranagama-kOYh8C_xLUQ-unsplash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Subtle gradient overlay to maintain readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40"></div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1F3F] mb-6 md:mb-8">
            Our Services
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#1B5A7D] to-transparent mx-auto mb-8 md:mb-10"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-[#536471] max-w-3xl mx-auto font-light leading-relaxed px-4">
            Comprehensive pool care tailored to your needs. Every pool is unique,
            and we provide customized quotes for all our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-16 md:mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 md:p-12 lg:p-14 shadow-md hover:shadow-lg transition-all duration-500 border border-white/50 hover:border-[#2C7DA0]/30 hover:-translate-y-1 group"
            >
              <div className="text-[#1B5A7D] mb-8 md:mb-10 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3F] mb-6 md:mb-8 text-center">
                {service.title}
              </h3>

              <p className="text-[#536471] mb-8 md:mb-10 text-center leading-relaxed text-base md:text-lg">
                {service.description}
              </p>

              <ul className="space-y-4 md:space-y-5">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-[#2C7DA0] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#536471] text-sm md:text-base lg:text-lg leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center bg-gradient-to-r from-[#1B5A7D] to-[#2C7DA0] rounded-2xl p-12 md:p-14 lg:p-16 text-white shadow-lg">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto">
            All services are quote-based to ensure you get the best value for your specific needs.
          </p>
          <p className="text-base md:text-lg lg:text-xl text-white/90 font-light max-w-2xl mx-auto">
            Contact us today for a free, no-obligation consultation and quote.
          </p>
        </div>
      </div>
    </section>
  );
}
