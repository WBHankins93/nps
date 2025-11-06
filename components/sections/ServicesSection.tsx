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
    <section className="min-h-screen w-full flex items-center justify-center bg-white py-20 md:py-24 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a4c7a] mb-6">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Comprehensive pool care tailored to your needs. Every pool is unique,
            and we provide customized quotes for all our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-14">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-[#1e88e5] hover:-translate-y-1"
            >
              <div className="text-[#1e88e5] mb-8 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-3xl font-bold text-[#0a4c7a] mb-6 text-center">
                {service.title}
              </h3>

              <p className="text-gray-700 mb-8 text-center leading-relaxed text-lg">
                {service.description}
              </p>

              <ul className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#1e88e5] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 text-base lg:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-gradient-to-r from-[#1e88e5] to-[#42a5f5] rounded-3xl p-12 md:p-16 text-white">
          <p className="text-2xl md:text-3xl font-semibold mb-4">
            All services are quote-based to ensure you get the best value for your specific needs.
          </p>
          <p className="text-lg md:text-xl text-blue-100 font-light">
            Contact us today for a free, no-obligation consultation and quote.
          </p>
        </div>
      </div>
    </section>
  );
}
