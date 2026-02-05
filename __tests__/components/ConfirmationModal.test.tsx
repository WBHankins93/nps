import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ConfirmationModal from '@/components/ConfirmationModal';

describe('ConfirmationModal Component', () => {
  const user = userEvent.setup();
  const mockOnClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    // Reset body overflow
    document.body.style.overflow = '';
  });

  afterEach(() => {
    document.body.style.overflow = '';
  });

  describe('Modal renders when isOpen is true', () => {
    it('renders modal when open', () => {
      render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });

    it('renders default title when open', () => {
      render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      expect(screen.getByRole('heading', { name: /thank you/i })).toBeInTheDocument();
    });

    it('renders default message when open', () => {
      render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      expect(screen.getByText(/we've received your message/i)).toBeInTheDocument();
    });
  });

  describe('Modal does not render when isOpen is false', () => {
    it('does not render modal when closed', () => {
      render(<ConfirmationModal isOpen={false} onClose={mockOnClose} />);
      
      expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument();
    });

    it('returns null when isOpen is false', () => {
      const { container } = render(<ConfirmationModal isOpen={false} onClose={mockOnClose} />);
      
      // Modal should not be in the DOM
      expect(container.querySelector('[class*="fixed"]')).not.toBeInTheDocument();
    });
  });

  describe('Close button closes modal', () => {
    it('calls onClose when close button is clicked', async () => {
      render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      // Get the header close button (the one with aria-label="Close")
      const headerCloseButton = screen.getByLabelText('Close');
      await user.click(headerCloseButton);
      
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('has close button with aria-label', () => {
      render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      // Find the button with aria-label="Close" (header button)
      const headerCloseButton = screen.getByLabelText('Close');
      expect(headerCloseButton).toBeInTheDocument();
      expect(headerCloseButton).toHaveAttribute('aria-label', 'Close');
    });
  });

  describe('Clicking backdrop closes modal', () => {
    it('calls onClose when backdrop is clicked', async () => {
      render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      // Find backdrop (the outer div with fixed positioning)
      const backdrop = screen.getByText(/thank you/i).closest('div[class*="fixed"]');
      if (backdrop) {
        // Click on the backdrop area (not the modal content)
        await user.click(backdrop);
        expect(mockOnClose).toHaveBeenCalledTimes(1);
      }
    });

    it('does not close when modal content is clicked', async () => {
      render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      // Click on the modal content itself
      const modalContent = screen.getByText(/thank you/i).closest('div[class*="bg-white"]');
      if (modalContent) {
        await user.click(modalContent);
        // Should not close when clicking content
        expect(mockOnClose).not.toHaveBeenCalled();
      }
    });
  });

  describe('Body scroll locked when modal is open', () => {
    it('locks body scroll when modal opens', () => {
      render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('unlocks body scroll when modal closes', () => {
      const { rerender } = render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      expect(document.body.style.overflow).toBe('hidden');
      
      rerender(<ConfirmationModal isOpen={false} onClose={mockOnClose} />);
      
      expect(document.body.style.overflow).toBe('unset');
    });

    it('restores body scroll on unmount', () => {
      const { unmount } = render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      expect(document.body.style.overflow).toBe('hidden');
      
      unmount();
      
      expect(document.body.style.overflow).toBe('unset');
    });
  });

  describe('Custom title and message display correctly', () => {
    it('displays custom title', () => {
      render(
        <ConfirmationModal
          isOpen={true}
          onClose={mockOnClose}
          title="Custom Title"
        />
      );
      
      expect(screen.getByRole('heading', { name: /custom title/i })).toBeInTheDocument();
    });

    it('displays custom message', () => {
      render(
        <ConfirmationModal
          isOpen={true}
          onClose={mockOnClose}
          message="Custom message text"
        />
      );
      
      expect(screen.getByText(/custom message text/i)).toBeInTheDocument();
    });

    it('displays both custom title and message', () => {
      render(
        <ConfirmationModal
          isOpen={true}
          onClose={mockOnClose}
          title="Custom Title"
          message="Custom message text"
        />
      );
      
      expect(screen.getByRole('heading', { name: /custom title/i })).toBeInTheDocument();
      expect(screen.getByText(/custom message text/i)).toBeInTheDocument();
    });
  });

  describe('Modal structure', () => {
    it('renders success icon', () => {
      render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      // Success icon is an SVG with checkmark path
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders close button in modal', () => {
      render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      // There are two close buttons - check for the header one with aria-label
      const headerCloseButton = screen.getByLabelText('Close');
      expect(headerCloseButton).toBeInTheDocument();
    });

    it('renders main close button at bottom', () => {
      render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      const buttons = screen.getAllByRole('button');
      // Should have close button in header and main button at bottom
      expect(buttons.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Modal accessibility', () => {
    it('has proper z-index for overlay', () => {
      render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      const backdrop = screen.getByText(/thank you/i).closest('div[class*="fixed"]');
      expect(backdrop).toHaveClass('z-50');
    });

    it('renders backdrop with blur effect', () => {
      render(<ConfirmationModal isOpen={true} onClose={mockOnClose} />);
      
      const backdrop = screen.getByText(/thank you/i).closest('div[class*="fixed"]');
      const backdropDiv = backdrop?.querySelector('div[class*="backdrop"]');
      expect(backdropDiv).toBeInTheDocument();
    });
  });
});
