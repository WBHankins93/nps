import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NextRequest } from 'next/server';
import { POST } from '@/app/api/contact/route';
import { Resend } from 'resend';

// Mock Resend
vi.mock('resend', () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn(),
    },
  })),
}));

describe('Contact API Route', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env = {
      ...originalEnv,
      RESEND_API_KEY: 'test-api-key',
      RESEND_FROM_EMAIL: 'test@example.com',
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('POST request with valid data', () => {
    it('returns success when email is sent successfully', async () => {
      const mockSend = vi.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null });
      (Resend as any).mockImplementation(() => ({
        emails: { send: mockSend },
      }));

      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '504-450-3496',
        service: 'maintenance',
        message: 'Test message',
      };

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toBe('Form submitted successfully');
      expect(mockSend).toHaveBeenCalled();
    });

    it('sends email with correct recipient', async () => {
      const mockSend = vi.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null });
      (Resend as any).mockImplementation(() => ({
        emails: { send: mockSend },
      }));

      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
      };

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      await POST(request);

      expect(mockSend).toHaveBeenCalledWith(
        expect.objectContaining({
          to: ['nolapoolsolutions@gmail.com'],
        })
      );
    });

    it('formats service type correctly in email', async () => {
      const mockSend = vi.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null });
      (Resend as any).mockImplementation(() => ({
        emails: { send: mockSend },
      }));

      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
        service: 'maintenance',
      };

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      await POST(request);

      const emailCall = mockSend.mock.calls[0][0];
      expect(emailCall.html).toContain('Recurring Maintenance');
    });

    it('handles all service types correctly', async () => {
      const mockSend = vi.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null });
      (Resend as any).mockImplementation(() => ({
        emails: { send: mockSend },
      }));

      const serviceTypes = [
        { input: 'maintenance', expected: 'Recurring Maintenance' },
        { input: 'repair', expected: 'Equipment Repair' },
        { input: 'renovation', expected: 'Renovation Planning' },
        { input: 'other', expected: 'Other Service' },
      ];

      for (const { input, expected } of serviceTypes) {
        vi.clearAllMocks();
        const requestBody = {
          name: 'John Doe',
          email: 'john@example.com',
          service: input,
        };

        const request = new NextRequest('http://localhost:3000/api/contact', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: { 'Content-Type': 'application/json' },
        });

        await POST(request);

        const emailCall = mockSend.mock.calls[0][0];
        expect(emailCall.html).toContain(expected);
      }
    });

    it('includes phone number in email when provided', async () => {
      const mockSend = vi.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null });
      (Resend as any).mockImplementation(() => ({
        emails: { send: mockSend },
      }));

      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '504-450-3496',
      };

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      await POST(request);

      const emailCall = mockSend.mock.calls[0][0];
      expect(emailCall.html).toContain('504-450-3496');
    });

    it('includes message in email when provided', async () => {
      const mockSend = vi.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null });
      (Resend as any).mockImplementation(() => ({
        emails: { send: mockSend },
      }));

      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message content',
      };

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      await POST(request);

      const emailCall = mockSend.mock.calls[0][0];
      expect(emailCall.html).toContain('Test message content');
    });
  });

  describe('Missing required fields returns 400 error', () => {
    it('returns 400 when name is missing', async () => {
      const requestBody = {
        email: 'john@example.com',
      };

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Name and email are required');
    });

    it('returns 400 when email is missing', async () => {
      const requestBody = {
        name: 'John Doe',
      };

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Name and email are required');
    });

    it('returns 400 when both name and email are missing', async () => {
      const requestBody = {};

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Name and email are required');
    });
  });

  describe('Missing RESEND_API_KEY returns 500 error', () => {
    it('returns 500 when RESEND_API_KEY is not configured', async () => {
      process.env.RESEND_API_KEY = '';

      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
      };

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toContain('Email service is not configured');
    });
  });

  describe('Email sending failure handled correctly', () => {
    it('returns 500 when Resend API returns error', async () => {
      const mockSend = vi.fn().mockResolvedValue({
        data: null,
        error: { message: 'API error', status: 400 },
      });
      (Resend as any).mockImplementation(() => ({
        emails: { send: mockSend },
      }));

      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
      };

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe('Failed to send email');
    });

    it('includes error details in response when available', async () => {
      const mockSend = vi.fn().mockResolvedValue({
        data: null,
        error: { message: 'Invalid API key' },
      });
      (Resend as any).mockImplementation(() => ({
        emails: { send: mockSend },
      }));

      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
      };

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.details).toBeDefined();
    });
  });

  describe('HTML email template generation', () => {
    it('generates HTML email with correct structure', async () => {
      const mockSend = vi.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null });
      (Resend as any).mockImplementation(() => ({
        emails: { send: mockSend },
      }));

      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '504-450-3496',
        service: 'maintenance',
        message: 'Test message',
      };

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      await POST(request);

      const emailCall = mockSend.mock.calls[0][0];
      expect(emailCall.html).toContain('NOLA Pool Solutions');
      expect(emailCall.html).toContain('John Doe');
      expect(emailCall.html).toContain('john@example.com');
      expect(emailCall.html).toContain('504-450-3496');
      expect(emailCall.html).toContain('Recurring Maintenance');
      expect(emailCall.html).toContain('Test message');
    });

    it('uses default from email when RESEND_FROM_EMAIL is not set', async () => {
      delete process.env.RESEND_FROM_EMAIL;

      const mockSend = vi.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null });
      (Resend as any).mockImplementation(() => ({
        emails: { send: mockSend },
      }));

      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
      };

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      await POST(request);

      const emailCall = mockSend.mock.calls[0][0];
      expect(emailCall.from).toBe('onboarding@resend.dev');
    });
  });

  describe('Error handling', () => {
    it('returns 500 on unexpected errors', async () => {
      vi.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Unexpected error'));

      const requestBody = {
        name: 'John Doe',
        email: 'john@example.com',
      };

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      // Mock Resend to throw an error
      (Resend as any).mockImplementation(() => {
        throw new Error('Unexpected error');
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe('Internal server error');
    });
  });
});
