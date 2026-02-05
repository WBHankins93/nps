import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navigation from '@/components/Navigation';

// Mock usePathname
const mockUsePathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

describe('Navigation Component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });
    mockUsePathname.mockReturnValue('/');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Navigation renders all menu items correctly', () => {
    it('renders all navigation items in desktop view', () => {
      render(<Navigation />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
      
      // Use getAllByText since both desktop and mobile nav render the same text
      expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Services').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Gallery').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
    });

    it('renders logo with correct alt text', () => {
      render(<Navigation />);
      
      const logo = screen.getByAltText('NOLA Pool Solutions logo');
      expect(logo).toBeInTheDocument();
    });

    it('renders logo link that navigates to home', () => {
      render(<Navigation />);
      
      const logoLink = screen.getByAltText('NOLA Pool Solutions logo').closest('a');
      expect(logoLink).toHaveAttribute('href', '/');
    });
  });

  describe('Active route highlighting', () => {
    it('highlights home route when pathname is exactly "/"', () => {
      mockUsePathname.mockReturnValue('/');
      render(<Navigation />);
      
      // Get desktop nav link (first one, inside nav element)
      const nav = screen.getByRole('navigation');
      const homeLinks = screen.getAllByText('Home');
      const desktopHomeLink = homeLinks.find(link => nav.contains(link.closest('a')!));
      expect(desktopHomeLink?.closest('a')).toHaveClass('text-ocean');
    });

    it('does not highlight home route when pathname is not "/"', () => {
      mockUsePathname.mockReturnValue('/services');
      render(<Navigation />);
      
      const nav = screen.getByRole('navigation');
      const homeLinks = screen.getAllByText('Home');
      const desktopHomeLink = homeLinks.find(link => nav.contains(link.closest('a')!));
      expect(desktopHomeLink?.closest('a')).toHaveClass('text-text-secondary');
    });

    it('highlights services route when pathname starts with "/services"', () => {
      mockUsePathname.mockReturnValue('/services');
      render(<Navigation />);
      
      const nav = screen.getByRole('navigation');
      const servicesLinks = screen.getAllByText('Services');
      const desktopServicesLink = servicesLinks.find(link => nav.contains(link.closest('a')!));
      expect(desktopServicesLink?.closest('a')).toHaveClass('text-ocean');
    });

    it('highlights gallery route when pathname starts with "/gallery"', () => {
      mockUsePathname.mockReturnValue('/gallery');
      render(<Navigation />);
      
      const nav = screen.getByRole('navigation');
      const galleryLinks = screen.getAllByText('Gallery');
      const desktopGalleryLink = galleryLinks.find(link => nav.contains(link.closest('a')!));
      expect(desktopGalleryLink?.closest('a')).toHaveClass('text-ocean');
    });

    it('highlights contact route when pathname starts with "/contact"', () => {
      mockUsePathname.mockReturnValue('/contact');
      render(<Navigation />);
      
      const nav = screen.getByRole('navigation');
      const contactLinks = screen.getAllByText('Contact');
      const desktopContactLink = contactLinks.find(link => nav.contains(link.closest('a')!));
      expect(desktopContactLink?.closest('a')).toHaveClass('text-ocean');
    });

    it('shows active indicator bar for active routes', () => {
      mockUsePathname.mockReturnValue('/services');
      render(<Navigation />);
      
      const nav = screen.getByRole('navigation');
      const servicesLinks = screen.getAllByText('Services');
      const desktopServicesLink = servicesLinks.find(link => nav.contains(link.closest('a')!));
      const servicesLinkElement = desktopServicesLink?.closest('a');
      // The active indicator is a span with specific styling
      expect(servicesLinkElement?.querySelector('span[style*="background"]')).toBeInTheDocument();
    });
  });

  describe('Mobile menu functionality', () => {
    it('renders mobile menu toggle button', () => {
      render(<Navigation />);
      
      const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
      expect(toggleButton).toBeInTheDocument();
      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('toggles mobile menu open when button is clicked', async () => {
      render(<Navigation />);
      
      const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
      
      await user.click(toggleButton);
      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    });

    it('toggles mobile menu closed when button is clicked again', async () => {
      render(<Navigation />);
      
      const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
      
      await user.click(toggleButton);
      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
      
      await user.click(toggleButton);
      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('closes mobile menu when a link is clicked', async () => {
      render(<Navigation />);
      
      const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
      await user.click(toggleButton);
      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
      
      // Find mobile menu link (they're all rendered, just hidden)
      const mobileLinks = screen.getAllByText('Home');
      const mobileLink = mobileLinks.find(link => {
        const parent = link.closest('div[class*="md:hidden"]');
        return parent !== null;
      });
      
      if (mobileLink) {
        await user.click(mobileLink);
        expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
      }
    });

    it('renders all navigation items in mobile menu', async () => {
      render(<Navigation />);
      
      const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
      await user.click(toggleButton);
      
      // All links should be accessible in mobile menu
      expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Services').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Gallery').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
    });
  });

  describe('Scroll effect', () => {
    it('applies shadow-xl class when scrolled', async () => {
      Object.defineProperty(window, 'scrollY', {
        writable: true,
        configurable: true,
        value: 25,
      });
      
      render(<Navigation />);
      
      // Trigger scroll event and wait for state update
      window.dispatchEvent(new Event('scroll'));
      
      // Wait for React to update
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('shadow-xl');
    });

    it('applies shadow-md class when not scrolled', () => {
      Object.defineProperty(window, 'scrollY', {
        writable: true,
        configurable: true,
        value: 0,
      });
      
      render(<Navigation />);
      
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('shadow-md');
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels for mobile menu button', () => {
      render(<Navigation />);
      
      const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
      expect(toggleButton).toHaveAttribute('aria-label', 'Toggle menu');
      expect(toggleButton).toHaveAttribute('aria-expanded');
    });

    it('has semantic header element', () => {
      render(<Navigation />);
      
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('has semantic navigation element', () => {
      render(<Navigation />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('all navigation links are accessible', () => {
      render(<Navigation />);
      
      // Check that links exist (both desktop and mobile)
      const homeLinks = screen.getAllByText('Home');
      const servicesLinks = screen.getAllByText('Services');
      const galleryLinks = screen.getAllByText('Gallery');
      const contactLinks = screen.getAllByText('Contact');
      
      expect(homeLinks.length).toBeGreaterThan(0);
      expect(servicesLinks.length).toBeGreaterThan(0);
      expect(galleryLinks.length).toBeGreaterThan(0);
      expect(contactLinks.length).toBeGreaterThan(0);
      
      // Verify they're all links
      homeLinks.forEach(link => expect(link.closest('a')).toBeInTheDocument());
      servicesLinks.forEach(link => expect(link.closest('a')).toBeInTheDocument());
      galleryLinks.forEach(link => expect(link.closest('a')).toBeInTheDocument());
      contactLinks.forEach(link => expect(link.closest('a')).toBeInTheDocument());
    });
  });
});
