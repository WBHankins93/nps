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
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0B1F3F] via-[#1B5A7D] to-[#2C7DA0] py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* More visible background image overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'url(/artem-militonian-UYW6FZLlnL8-unsplash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
            Get In Touch
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF6E] to-transparent mx-auto mb-8 md:mb-10"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Ready to experience premier pool service? Contact us today for a free quote!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-14">
          {/* Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 md:p-12 lg:p-14 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3F] mb-8 md:mb-10">Send Us a Message</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you! We&apos;ll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-7">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#536471] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B5A7D] focus:border-[#1B5A7D] transition-all text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#536471] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B5A7D] focus:border-[#1B5A7D] transition-all text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#536471] mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B5A7D] focus:border-[#1B5A7D] transition-all text-base"
                  placeholder="(504) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-[#536471] mb-2">
                  Service Needed *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B5A7D] focus:border-[#1B5A7D] transition-all text-base"
                >
                  <option value="">Select a service</option>
                  <option value="maintenance">Pool Maintenance</option>
                  <option value="repair">Equipment Repair</option>
                  <option value="renovation">Renovation</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#536471] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B5A7D] focus:border-[#1B5A7D] transition-all text-base resize-none"
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
          <div className="space-y-8 md:space-y-10">
            {/* Direct Contact */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 md:p-12 border border-white/30 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10">Contact Information</h3>

              <div className="space-y-6 md:space-y-8">
                <a
                  href="mailto:nolapoolsolutions@gmail.com"
                  className="flex items-center gap-4 md:gap-5 text-white hover:text-[#D4AF6E] transition-colors group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#B8956A] to-[#D4AF6E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Email</p>
                    <p className="text-white/90 text-sm md:text-base">nolapoolsolutions@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+15045550123"
                  className="flex items-center gap-4 md:gap-5 text-white hover:text-[#D4AF6E] transition-colors group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#B8956A] to-[#D4AF6E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Phone</p>
                    <p className="text-white/90 text-sm md:text-base">(504) 555-0123</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Schedule Appointment */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 md:p-12 border border-white/30 shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Schedule an Appointment</h3>
              <p className="text-white/80 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Button>
            </div>

            {/* Leave a Review */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 md:p-12 border border-white/30 shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Leave Us a Review</h3>
              <p className="text-white/80 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Love our service? Share your experience on Google!
              </p>
              <Button
                variant="outline"
                size="lg"
                className="w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-[#1B5A7D]"
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
      </div>
    </section>
  );
}
