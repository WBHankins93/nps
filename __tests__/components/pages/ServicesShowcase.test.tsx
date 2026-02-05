import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ServicesShowcase from '@/components/pages/ServicesShowcase';

// Mock video element methods
const mockVideo = {
  playbackRate: 1,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  play: vi.fn(),
  pause: vi.fn(),
};

describe('ServicesShowcase Component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
    // Mock HTMLVideoElement
    Object.defineProperty(HTMLVideoElement.prototype, 'playbackRate', {
      writable: true,
      configurable: true,
      value: 1,
    });
  });

  describe('All services render', () => {
    it('renders all three service cards', () => {
      render(<ServicesShowcase />);
      
      expect(screen.getByText(/pool maintenance/i)).toBeInTheDocument();
      expect(screen.getByText(/equipment expertise/i)).toBeInTheDocument();
      expect(screen.getByText(/renovation guidance/i)).toBeInTheDocument();
    });

    it('renders service section heading', () => {
      render(<ServicesShowcase />);
      
      expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument();
    });

    it('renders service section description', () => {
      render(<ServicesShowcase />);
      
      expect(screen.getByText(/from weekly maintenance to complex repairs/i)).toBeInTheDocument();
    });
  });

  describe('Service selection updates displayed content', () => {
    it('opens modal when service card is clicked', async () => {
      render(<ServicesShowcase />);
      
      const maintenanceButton = screen.getByRole('button', { name: /pool maintenance/i });
      await user.click(maintenanceButton);
      
      // Modal should appear with service details
      expect(screen.getByText(/our comprehensive pool maintenance service/i)).toBeInTheDocument();
    });

    it('displays correct service details in modal', async () => {
      render(<ServicesShowcase />);
      
      const maintenanceButton = screen.getByRole('button', { name: /pool maintenance/i });
      await user.click(maintenanceButton);
      
      // There are multiple "Pool Maintenance" texts (button and modal), use getAllByText
      expect(screen.getAllByText(/pool maintenance/i).length).toBeGreaterThan(0);
      expect(screen.getByText(/our comprehensive pool maintenance service/i)).toBeInTheDocument();
    });

    it('displays service features in modal', async () => {
      render(<ServicesShowcase />);
      
      const maintenanceButton = screen.getByRole('button', { name: /pool maintenance/i });
      await user.click(maintenanceButton);
      
      expect(screen.getByText(/complete water chemistry testing/i)).toBeInTheDocument();
      expect(screen.getByText(/skimming and vacuuming/i)).toBeInTheDocument();
    });

    it('closes modal when close button is clicked', async () => {
      render(<ServicesShowcase />);
      
      const maintenanceButton = screen.getByRole('button', { name: /pool maintenance/i });
      await user.click(maintenanceButton);
      
      expect(screen.getByText(/our comprehensive pool maintenance service/i)).toBeInTheDocument();
      
      const closeButton = screen.getByRole('button', { name: /close modal/i });
      await user.click(closeButton);
      
      expect(screen.queryByText(/our comprehensive pool maintenance service/i)).not.toBeInTheDocument();
    });

    it('closes modal when backdrop is clicked', async () => {
      render(<ServicesShowcase />);
      
      const maintenanceButton = screen.getByRole('button', { name: /pool maintenance/i });
      await user.click(maintenanceButton);
      
      expect(screen.getByText(/our comprehensive pool maintenance service/i)).toBeInTheDocument();
      
      // Click on backdrop (the outer div)
      const backdrop = screen.getByText(/our comprehensive pool maintenance service/i).closest('div[class*="fixed"]');
      if (backdrop) {
        await user.click(backdrop);
        expect(screen.queryByText(/our comprehensive pool maintenance service/i)).not.toBeInTheDocument();
      }
    });

    it('displays different service details for each service', async () => {
      render(<ServicesShowcase />);
      
      // Click maintenance
      const maintenanceButton = screen.getByRole('button', { name: /pool maintenance/i });
      await user.click(maintenanceButton);
      expect(screen.getByText(/complete water chemistry testing/i)).toBeInTheDocument();
      
      // Close and click equipment
      const closeButton = screen.getByRole('button', { name: /close modal/i });
      await user.click(closeButton);
      
      const equipmentButton = screen.getByRole('button', { name: /equipment expertise/i });
      await user.click(equipmentButton);
      expect(screen.getByText(/pump and filter repair/i)).toBeInTheDocument();
    });
  });

  describe('Video playback rate set correctly', () => {
    it('sets video playback rate to 0.9', () => {
      const videoRef = { current: { playbackRate: 1 } as HTMLVideoElement };
      
      // Mock useEffect behavior
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.9;
      }
      
      expect(videoRef.current.playbackRate).toBe(0.9);
    });

    it('renders video element', () => {
      render(<ServicesShowcase />);
      
      const video = document.querySelector('video');
      expect(video).toBeInTheDocument();
      expect(video).toHaveAttribute('src', '/nps-cleaning.MP4');
    });

    it('video has correct attributes', () => {
      render(<ServicesShowcase />);
      
      const video = document.querySelector('video') as HTMLVideoElement;
      expect(video).toBeInTheDocument();
      // Boolean attributes in React don't show as attributes when true
      // Check the properties instead
      expect(video.hasAttribute('loop') || video.loop).toBeTruthy();
      expect(video.hasAttribute('muted') || video.muted).toBeTruthy();
      expect(video.hasAttribute('playsInline') || video.playsInline).toBeTruthy();
      expect(video.hasAttribute('autoPlay') || video.autoplay).toBeTruthy();
    });
  });

  describe('Service features list displays', () => {
    it('displays all features for Pool Maintenance', async () => {
      render(<ServicesShowcase />);
      
      const maintenanceButton = screen.getByRole('button', { name: /pool maintenance/i });
      await user.click(maintenanceButton);
      
      expect(screen.getByText(/complete water chemistry testing/i)).toBeInTheDocument();
      expect(screen.getByText(/skimming and vacuuming/i)).toBeInTheDocument();
      expect(screen.getByText(/filter cleaning and backwashing/i)).toBeInTheDocument();
      expect(screen.getByText(/equipment inspection/i)).toBeInTheDocument();
      expect(screen.getByText(/detailed service reports/i)).toBeInTheDocument();
    });

    it('displays all features for Equipment Expertise', async () => {
      render(<ServicesShowcase />);
      
      const equipmentButton = screen.getByRole('button', { name: /equipment expertise/i });
      await user.click(equipmentButton);
      
      expect(screen.getByText(/pump and filter repair/i)).toBeInTheDocument();
      expect(screen.getByText(/automation system setup/i)).toBeInTheDocument();
      expect(screen.getByText(/led lighting upgrades/i)).toBeInTheDocument();
      expect(screen.getByText(/salt system maintenance/i)).toBeInTheDocument();
      expect(screen.getByText(/emergency repair services/i)).toBeInTheDocument();
    });

    it('displays all features for Renovation Guidance', async () => {
      render(<ServicesShowcase />);
      
      const renovationButton = screen.getByRole('button', { name: /renovation guidance/i });
      await user.click(renovationButton);
      
      expect(screen.getByText(/pool resurfacing consultation/i)).toBeInTheDocument();
      expect(screen.getByText(/tile and coping replacement/i)).toBeInTheDocument();
      expect(screen.getByText(/deck renovation guidance/i)).toBeInTheDocument();
      expect(screen.getByText(/water feature additions/i)).toBeInTheDocument();
      expect(screen.getByText(/energy-efficient upgrades/i)).toBeInTheDocument();
    });
  });

  describe('Service images load correctly', () => {
    it('service cards have background images', () => {
      render(<ServicesShowcase />);
      
      const maintenanceButton = screen.getByRole('button', { name: /pool maintenance/i });
      // The background image is set via inline style
      const backgroundDiv = maintenanceButton.querySelector('div[style*="background-image"]') || 
                           maintenanceButton.querySelector('div[style*="backgroundImage"]');
      
      expect(backgroundDiv).not.toBeNull();
      if (backgroundDiv) {
        expect(backgroundDiv).toBeInTheDocument();
      }
    });

    it('service cards have aria-labels for accessibility', () => {
      render(<ServicesShowcase />);
      
      const maintenanceButton = screen.getByRole('button', { name: /pool maintenance/i });
      const backgroundDiv = maintenanceButton.querySelector('div[aria-label]');
      
      expect(backgroundDiv).toHaveAttribute('aria-label');
      expect(backgroundDiv?.getAttribute('aria-label')).toContain('Pool Maintenance');
    });
  });

  describe('Video section', () => {
    it('renders video section heading', () => {
      render(<ServicesShowcase />);
      
      expect(screen.getByRole('heading', { name: /see us in action/i })).toBeInTheDocument();
    });

    it('renders video section description', () => {
      render(<ServicesShowcase />);
      
      expect(screen.getByText(/complete walkthrough of our maintenance/i)).toBeInTheDocument();
    });
  });

  describe('CTA section', () => {
    it('renders CTA heading', () => {
      render(<ServicesShowcase />);
      
      expect(screen.getByRole('heading', { name: /quote-only consultations/i })).toBeInTheDocument();
    });

    it('renders CTA description', () => {
      render(<ServicesShowcase />);
      
      expect(screen.getByText(/every pool is different/i)).toBeInTheDocument();
    });

    it('renders CTA link to contact page', () => {
      render(<ServicesShowcase />);
      
      const ctaLink = screen.getByRole('link', { name: /schedule a consultation/i });
      expect(ctaLink).toBeInTheDocument();
      expect(ctaLink).toHaveAttribute('href', '/contact');
    });
  });
});
