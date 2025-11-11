'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }

    return pathname?.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'shadow-xl' : 'shadow-md'
      }`}
      style={{
        background: isScrolled
          ? 'rgba(255, 255, 255, 0.95)'
          : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between pl-4 pr-6 md:h-24 md:pl-6 md:pr-10 lg:pl-8 lg:pr-16 xl:pl-10 xl:pr-20">
        <Link
          href="/"
          className="flex items-center gap-2 transition-all duration-300 hover:opacity-80 md:gap-3"
        >
          <svg
            className="h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 transition-transform duration-300 hover:scale-110"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ color: '#1B5A7D' }}
          >
            <path d="M12 2C12 2 8 6 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 6 12 2 12 2M12 22C7.58 22 4 18.42 4 14H6C6 17.31 8.69 20 12 20C15.31 20 18 17.31 18 14H20C20 18.42 16.42 22 12 22Z" />
          </svg>
          <div className="flex flex-col items-start">
            <span
              className="text-xl font-bold leading-none tracking-tight md:text-2xl"
              style={{ color: '#0B1F3F' }}
            >
              NOLA
            </span>
            <span
              className="mt-0.5 text-xs font-medium leading-none tracking-wide md:text-sm"
              style={{ color: '#2C7DA0' }}
            >
              Pool Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 lg:gap-12 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 text-base font-medium transition-all duration-300 md:text-lg"
              style={{
                color: isActive(item.href) ? '#1B5A7D' : '#536471',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10 transition-opacity group-hover:opacity-80">
                {item.label}
              </span>

              {isActive(item.href) && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #B8956A 0%, #D4AF6E 100%)',
                    boxShadow: '0 2px 8px rgba(184, 149, 106, 0.4)',
                  }}
                />
              )}

              <span
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(90deg, #2C7DA0 0%, #468FAF 100%)',
                }}
              />
            </Link>
          ))}
        </nav>

        <button
          className="rounded-lg p-2 transition-all duration-300 hover:bg-gray-100 md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="h-6 w-6 transition-all duration-300"
            style={{ color: '#0B1F3F' }}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 px-6 pb-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-xl px-6 py-4 text-lg font-medium transition-all duration-300 ${
                isActive(item.href)
                  ? 'text-white'
                  : 'text-gray-700 hover:text-white'
              }`}
              style={{
                background: isActive(item.href)
                  ? 'linear-gradient(135deg, #1B5A7D 0%, #2C7DA0 100%)'
                  : 'linear-gradient(135deg, rgba(27, 90, 125, 0.08) 0%, rgba(44, 125, 160, 0.08) 100%)',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(27, 90, 125, 0.1) 50%, transparent 100%)',
        }}
      />
    </header>
  );
}