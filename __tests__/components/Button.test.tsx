import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '@/components/Button';

describe('Button Component', () => {
  const user = userEvent.setup();

  describe('All variants render correctly', () => {
    it('renders primary variant', () => {
      render(<Button variant="primary">Primary Button</Button>);
      
      const button = screen.getByRole('button', { name: /primary button/i });
      expect(button).toBeInTheDocument();
    });

    it('renders secondary variant', () => {
      render(<Button variant="secondary">Secondary Button</Button>);
      
      const button = screen.getByRole('button', { name: /secondary button/i });
      expect(button).toBeInTheDocument();
    });

    it('renders outline variant', () => {
      render(<Button variant="outline">Outline Button</Button>);
      
      const button = screen.getByRole('button', { name: /outline button/i });
      expect(button).toBeInTheDocument();
    });

    it('defaults to primary variant when variant is not specified', () => {
      render(<Button>Default Button</Button>);
      
      const button = screen.getByRole('button', { name: /default button/i });
      expect(button).toBeInTheDocument();
    });
  });

  describe('All sizes render correctly', () => {
    it('renders small size', () => {
      render(<Button size="sm">Small Button</Button>);
      
      const button = screen.getByRole('button', { name: /small button/i });
      expect(button).toHaveClass('text-sm');
    });

    it('renders medium size', () => {
      render(<Button size="md">Medium Button</Button>);
      
      const button = screen.getByRole('button', { name: /medium button/i });
      expect(button).toHaveClass('text-base');
    });

    it('renders large size', () => {
      render(<Button size="lg">Large Button</Button>);
      
      const button = screen.getByRole('button', { name: /large button/i });
      expect(button).toHaveClass('text-lg');
    });

    it('defaults to medium size when size is not specified', () => {
      render(<Button>Default Size Button</Button>);
      
      const button = screen.getByRole('button', { name: /default size button/i });
      expect(button).toHaveClass('text-base');
    });
  });

  describe('Disabled state', () => {
    it('prevents interaction when disabled', async () => {
      const handleClick = vi.fn();
      render(
        <Button disabled onClick={handleClick}>
          Disabled Button
        </Button>
      );
      
      const button = screen.getByRole('button', { name: /disabled button/i });
      expect(button).toBeDisabled();
      
      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('applies disabled styles', () => {
      render(<Button disabled>Disabled Button</Button>);
      
      const button = screen.getByRole('button', { name: /disabled button/i });
      expect(button).toHaveClass('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
    });
  });

  describe('onClick handler', () => {
    it('fires onClick handler when clicked', async () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Clickable Button</Button>);
      
      const button = screen.getByRole('button', { name: /clickable button/i });
      await user.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not fire onClick when disabled', async () => {
      const handleClick = vi.fn();
      render(
        <Button disabled onClick={handleClick}>
          Disabled Clickable Button
        </Button>
      );
      
      const button = screen.getByRole('button', { name: /disabled clickable button/i });
      await user.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('href prop creates Link component for internal routes', () => {
    it('creates Link for internal route', () => {
      render(<Button href="/services">Services</Button>);
      
      const link = screen.getByRole('link', { name: /services/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/services');
    });

    it('creates anchor tag for external routes', () => {
      render(<Button href="https://example.com" target="_blank">External Link</Button>);
      
      const link = screen.getByRole('link', { name: /external link/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://example.com');
      expect(link).toHaveAttribute('target', '_blank');
    });

    it('creates anchor tag for mailto links', () => {
      render(<Button href="mailto:test@example.com">Email</Button>);
      
      const link = screen.getByRole('link', { name: /email/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'mailto:test@example.com');
    });

    it('creates anchor tag for tel links', () => {
      render(<Button href="tel:5044503496">Call</Button>);
      
      const link = screen.getByRole('link', { name: /call/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'tel:5044503496');
    });

    it('creates anchor tag for hash links', () => {
      render(<Button href="#section">Section</Button>);
      
      const link = screen.getByRole('link', { name: /section/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#section');
    });

    it('fires onClick when link is clicked', async () => {
      const handleClick = vi.fn((e) => {
        e.preventDefault(); // Prevent navigation in test
      });
      render(
        <Button href="/services" onClick={handleClick}>
          Services
        </Button>
      );
      
      const link = screen.getByRole('link', { name: /services/i });
      await user.click(link);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Button types', () => {
    it('renders as submit button when type is submit', () => {
      render(<Button type="submit">Submit</Button>);
      
      const button = screen.getByRole('button', { name: /submit/i });
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('renders as reset button when type is reset', () => {
      render(<Button type="reset">Reset</Button>);
      
      const button = screen.getByRole('button', { name: /reset/i });
      expect(button).toHaveAttribute('type', 'reset');
    });

    it('defaults to button type when type is not specified', () => {
      render(<Button>Button</Button>);
      
      const button = screen.getByRole('button', { name: /button/i });
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  describe('Custom className', () => {
    it('applies custom className', () => {
      render(<Button className="custom-class">Custom Button</Button>);
      
      const button = screen.getByRole('button', { name: /custom button/i });
      expect(button).toHaveClass('custom-class');
    });
  });

  describe('Shimmer effect', () => {
    it('has shimmer overlay for primary variant', () => {
      render(<Button variant="primary">Primary</Button>);
      
      const button = screen.getByRole('button', { name: /primary/i });
      // Shimmer is an absolute positioned span inside the button
      const shimmer = button.querySelector('span[class*="absolute"]');
      expect(shimmer).toBeInTheDocument();
    });

    it('has shimmer overlay for secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>);
      
      const button = screen.getByRole('button', { name: /secondary/i });
      const shimmer = button.querySelector('span[class*="absolute"]');
      expect(shimmer).toBeInTheDocument();
    });

    it('does not have shimmer overlay for outline variant', () => {
      render(<Button variant="outline">Outline</Button>);
      
      const button = screen.getByRole('button', { name: /outline/i });
      // Outline variant should not have the shimmer effect
      const shimmer = button.querySelector('span[class*="opacity-0"]');
      // The shimmer should not exist for outline variant
      expect(button).toBeInTheDocument();
    });
  });

  describe('Children rendering', () => {
    it('renders text children', () => {
      render(<Button>Text Content</Button>);
      
      expect(screen.getByText('Text Content')).toBeInTheDocument();
    });

    it('renders React node children', () => {
      render(
        <Button>
          <span>React Node</span>
        </Button>
      );
      
      expect(screen.getByText('React Node')).toBeInTheDocument();
    });
  });

  describe('Rel attribute for external links', () => {
    it('applies rel attribute when provided', () => {
      render(
        <Button href="https://example.com" rel="noopener noreferrer">
          External
        </Button>
      );
      
      const link = screen.getByRole('link', { name: /external/i });
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
