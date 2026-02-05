import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactShowcase from '@/components/pages/ContactShowcase';

// Mock fetch
global.fetch = vi.fn();

// Mock ConfirmationModal
vi.mock('@/components/ConfirmationModal', () => ({
  default: ({ isOpen, onClose, title, message }: any) => {
    if (!isOpen) return null;
    return (
      <div data-testid="confirmation-modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    );
  },
}));

describe('ContactShowcase Component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
    (global.fetch as any).mockClear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Form renders all input fields', () => {
    it('renders name input field', () => {
      render(<ContactShowcase />);
      
      const nameInput = screen.getByLabelText(/name/i);
      expect(nameInput).toBeInTheDocument();
      expect(nameInput).toHaveAttribute('type', 'text');
      expect(nameInput).toBeRequired();
    });

    it('renders email input field', () => {
      render(<ContactShowcase />);
      
      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveAttribute('type', 'email');
      expect(emailInput).toBeRequired();
    });

    it('renders phone input field', () => {
      render(<ContactShowcase />);
      
      const phoneInput = screen.getByLabelText(/phone/i);
      expect(phoneInput).toBeInTheDocument();
      expect(phoneInput).toHaveAttribute('type', 'tel');
      expect(phoneInput).not.toBeRequired();
    });

    it('renders service dropdown', () => {
      render(<ContactShowcase />);
      
      const serviceSelect = screen.getByLabelText(/service needs/i);
      expect(serviceSelect).toBeInTheDocument();
      expect(serviceSelect.tagName).toBe('SELECT');
    });

    it('renders message textarea', () => {
      render(<ContactShowcase />);
      
      const messageTextarea = screen.getByLabelText(/message/i);
      expect(messageTextarea).toBeInTheDocument();
      expect(messageTextarea.tagName).toBe('TEXTAREA');
    });

    it('renders submit button', () => {
      render(<ContactShowcase />);
      
      const submitButton = screen.getByRole('button', { name: /send/i });
      expect(submitButton).toBeInTheDocument();
    });
  });

  describe('Required field validation', () => {
    it('shows error when submitting without name', async () => {
      render(<ContactShowcase />);
      
      const emailInput = screen.getByLabelText(/email/i);
      const form = screen.getByRole('button', { name: /send/i }).closest('form')!;
      
      await user.type(emailInput, 'test@example.com');
      // Clear name field if it has default value
      const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
      await user.clear(nameInput);
      
      // Submit form directly to bypass HTML5 validation
      fireEvent.submit(form);
      
      await waitFor(() => {
        expect(screen.getByText(/name and email are required/i)).toBeInTheDocument();
      }, { timeout: 3000 });
    });

    it('shows error when submitting without email', async () => {
      render(<ContactShowcase />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const form = screen.getByRole('button', { name: /send/i }).closest('form')!;
      
      await user.type(nameInput, 'Test User');
      // Clear email field if it has default value
      const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
      await user.clear(emailInput);
      
      fireEvent.submit(form);
      
      await waitFor(() => {
        expect(screen.getByText(/name and email are required/i)).toBeInTheDocument();
      }, { timeout: 3000 });
    });

    it('shows error when submitting without both name and email', async () => {
      render(<ContactShowcase />);
      
      const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
      const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
      const form = screen.getByRole('button', { name: /send/i }).closest('form')!;
      
      // Clear both fields
      await user.clear(nameInput);
      await user.clear(emailInput);
      
      fireEvent.submit(form);
      
      await waitFor(() => {
        expect(screen.getByText(/name and email are required/i)).toBeInTheDocument();
      }, { timeout: 3000 });
    });

    it('clears error when user starts typing', async () => {
      render(<ContactShowcase />);
      
      const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
      const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
      const form = screen.getByRole('button', { name: /send/i }).closest('form')!;
      
      // Clear fields and submit
      await user.clear(nameInput);
      await user.clear(emailInput);
      fireEvent.submit(form);
      
      await waitFor(() => {
        expect(screen.getByText(/name and email are required/i)).toBeInTheDocument();
      }, { timeout: 3000 });
      
      await user.type(nameInput, 'Test');
      
      await waitFor(() => {
        expect(screen.queryByText(/name and email are required/i)).not.toBeInTheDocument();
      }, { timeout: 3000 });
    });
  });

  describe('Form submission with valid data', () => {
    it('submits form successfully with all fields', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: async () => ({ success: true, message: 'Form submitted successfully' }),
      });

      render(<ContactShowcase />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const phoneInput = screen.getByLabelText(/phone/i);
      const serviceSelect = screen.getByLabelText(/service needs/i);
      const messageTextarea = screen.getByLabelText(/message/i);
      const submitButton = screen.getByRole('button', { name: /send/i });
      
      await user.type(nameInput, 'John Doe');
      await user.type(emailInput, 'john@example.com');
      await user.type(phoneInput, '504-450-3496');
      await user.selectOptions(serviceSelect, 'maintenance');
      await user.type(messageTextarea, 'Test message');
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'John Doe',
            email: 'john@example.com',
            phone: '504-450-3496',
            service: 'maintenance',
            message: 'Test message',
          }),
        });
      });
    });

    it('shows confirmation modal after successful submission', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: async () => ({ success: true, message: 'Form submitted successfully' }),
      });

      render(<ContactShowcase />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const submitButton = screen.getByRole('button', { name: /send/i });
      
      await user.type(nameInput, 'John Doe');
      await user.type(emailInput, 'john@example.com');
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-modal')).toBeInTheDocument();
        expect(screen.getByText(/thank you/i)).toBeInTheDocument();
      });
    });

    it('resets form after successful submission', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: async () => ({ success: true, message: 'Form submitted successfully' }),
      });

      render(<ContactShowcase />);
      
      const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
      const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
      const submitButton = screen.getByRole('button', { name: /send/i });
      
      await user.type(nameInput, 'John Doe');
      await user.type(emailInput, 'john@example.com');
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(nameInput.value).toBe('');
        expect(emailInput.value).toBe('');
      });
    });
  });

  describe('Form submission error handling', () => {
    it('displays error message when API returns error', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 400,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: async () => ({ error: 'Name and email are required' }),
      });

      render(<ContactShowcase />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const submitButton = screen.getByRole('button', { name: /send/i });
      
      await user.type(nameInput, 'John Doe');
      await user.type(emailInput, 'john@example.com');
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/name and email are required/i)).toBeInTheDocument();
      });
    });

    it('displays error message when fetch fails', async () => {
      (global.fetch as any).mockRejectedValueOnce(new Error('Network error'));

      render(<ContactShowcase />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const submitButton = screen.getByRole('button', { name: /send/i });
      
      await user.type(nameInput, 'John Doe');
      await user.type(emailInput, 'john@example.com');
      await user.click(submitButton);
      
      await waitFor(() => {
        // The error message might be "Network error" or "Something went wrong"
        const errorText = screen.queryByText(/network error/i) || screen.queryByText(/something went wrong/i);
        expect(errorText).toBeInTheDocument();
      }, { timeout: 3000 });
    });

    it('displays error when server returns non-JSON response', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        headers: new Headers({ 'content-type': 'text/html' }),
        text: async () => '<html>Error</html>',
      });

      render(<ContactShowcase />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const submitButton = screen.getByRole('button', { name: /send/i });
      
      await user.type(nameInput, 'John Doe');
      await user.type(emailInput, 'john@example.com');
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/server error/i)).toBeInTheDocument();
      });
    });
  });

  describe('Loading state during submission', () => {
    it('shows loading state on submit button', async () => {
      (global.fetch as any).mockImplementationOnce(
        () => new Promise(resolve => setTimeout(() => resolve({
          ok: true,
          headers: new Headers({ 'content-type': 'application/json' }),
          json: async () => ({ success: true }),
        }), 100))
      );

      render(<ContactShowcase />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const submitButton = screen.getByRole('button', { name: /send/i });
      
      await user.type(nameInput, 'John Doe');
      await user.type(emailInput, 'john@example.com');
      await user.click(submitButton);
      
      expect(screen.getByRole('button', { name: /sending/i })).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
    });
  });

  describe('Service dropdown selection', () => {
    it('allows selecting service type', async () => {
      render(<ContactShowcase />);
      
      const serviceSelect = screen.getByLabelText(/service needs/i) as HTMLSelectElement;
      
      await user.selectOptions(serviceSelect, 'maintenance');
      expect(serviceSelect.value).toBe('maintenance');
      
      await user.selectOptions(serviceSelect, 'repair');
      expect(serviceSelect.value).toBe('repair');
      
      await user.selectOptions(serviceSelect, 'renovation');
      expect(serviceSelect.value).toBe('renovation');
    });

    it('includes all service options', () => {
      render(<ContactShowcase />);
      
      const serviceSelect = screen.getByLabelText(/service needs/i);
      const options = Array.from(serviceSelect.querySelectorAll('option'));
      
      expect(options.some(opt => opt.textContent?.includes('Recurring maintenance'))).toBe(true);
      expect(options.some(opt => opt.textContent?.includes('Equipment repair'))).toBe(true);
      expect(options.some(opt => opt.textContent?.includes('Renovation planning'))).toBe(true);
      expect(options.some(opt => opt.textContent?.includes('Something else'))).toBe(true);
    });
  });

  describe('Contact information display', () => {
    it('displays phone number', () => {
      render(<ContactShowcase />);
      
      expect(screen.getByText(/\(504\) 450-3496/i)).toBeInTheDocument();
    });

    it('displays email address', () => {
      render(<ContactShowcase />);
      
      expect(screen.getByText(/nolapoolsolutions@gmail.com/i)).toBeInTheDocument();
    });

    it('displays service hours', () => {
      render(<ContactShowcase />);
      
      expect(screen.getByText(/mon - fri/i)).toBeInTheDocument();
    });

    it('displays coverage area', () => {
      render(<ContactShowcase />);
      
      expect(screen.getByText(/greater new orleans area/i)).toBeInTheDocument();
    });
  });
});
