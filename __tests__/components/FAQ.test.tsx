import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FAQ from '@/components/FAQ';

describe('FAQ Component', () => {
  const user = userEvent.setup();

  describe('All FAQ items render', () => {
    it('renders all FAQ questions', () => {
      render(<FAQ />);
      
      expect(screen.getByText(/what areas do you serve/i)).toBeInTheDocument();
      expect(screen.getByText(/how often should i have my pool serviced/i)).toBeInTheDocument();
      expect(screen.getByText(/are you licensed and insured/i)).toBeInTheDocument();
      expect(screen.getByText(/do you offer emergency pool repairs/i)).toBeInTheDocument();
      expect(screen.getByText(/what pool services do you provide/i)).toBeInTheDocument();
      expect(screen.getByText(/how do i get a quote/i)).toBeInTheDocument();
    });

    it('renders FAQ section heading', () => {
      render(<FAQ />);
      
      expect(screen.getByRole('heading', { name: /frequently asked questions/i })).toBeInTheDocument();
    });
  });

  describe('Clicking question toggles answer visibility', () => {
    it('shows answer when question is clicked', async () => {
      render(<FAQ />);
      
      const question = screen.getByText(/what areas do you serve/i);
      const answer = screen.queryByText(/we serve greater new orleans/i);
      
      // Answer should not be visible initially
      expect(answer).not.toBeInTheDocument();
      
      // Click question
      await user.click(question);
      
      // Answer should now be visible
      expect(screen.getByText(/we serve greater new orleans/i)).toBeInTheDocument();
    });

    it('hides answer when question is clicked again', async () => {
      render(<FAQ />);
      
      const question = screen.getByText(/what areas do you serve/i);
      
      // Open FAQ
      await user.click(question);
      expect(screen.getByText(/we serve greater new orleans/i)).toBeInTheDocument();
      
      // Close FAQ
      await user.click(question);
      
      // Answer should be hidden
      await new Promise(resolve => setTimeout(resolve, 100));
      expect(screen.queryByText(/we serve greater new orleans/i)).not.toBeInTheDocument();
    });

    it('toggles multiple FAQ items independently', async () => {
      render(<FAQ />);
      
      const question1 = screen.getByText(/what areas do you serve/i);
      const question2 = screen.getByText(/how often should i have my pool serviced/i);
      
      // Open first FAQ
      await user.click(question1);
      expect(screen.getByText(/we serve greater new orleans/i)).toBeInTheDocument();
      
      // Open second FAQ
      await user.click(question2);
      expect(screen.getByText(/most pools benefit from weekly/i)).toBeInTheDocument();
    });
  });

  describe('Only one FAQ item open at a time', () => {
    it('closes previous FAQ when new one is opened', async () => {
      render(<FAQ />);
      
      const question1 = screen.getByText(/what areas do you serve/i);
      const question2 = screen.getByText(/how often should i have my pool serviced/i);
      
      // Open first FAQ
      await user.click(question1);
      expect(screen.getByText(/we serve greater new orleans/i)).toBeInTheDocument();
      
      // Open second FAQ
      await user.click(question2);
      
      // First FAQ should be closed, second should be open
      await new Promise(resolve => setTimeout(resolve, 100));
      expect(screen.queryByText(/we serve greater new orleans/i)).not.toBeInTheDocument();
      expect(screen.getByText(/most pools benefit from weekly/i)).toBeInTheDocument();
    });
  });

  describe('FAQ schema markup present in DOM', () => {
    it('includes FAQPage schema in script tag', () => {
      render(<FAQ />);
      
      const script = document.querySelector('script[type="application/ld+json"]');
      expect(script).toBeInTheDocument();
      
      if (script) {
        const schema = JSON.parse(script.textContent || '');
        expect(schema['@context']).toBe('https://schema.org');
        expect(schema['@type']).toBe('FAQPage');
        expect(schema.mainEntity).toBeDefined();
        expect(Array.isArray(schema.mainEntity)).toBe(true);
        expect(schema.mainEntity.length).toBe(6);
      }
    });

    it('includes Question and Answer schema for each FAQ item', () => {
      render(<FAQ />);
      
      const script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        const schema = JSON.parse(script.textContent || '');
        const firstQuestion = schema.mainEntity[0];
        
        expect(firstQuestion['@type']).toBe('Question');
        expect(firstQuestion.name).toBeDefined();
        expect(firstQuestion.acceptedAnswer).toBeDefined();
        expect(firstQuestion.acceptedAnswer['@type']).toBe('Answer');
        expect(firstQuestion.acceptedAnswer.text).toBeDefined();
      }
    });
  });

  describe('Accessibility attributes work correctly', () => {
    it('has aria-expanded attribute on FAQ buttons', () => {
      render(<FAQ />);
      
      const question = screen.getByText(/what areas do you serve/i).closest('button');
      expect(question).toHaveAttribute('aria-expanded', 'false');
    });

    it('updates aria-expanded when FAQ is opened', async () => {
      render(<FAQ />);
      
      const question = screen.getByText(/what areas do you serve/i).closest('button');
      expect(question).toHaveAttribute('aria-expanded', 'false');
      
      await user.click(question!);
      expect(question).toHaveAttribute('aria-expanded', 'true');
    });

    it('updates aria-expanded when FAQ is closed', async () => {
      render(<FAQ />);
      
      const question = screen.getByText(/what areas do you serve/i).closest('button');
      
      // Open
      await user.click(question!);
      expect(question).toHaveAttribute('aria-expanded', 'true');
      
      // Close
      await user.click(question!);
      expect(question).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Icon rotates when FAQ opens', () => {
    it('applies rotate-180 class when FAQ is open', async () => {
      render(<FAQ />);
      
      const question = screen.getByText(/what areas do you serve/i).closest('button');
      const icon = question?.querySelector('svg');
      
      // Icon should not have rotate class initially
      expect(icon).not.toHaveClass('rotate-180');
      
      // Open FAQ
      await user.click(question!);
      
      // Icon should have rotate class
      expect(icon).toHaveClass('rotate-180');
    });

    it('removes rotate-180 class when FAQ is closed', async () => {
      render(<FAQ />);
      
      const question = screen.getByText(/what areas do you serve/i).closest('button');
      const icon = question?.querySelector('svg');
      
      // Open FAQ
      await user.click(question!);
      expect(icon).toHaveClass('rotate-180');
      
      // Close FAQ
      await user.click(question!);
      expect(icon).not.toHaveClass('rotate-180');
    });
  });

  describe('FAQ content', () => {
    it('displays correct answer for each question', async () => {
      render(<FAQ />);
      
      // Test first FAQ
      const question1 = screen.getByText(/what areas do you serve/i);
      await user.click(question1);
      expect(screen.getByText(/we serve greater new orleans/i)).toBeInTheDocument();
      
      // Test second FAQ
      const question2 = screen.getByText(/how often should i have my pool serviced/i);
      await user.click(question2);
      expect(screen.getByText(/most pools benefit from weekly/i)).toBeInTheDocument();
    });

    it('renders all 6 FAQ items', () => {
      render(<FAQ />);
      
      const buttons = screen.getAllByRole('button');
      // Filter to only FAQ buttons (exclude any other buttons)
      const faqButtons = buttons.filter(btn => 
        btn.getAttribute('aria-expanded') !== null
      );
      
      expect(faqButtons.length).toBe(6);
    });
  });
});
