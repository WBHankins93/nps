'use client';

import { useState } from 'react';
import Link from "next/link";

export default function ServicesShowcase() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: 'Pool Maintenance',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      // description: 'Weekly or bi-weekly service plans keep chemistry balanced, surfaces spotless, and equipment tuned.',
      detailedDescription: 'Our comprehensive pool maintenance service ensures your pool stays in pristine condition year-round.',
      features: [
        'Complete water chemistry testing',
        'Skimming and vacuuming',
        'Filter cleaning and backwashing',
        'Equipment inspection',
        'Detailed service reports'
      ],
      imageUrl: '/pool-maintenance.jpg',
      placeholderBg: 'bg-gradient-to-br from-cerulean to-ocean',
    },
    {
      title: 'Equipment Expertise',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      // description: 'Dependable diagnostics and repairs for pumps, heaters, automation, and advanced lighting.',
      detailedDescription: 'Fast, reliable diagnostics and repairs for all pool equipment.',
      features: [
        'Pump and filter repair',
        'Automation system setup',
        'LED lighting upgrades',
        'Salt system maintenance',
        'Emergency repair services'
      ],
      imageUrl: '/equipment-repair.jpg',
      placeholderBg: 'bg-gradient-to-br from-ocean to-midnight',
    },
    {
      title: 'Renovation Guidance',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      // description: 'Strategic upgrades that refresh aesthetics, improve efficiency, and extend pool life.',
      detailedDescription: 'Expert guidance on renovation projects from resurfacing to complete redesigns.',
      features: [
        'Pool resurfacing consultation',
        'Tile and coping replacement',
        'Deck renovation guidance',
        'Water feature additions',
        'Energy-efficient upgrades'
      ],
      imageUrl: '/pool-renovation.jpg',
      placeholderBg: 'bg-gradient-to-br from-cerulean to-navy',
    },
  ];

  return (
    <section className="relative w-full showcase-section" style={{ 
      height: 'auto',
      minHeight: 'calc(100vh - 80px - 64px)'
    }}>
      {/* Background */}
      <div
        className="absolute inset-0 opacity-40 min-h-full"
        style={{
          backgroundImage: 'url(/services-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 min-h-full"
        style={{
          background: 'linear-gradient(135deg, rgba(248,251,255,0.80) 0%, rgba(255,255,255,0.75) 50%, rgba(232,244,248,0.80) 100%)',
        }}
      />
      
      {/* Content - NO padding top/bottom to eliminate purple space */}
      <div className="relative z-10 flex min-h-full flex-col items-center justify-center px-6 py-8 md:px-10 md:py-0 lg:px-16 md:h-full">
        
        {/* Header - Compact */}
        <div className="text-center mb-4 md:mb-4">
          <p className="text-cerulean text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-1">
            NOLA Pool Solutions
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-midnight mb-2">
            Our Services
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-ocean to-transparent mx-auto mb-3" />
          <p className="text-xs md:text-sm text-[var(--color-text-secondary)] font-light max-w-2xl mx-auto">
            From weekly maintenance to complex repairs and renovation planning
          </p>
        </div>

        {/* Services Grid - MINIMAL bottom margin */}
        <div className="w-full max-w-5xl mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setSelectedService(index)}
                className="group relative block h-[240px] md:h-[260px] cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Background with IMAGE */}
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
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
                  {/* Icon */}
                  <div className="flex justify-start">
                    <div className="bg-cerulean w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    {/* <p className="text-white/90 text-sm leading-relaxed">
                      service.description
                    </p> */}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* SPACER DIV between cards and CTA */}
        <div className="h-6 md:h-8" />

        {/* Quote-Only CTA - Compact with enhanced button */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl w-full max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-r from-ocean to-cerulean" />
          <div className="relative z-10 flex flex-col items-center px-6 py-6 md:px-8 md:py-8 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Quote-Only Consultations
            </h3>
            <p className="text-sm md:text-base text-white/95 mb-4 max-w-2xl text-center">
              Every pool is different. We assess your system, understand your goals, and deliver transparent pricing before we begin.
            </p>
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-white text-ocean px-10 py-3 md:px-12 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
            >
              <span className="relative z-10">Schedule a Consultation</span>
              <svg className="relative z-10 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cerulean/20 to-ocean/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full my-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-ocean transition-colors z-10 bg-white rounded-full p-2 shadow-lg"
              onClick={() => setSelectedService(null)}
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal content */}
            <div className="p-8 md:p-10">
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="bg-gradient-to-br from-cerulean to-ocean w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-white">
                    {services[selectedService].icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-midnight text-center mb-3">
                {services[selectedService].title}
              </h2>

              {/* Description */}
              <p className="text-base text-[var(--color-text-secondary)] text-center mb-6 leading-relaxed">
                {services[selectedService].detailedDescription}
              </p>

              {/* Divider */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-ocean to-transparent mx-auto mb-6" />

              {/* Features list */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-midnight mb-4">What's Included:</h3>
                <ul className="space-y-2">
                  {services[selectedService].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cerulean flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-ocean to-cerulean text-white px-8 py-3 rounded-xl font-semibold text-base hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                  onClick={() => setSelectedService(null)}
                >
                  Get a Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}