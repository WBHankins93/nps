'use client';

import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  type = 'button',
  target,
  rel,
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 relative overflow-hidden group';

  const variants = {
    primary: 'text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0',
    outline: 'border-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Background styles based on variant
  const getBackgroundStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          background: 'linear-gradient(135deg, #1B5A7D 0%, #2C7DA0 100%)',
        };
      case 'secondary':
        return {
          background: 'linear-gradient(135deg, #B8956A 0%, #D4AF6E 100%)',
        };
      case 'outline':
        return {
          borderColor: '#1B5A7D',
          color: '#1B5A7D',
          backgroundColor: 'transparent',
        };
      default:
        return {};
    }
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Shimmer effect overlay for primary and secondary buttons
  const shimmerOverlay = (variant === 'primary' || variant === 'secondary') && (
    <span 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 2s ease-in-out infinite',
      }}
    />
  );

  const sharedContent = (
    <>
      {shimmerOverlay}
      <span className="relative z-10">{children}</span>
    </>
  );

  const styles = getBackgroundStyle();

  if (href) {
    const isExternal =
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#') ||
      Boolean(target);

    if (isExternal) {
      return (
        <>
          <a
            href={href}
            className={classes}
            target={target}
            rel={rel}
            onClick={onClick}
            style={styles}
          >
            {sharedContent}
          </a>
          <style jsx>{`
            @keyframes shimmer {
              0% {
                background-position: -200% center;
              }
              100% {
                background-position: 200% center;
              }
            }
          `}</style>
        </>
      );
    }

    return (
      <>
        <Link href={href} className={classes} style={styles} onClick={onClick}>
          {sharedContent}
        </Link>
        <style jsx>{`
          @keyframes shimmer {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <button type={type} onClick={onClick} className={classes} style={styles}>
        {sharedContent}
      </button>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </>
  );
}