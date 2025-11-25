'use client';

import { useState, useEffect } from 'react';
import Button from "@/components/Button";

export default function HomeShowcase() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "NOLA Pool Solutions transformed our green swamp into a crystal-clear oasis. Best decision we ever made!",
      author: "Sarah M.",
      location: "Metairie",
      rating: 5
    },
    {
      quote: "They've been maintaining our pool for 2 years. Never had an issue, always on time, always professional.",
      author: "James R.",
      location: "Uptown New Orleans",
      rating: 5
    },
    {
      quote: "Fixed our pump in one day when another company said it would take a week. Highly recommend!",
      author: "Lisa T.",
      location: "Lakeview",
      rating: 5
    },
    {
      quote: "Their renovation guidance was invaluable. Our backyard is now the envy of the neighborhood!",
      author: "Michael K.",
      location: "Garden District",
      rating: 5
    }
  ];

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative w-full flex flex-col showcase-section" style={{ 
      height: 'auto',
      minHeight: 'calc(100vh - 80px - 64px)'
    }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 min-h-full"
        style={{
          backgroundImage: `url('/zhiqiang-wang-uWB32BEOnuw-unsplash.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 min-h-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(11, 31, 63, 0.78) 0%, rgba(27, 90, 125, 0.58) 45%, rgba(70, 143, 175, 0.62) 100%)",
        }}
      />

      {/* Content - flex-1 to fill space */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-8 md:px-10 md:py-6 lg:px-16">
        
        {/* Main Content - REDUCED PADDING - was p-8 md:p-10, now p-4 md:p-6 */}
        <div className="flex w-full max-w-5xl flex-col items-center text-center mx-auto">
          <div className="p-4 md:p-6 w-full flex flex-col items-center">
            <p className="text-xs uppercase tracking-[0.35em] text-white/90 md:text-sm drop-shadow-lg mb-3 text-center">
              Premium Pool Care | New Orleans
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_12px_32px_rgba(11,31,63,0.45)] md:text-5xl lg:text-6xl mb-4 text-center">
              NOLA Pool Solutions
            </h1>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/80 drop-shadow-lg md:text-sm text-center">
              Enjoy your pool; leave the work to us.
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/80 drop-shadow-lg md:text-sm text-center">
              Licensed · Insured · Community Trusted
            </p>
            <p className="text-sm text-white/90 mt-4 max-w-2xl leading-relaxed md:text-base text-center w-full">
              Professional pool maintenance, repair, and renovation services serving Greater New Orleans, Metairie, Kenner, Uptown, Westbank, and the Northshore. Trusted by homeowners across Louisiana for reliable pool care.
            </p>
          </div>
        </div>

        {/* SPACER DIV - REDUCED from h-10 md:h-12 to h-6 md:h-8 */}
        <div className="h-6 md:h-8"></div>

        {/* Buttons Container - Separate */}
        <div className="flex w-full max-w-5xl items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className="min-w-[200px] bg-white text hover:bg-white/90 text-center"
            >
              Start Your Quote
            </Button>
            <Button
              variant="primary"
              size="lg"
              href="/services"
              className="min-w-[200px] text-center"
            >
              View Services
            </Button>
          </div>
        </div>

        

        {/* SPACER DIV - REDUCED from h-12 md:h-16 to h-8 md:h-10 */}
        <div className="h-8 md:h-10"></div>

        {/* Testimonial Carousel */}
        <div className="w-full max-w-3xl">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-ocean to-cerulean" />
            <div className="relative z-10 flex flex-col items-center justify-center px-6 py-6 md:px-8 md:py-8 text-white min-h-[12rem] md:min-h-[14rem]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 absolute inset-0 translate-x-full'
                  }`}
                >
                  {/* Star Rating */}
                  <div className="flex justify-center gap-1 mb-5 md:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-white text-center leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="text-center">
                    <p className="text-white font-semibold text-lg">{testimonial.author}</p>
                    <p className="text-white/70 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              ))}

              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 mt-8 md:mt-10">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-white w-8'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}