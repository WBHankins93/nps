'use client';

import { useState, useRef, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  const sectionsRef = {
    home: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // On mobile, use IntersectionObserver to track which section is in view
      const observers = Object.entries(sectionsRef).map(([key, ref]) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(key);
              }
            });
          },
          {
            threshold: 0.5,
          }
        );

        if (ref.current) {
          observer.observe(ref.current);
        }

        return observer;
      });

      return () => {
        observers.forEach((observer) => observer.disconnect());
      };
    }
  }, [isMobile]);

  const handleNavigate = (section: string) => {
    setActiveSection(section);

    const ref = sectionsRef[section as keyof typeof sectionsRef];
    if (ref.current) {
      if (isMobile) {
        // On mobile, smooth scroll to section
        ref.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        // On desktop, the active section is shown (handled by CSS/conditional rendering)
        // No scrolling needed as sections are stacked
      }
    }
  };

  const renderSection = (sectionName: string) => {
    if (!isMobile && activeSection !== sectionName) {
      return null;
    }

    switch (sectionName) {
      case 'home':
        return <HeroSection onNavigateToContact={() => handleNavigate('contact')} />;
      case 'services':
        return <ServicesSection />;
      case 'gallery':
        return <GallerySection />;
      case 'contact':
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <main className="relative">
      <Navigation onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Desktop: Show only active section (non-scrollable) */}
      {!isMobile && (
        <div className="h-screen overflow-hidden">
          <div className="transition-all duration-500 ease-in-out h-full">
            {renderSection(activeSection)}
          </div>
        </div>
      )}

      {/* Mobile: Show all sections (scrollable) */}
      {isMobile && (
        <div className="pt-20">
          <div ref={sectionsRef.home}>{renderSection('home')}</div>
          <div ref={sectionsRef.services}>{renderSection('services')}</div>
          <div ref={sectionsRef.gallery}>{renderSection('gallery')}</div>
          <div ref={sectionsRef.contact}>{renderSection('contact')}</div>
        </div>
      )}

      {/* Desktop: Section indicators */}
      {!isMobile && (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
          {Object.keys(sectionsRef).map((section) => (
            <button
              key={section}
              onClick={() => handleNavigate(section)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section
                  ? 'bg-[#d4af37] w-12 h-3'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className={`${isMobile ? 'relative' : 'fixed bottom-0 left-0 right-0'} bg-[#0a4c7a] text-white py-4 z-30`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} NOLA Pool Solutions. All rights reserved.
            {' | '}
            <a href="mailto:nolapoolsolutions@gmail.com" className="hover:text-[#d4af37] transition-colors">
              nolapoolsolutions@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
