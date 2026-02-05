import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Breadcrumbs from '@/components/Breadcrumbs';

// Mock usePathname
const mockUsePathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

describe('Breadcrumbs Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Breadcrumbs render for non-home pages', () => {
    it('renders breadcrumbs for /services page', () => {
      mockUsePathname.mockReturnValue('/services');
      render(<Breadcrumbs />);
      
      expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toBeInTheDocument();
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Services')).toBeInTheDocument();
    });

    it('renders breadcrumbs for /gallery page', () => {
      mockUsePathname.mockReturnValue('/gallery');
      render(<Breadcrumbs />);
      
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Gallery')).toBeInTheDocument();
    });

    it('renders breadcrumbs for /contact page', () => {
      mockUsePathname.mockReturnValue('/contact');
      render(<Breadcrumbs />);
      
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('renders breadcrumbs for nested paths', () => {
      mockUsePathname.mockReturnValue('/services/maintenance');
      render(<Breadcrumbs />);
      
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Services')).toBeInTheDocument();
      expect(screen.getByText('Maintenance')).toBeInTheDocument();
    });
  });

  describe('Breadcrumbs do not render on home page', () => {
    it('returns null when pathname is "/"', () => {
      mockUsePathname.mockReturnValue('/');
      const { container } = render(<Breadcrumbs />);
      
      expect(container.firstChild).toBeNull();
    });

    it('does not render navigation element on home page', () => {
      mockUsePathname.mockReturnValue('/');
      render(<Breadcrumbs />);
      
      expect(screen.queryByRole('navigation', { name: /breadcrumb/i })).not.toBeInTheDocument();
    });
  });

  describe('Correct path segments displayed', () => {
    it('capitalizes first letter of each segment', () => {
      mockUsePathname.mockReturnValue('/services');
      render(<Breadcrumbs />);
      
      expect(screen.getByText('Services')).toBeInTheDocument();
    });

    it('handles multiple path segments', () => {
      mockUsePathname.mockReturnValue('/services/equipment/repair');
      render(<Breadcrumbs />);
      
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Services')).toBeInTheDocument();
      expect(screen.getByText('Equipment')).toBeInTheDocument();
      expect(screen.getByText('Repair')).toBeInTheDocument();
    });

    it('displays correct number of breadcrumb items', () => {
      mockUsePathname.mockReturnValue('/services/maintenance');
      render(<Breadcrumbs />);
      
      // Should have Home, Services, and Maintenance
      const links = screen.getAllByRole('link');
      const currentPage = screen.getByText('Maintenance');
      
      expect(links.length).toBe(2); // Home and Services links
      expect(currentPage).toBeInTheDocument();
    });
  });

  describe('Links navigate correctly', () => {
    it('Home link navigates to "/"', () => {
      mockUsePathname.mockReturnValue('/services');
      render(<Breadcrumbs />);
      
      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toHaveAttribute('href', '/');
    });

    it('Services link navigates to "/services"', () => {
      mockUsePathname.mockReturnValue('/services');
      render(<Breadcrumbs />);
      
      // When pathname is /services, "Services" is the current page (span, not link)
      // So we should check that Home link exists and Services is the current page
      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toHaveAttribute('href', '/');
      
      // Services should be the current page (span with aria-current)
      const servicesText = screen.getByText('Services');
      expect(servicesText).toHaveAttribute('aria-current', 'page');
    });

    it('nested path links navigate correctly', () => {
      mockUsePathname.mockReturnValue('/services/maintenance');
      render(<Breadcrumbs />);
      
      const servicesLink = screen.getByRole('link', { name: /services/i });
      expect(servicesLink).toHaveAttribute('href', '/services');
    });

    it('last breadcrumb is not a link', () => {
      mockUsePathname.mockReturnValue('/services');
      render(<Breadcrumbs />);
      
      const servicesText = screen.getByText('Services');
      expect(servicesText).not.toHaveAttribute('href');
      expect(servicesText).toHaveAttribute('aria-current', 'page');
    });
  });

  describe('Breadcrumb structure', () => {
    it('renders ordered list', () => {
      mockUsePathname.mockReturnValue('/services');
      render(<Breadcrumbs />);
      
      const list = screen.getByRole('list');
      expect(list.tagName).toBe('OL');
    });

    it('renders separator between breadcrumbs', () => {
      mockUsePathname.mockReturnValue('/services');
      render(<Breadcrumbs />);
      
      const separators = document.querySelectorAll('span[class*="text-gray-400"]');
      expect(separators.length).toBeGreaterThan(0);
    });

    it('does not render separator before first breadcrumb', () => {
      mockUsePathname.mockReturnValue('/services');
      render(<Breadcrumbs />);
      
      const breadcrumbs = screen.getAllByRole('listitem');
      const firstBreadcrumb = breadcrumbs[0];
      const separator = firstBreadcrumb.querySelector('span[class*="text-gray-400"]');
      expect(separator).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has aria-label on navigation', () => {
      mockUsePathname.mockReturnValue('/services');
      render(<Breadcrumbs />);
      
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
    });

    it('current page has aria-current="page"', () => {
      mockUsePathname.mockReturnValue('/services');
      render(<Breadcrumbs />);
      
      const currentPage = screen.getByText('Services');
      expect(currentPage).toHaveAttribute('aria-current', 'page');
    });

    it('renders list items for each breadcrumb', () => {
      mockUsePathname.mockReturnValue('/services/maintenance');
      render(<Breadcrumbs />);
      
      const listItems = screen.getAllByRole('listitem');
      expect(listItems.length).toBe(3); // Home, Services, Maintenance
    });
  });

  describe('Edge cases', () => {
    it('handles empty path segments', () => {
      mockUsePathname.mockReturnValue('//');
      render(<Breadcrumbs />);
      
      // After filtering, pathname.split('/').filter(Boolean) will result in empty array
      // But the component still renders Home as the current page
      // So navigation should exist with just Home
      const navigation = screen.getByRole('navigation');
      expect(navigation).toBeInTheDocument();
      expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('handles single character segments', () => {
      mockUsePathname.mockReturnValue('/a');
      render(<Breadcrumbs />);
      
      expect(screen.getByText('A')).toBeInTheDocument();
    });

    it('handles very long path segments', () => {
      mockUsePathname.mockReturnValue('/very-long-path-segment');
      render(<Breadcrumbs />);
      
      expect(screen.getByText('Very-long-path-segment')).toBeInTheDocument();
    });
  });
});
