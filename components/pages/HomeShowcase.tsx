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
    <section className="relative h-full min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/zhiqiang-wang-uWB32BEOnuw-unsplash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(11, 31, 63, 0.78) 0%, rgba(27, 90, 125, 0.58) 45%, rgba(70, 143, 175, 0.62) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full min-h-screen flex-col items-center justify-center px-6 py-12 md:px-10 md:py-16 lg:px-16">
        
        {/* Main Content - No Background */}
        <div className="flex w-full max-w-5xl flex-col items-center text-center">
          <div className="p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-white/90 md:text-sm drop-shadow-lg mb-3">
              Premium Pool Care | New Orleans
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_12px_32px_rgba(11,31,63,0.45)] md:text-5xl lg:text-6xl mb-4">
              NOLA Pool Solutions
            </h1>
            <p className="text-lg font-medium leading-relaxed text-white drop-shadow-lg md:text-xl max-w-3xl mx-auto mb-4">
              We maintain your pool so perfectly, you'll forget you even have one. Guaranteed crystal-clear water, every week.
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/80 drop-shadow-lg md:text-sm">
              Licensed · Insured · Trusted by 500+ NOLA Families
            </p>
          </div>
        </div>

        {/* SPACER DIV */}
        <div className="h-10 md:h-12"></div>

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
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
              </svg>
            </Button>
            <Button
              variant="primary"
              size="lg"
              href="/services"
              className="min-w-[200px] text-center"
            >
              View Services
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
              </svg>
            </Button>
          </div>
        </div>

        {/* SPACER DIV */}
        <div className="h-12 md:h-16"></div>

        {/* Testimonial Carousel */}
        <div className="w-full max-w-3xl">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-ocean to-cerulean" />
            <div className="relative z-10 flex flex-col items-center justify-center px-10 py-10 md:px-16 md:py-16 text-white min-h-[14rem] md:min-h-[18rem]">
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