'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavigationProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function Navigation({ onNavigate, activeSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-[#1e88e5]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C12 2 8 6 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 6 12 2 12 2M12 22C7.58 22 4 18.42 4 14H6C6 17.31 8.69 20 12 20C15.31 20 18 17.31 18 14H20C20 18.42 16.42 22 12 22Z" />
            </svg>
            <span className="text-2xl font-bold text-[#0a4c7a]">
              NOLA <span className="text-[#1e88e5]">Pool Solutions</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-lg font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-[#1e88e5]'
                    : 'text-gray-700 hover:text-[#1e88e5]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[#0a4c7a]"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-lg font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-[#1e88e5] bg-blue-50'
                    : 'text-gray-700 hover:text-[#1e88e5] hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
