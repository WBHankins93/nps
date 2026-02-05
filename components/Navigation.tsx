'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
          className="flex items-center gap-0.5 transition-all duration-300 hover:opacity-90 md:gap-1"
        >
          <span className="relative block h-12 w-28 pr-0.5 md:h-14 md:w-32 md:pr-1 lg:h-16 lg:w-36 lg:pr-2">
            <Image
              src="/logo.png"
              alt="NOLA Pool Solutions logo"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
            />
          </span>
          <span className="hidden flex-col leading-tight pr-1 md:flex md:pr-2 lg:pr-3">
            <span className="text-lg font-normal tracking-tight text-midnight md:text-xl lg:text-2xl" style={{ fontFamily: 'var(--font-bebas), sans-serif', letterSpacing: '0.02em' }}>
              NOLA POOL
            </span>
            <span className="text-sm font-normal tracking-tight text-cerulean md:text-base lg:text-lg" style={{ fontFamily: 'var(--font-bebas), sans-serif', letterSpacing: '0.02em' }}>
              Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:gap-12 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative px-3 py-2 text-base font-medium transition-all duration-300 md:px-4 md:text-lg ${isActive(item.href) ? 'text-ocean' : 'text-text-secondary'}`}
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
          className="rounded-lg p-3 transition-all duration-300 hover:bg-gray-100 md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="h-6 w-6 transition-all duration-300 text-midnight"
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
              className={`block rounded-xl px-6 py-4 text-lg font-medium transition-all duration-300 min-h-[44px] flex items-center ${
                isActive(item.href)
                  ? 'text-white bg-gradient-to-r from-ocean to-cerulean'
                  : 'text-gray-700 hover:text-white bg-gradient-to-r from-ocean/8 to-cerulean/8'
              }`}
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
            'linear-gradient(90deg, transparent 0%, var(--color-ocean) 50%, transparent 100%)',
          opacity: 0.1,
        }}
      />
    </header>
  );
}