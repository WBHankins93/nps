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
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-[#1e88e5] text-white hover:bg-[#0a4c7a] shadow-lg hover:shadow-xl',
    secondary: 'bg-[#d4af37] text-white hover:bg-[#b8941f] shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#1e88e5] text-[#1e88e5] hover:bg-[#1e88e5] hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
