'use client';

import { useState } from 'react';
import Button from '../Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement form submission to email
    // This will need to be connected to an email service or backend
    // For now, we'll simulate a submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', serviceType: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0a4c7a] via-[#1e88e5] to-[#42a5f5] py-20 md:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto font-light">
            Ready to experience premier pool service? Contact us today for a free quote!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-[#0a4c7a] mb-8">Send Us a Message</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you! We&apos;ll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e88e5] focus:border-transparent transition-all text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e88e5] focus:border-transparent transition-all text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e88e5] focus:border-transparent transition-all text-base"
                  placeholder="(504) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e88e5] focus:border-transparent transition-all text-base"
                >
                  <option value="">Select a service</option>
                  <option value="maintenance">Pool Maintenance</option>
                  <option value="repair">Equipment Repair</option>
                  <option value="renovation">Renovation</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e88e5] focus:border-transparent transition-all text-base"
                  placeholder="Tell us about your pool needs..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information & Quick Actions */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="mailto:nolapoolsolutions@gmail.com"
                  className="flex items-center gap-5 text-white hover:text-[#d4af37] transition-colors group"
                >
                  <div className="w-14 h-14 bg-[#d4af37] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Email</p>
                    <p className="text-blue-100 text-base">nolapoolsolutions@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+15045550123"
                  className="flex items-center gap-5 text-white hover:text-[#d4af37] transition-colors group"
                >
                  <div className="w-14 h-14 bg-[#d4af37] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Phone</p>
                    <p className="text-blue-100 text-base">(504) 555-0123</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Schedule Appointment */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Schedule an Appointment</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Book a convenient time for a consultation or service appointment.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="w-full"
                href="#"
                onClick={(e) => {
                  e?.preventDefault();
                  alert('Google Calendar integration will be set up here. Please configure Google Workspace calendar scheduling link.');
                }}
              >
                View Calendar
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Button>
            </div>

            {/* Leave a Review */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Leave Us a Review</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Love our service? Share your experience on Google!
              </p>
              <Button
                variant="outline"
                size="lg"
                className="w-full bg-white/10 border-white text-white hover:bg-white hover:text-[#1e88e5]"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e?.preventDefault();
                  alert('Google Reviews link will be added here. Please provide your Google Business profile review URL.');
                }}
              >
                Write a Review
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Note for implementation */}
        <div className="mt-12 bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <p className="text-gray-800 text-base">
            <strong className="text-yellow-800">Developer Note:</strong> The contact form needs to be connected to an email service
            (like SendGrid, Mailgun, or a serverless function) to send emails to nolapoolsolutions@gmail.com.
            The Google Calendar and Reviews links need to be updated with actual URLs from Google Workspace and Google Business Profile.
          </p>
        </div>
      </div>
    </section>
  );
}
