'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What areas do you serve in New Orleans?",
    answer: "We serve Greater New Orleans, including Metairie, Kenner, Uptown, Garden District, Lakeview, and surrounding areas."
  },
  {
    question: "How often should I have my pool serviced?",
    answer: "Most pools benefit from weekly or bi-weekly maintenance. We'll assess your pool's specific needs during your initial consultation and recommend a service schedule that keeps your pool in optimal condition."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, NOLA Pool Solutions is fully licensed and insured. We're committed to providing professional, reliable service with complete peace of mind for our clients."
  },
  {
    question: "Do you offer emergency pool repairs?",
    answer: "Yes, we offer emergency repair services. Call or email us and we'll prioritize a same-day response whenever our routes allow. We understand that pool emergencies can't wait."
  },
  {
    question: "What pool services do you provide?",
    answer: "We offer comprehensive pool maintenance, equipment repair and diagnostics, renovation consultation, pool opening and closing services, chemical balancing, filter cleaning, and more."
  },
  {
    question: "How do I get a quote for pool services?",
    answer: "You can contact us through our contact form, call us at (504) 450-3496, or email nolapoolsolutions@gmail.com. We provide free consultations and transparent pricing for all services."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-12 md:py-16 bg-white flex justify-center">
        <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 w-full">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-midnight pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-ocean flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

