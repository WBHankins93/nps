'use client';

import { useState } from 'react';
import Link from "next/link";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: 'Pool Maintenance',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Weekly or bi-weekly service plans keep chemistry balanced, surfaces spotless, and equipment tuned.',
      detailedDescription: 'Our comprehensive pool maintenance service ensures your pool stays in pristine condition year-round. We handle everything from chemical balancing to equipment inspection, debris removal, and surface cleaning.',
      features: [
        'Weekly or bi-weekly visits scheduled at your convenience',
        'Complete water chemistry testing and balancing',
        'Skimming, vacuuming, and brushing all surfaces',
        'Filter cleaning and backwashing',
        'Equipment inspection and minor adjustments',
        'Debris removal from baskets and skimmers',
        'Water level checks and adjustments',
        'Detailed service reports and maintenance logs'
      ],
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
      detailedDescription: 'When your pool equipment needs attention, our experienced technicians provide fast, reliable diagnostics and repairs. We work with all major brands and can handle everything from simple fixes to complex system overhauls.',
      features: [
        'Expert diagnosis of pump, filter, and heater issues',
        'Professional repair and replacement services',
        'Pool automation system installation and troubleshooting',
        'LED and fiber optic lighting upgrades',
        'Salt system and chlorinator maintenance',
        'Variable speed pump installations for energy efficiency',
        'Emergency repair services available',
        'Warranty support and manufacturer coordination'
      ],
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
      detailedDescription: 'Transform your pool into the backyard oasis you\'ve always wanted. We provide expert guidance on renovation projects, from simple resurfacing to complete redesigns, helping you make informed decisions every step of the way.',
      features: [
        'Pool resurfacing and replastering consultation',
        'Tile and coping replacement planning',
        'Deck renovation and expansion guidance',
        'Water feature addition (waterfalls, fountains, jets)',
        'Energy-efficient equipment upgrade recommendations',
        'Modern finishing options (pebble, quartz, plaster)',
        'Project timeline and budget planning',
        'Contractor coordination and quality oversight'
      ],
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
        <div className="text-center mb-6 md:mb-8 flex justify-center px-4">
          <div className="max-w-6xl w-full">
            <p className="text-cerulean text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-2">
              NOLA Pool Solutions
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-midnight mb-3">
              Our Services
            </h1>
            <div className="w-full max-w-[700px] md:max-w-[1000px] h-0.5 bg-gradient-to-r from-transparent via-ocean to-transparent mx-auto mb-4" />
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
              From weekly maintenance routes to complex repairs and curated upgrade planning, 
              NOLA Pool Solutions delivers precision care shaped by the unique climate of New Orleans.
            </p>
          </div>
        </div>

        {/* Services Grid - Takes remaining space */}
        <div className="flex-1 flex items-start justify-center overflow-y-auto py-8">
          <div className="w-full max-w-6xl mx-auto px-4 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  onClick={() => setSelectedService(index)}
                  className="group relative block h-[320px] cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl md:h-[360px] w-full"
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
                </button>
              ))}
            </div>

            {/* SPACER DIV - Reduced spacing */}
            <div className="h-10 md:h-12"></div>

            {/* Quote-Only CTA - Enhanced spacing and visual appeal */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-ocean to-cerulean" />
              <div className="relative z-10 flex flex-col items-center px-8 py-10 md:px-12 md:py-14 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6">
                  Quote-Only Consultations
                </h3>
                <p className="text-sm md:text-base text-white/95 mb-4 max-w-2xl leading-relaxed text-center">
                  Every pool is different. We assess your system, understand your goals,
                  and deliver transparent pricing before we begin.
                </p>
                <p className="text-xs md:text-sm text-white/80 mb-8 md:mb-10 text-center">
                  Residential & Commercial | Licensed & Insured
                </p>
                <Link
                  href="/contact"
                  className="bg-white text-ocean px-16 py-6 rounded-xl font-semibold text-lg hover:bg-white/95 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center gap-4"
                >
                  Schedule a Consultation
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>
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
            className="relative bg-white rounded-2xl max-w-3xl w-full my-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-ocean transition-colors z-10 bg-white rounded-full p-2 shadow-lg"
              onClick={() => setSelectedService(null)}
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal content */}
            <div className="p-8 md:p-10 lg:p-12">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-cerulean to-ocean w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-white">
                    {services[selectedService].icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-midnight text-center mb-4">
                {services[selectedService].title}
              </h2>

              {/* Short description */}
              <p className="text-lg text-[var(--color-text-secondary)] text-center mb-8 leading-relaxed">
                {services[selectedService].description}
              </p>

              {/* Divider */}
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-ocean to-transparent mx-auto mb-8" />

              {/* Detailed description */}
              <p className="text-base text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                {services[selectedService].detailedDescription}
              </p>

              {/* Features list */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-midnight mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  {services[selectedService].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-cerulean flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--color-text-secondary)] leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-ocean to-cerulean text-white px-8 py-4 rounded-xl font-semibold text-base hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                  onClick={() => setSelectedService(null)}
                >
                  Get a Quote for This Service
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