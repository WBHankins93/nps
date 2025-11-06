'use client';

import { useState } from 'react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - client can replace with actual pool photos
  const galleryImages = [
    {
      id: 1,
      title: 'Crystal Clear Pool',
      description: 'Residential pool maintenance',
      placeholder: 'Pool maintenance project showcasing crystal clear water',
    },
    {
      id: 2,
      title: 'Equipment Installation',
      description: 'New pump and filter system',
      placeholder: 'Professional equipment installation',
    },
    {
      id: 3,
      title: 'Pool Renovation',
      description: 'Complete pool resurfacing',
      placeholder: 'Beautiful pool renovation project',
    },
    {
      id: 4,
      title: 'Tile Work',
      description: 'Custom tile installation',
      placeholder: 'Elegant custom tile work',
    },
    {
      id: 5,
      title: 'Commercial Pool',
      description: 'Large commercial pool service',
      placeholder: 'Commercial pool maintenance',
    },
    {
      id: 6,
      title: 'Pool Cleaning',
      description: 'Weekly maintenance service',
      placeholder: 'Professional pool cleaning service',
    },
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#f8fbff] via-white to-[#e3f2fd] py-20 md:py-24 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a4c7a] mb-6">
            Our Work
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Take a look at some of our recent projects and see the quality we bring to every pool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] bg-gradient-to-br from-[#1e88e5] to-[#42a5f5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
              onClick={() => setSelectedImage(index)}
            >
              {/* Placeholder with icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                <svg
                  className="w-24 h-24 mb-6 opacity-50 group-hover:opacity-70 transition-opacity"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                <h3 className="text-2xl font-bold text-center mb-3">{image.title}</h3>
                <p className="text-base text-blue-100 text-center">{image.description}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 w-full">
                  <p className="text-white text-base">{image.placeholder}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note for client */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 md:p-10 shadow-md border border-blue-100">
          <p className="text-gray-700 text-lg">
            <strong className="text-[#1e88e5]">Note:</strong> Replace these placeholders with your actual pool project photos
            to showcase your excellent work to potential customers.
          </p>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-[#d4af37] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="max-w-4xl w-full bg-gradient-to-br from-[#1e88e5] to-[#42a5f5] rounded-2xl p-12 text-white">
              <h3 className="text-4xl font-bold mb-6">{galleryImages[selectedImage].title}</h3>
              <p className="text-2xl mb-4">{galleryImages[selectedImage].description}</p>
              <p className="text-xl text-blue-100">{galleryImages[selectedImage].placeholder}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
