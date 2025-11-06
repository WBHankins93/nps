'use client';

import { useState } from 'react';
import FleurDeLis from '../FleurDeLis';

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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fbff] via-white to-[#e3f2fd] py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 opacity-5">
        <FleurDeLis className="w-32 h-32" color="#1e88e5" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-5">
        <FleurDeLis className="w-32 h-32" color="#1e88e5" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <FleurDeLis className="w-12 h-12 text-[#d4af37]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a4c7a] mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent projects and see the quality we bring to every pool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] bg-gradient-to-br from-[#1e88e5] to-[#42a5f5] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
              onClick={() => setSelectedImage(index)}
            >
              {/* Placeholder with icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                <svg
                  className="w-20 h-20 mb-4 opacity-50 group-hover:opacity-70 transition-opacity"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                <h3 className="text-xl font-bold text-center mb-2">{image.title}</h3>
                <p className="text-sm text-blue-100 text-center">{image.description}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white text-sm">{image.placeholder}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note for client */}
        <div className="mt-12 text-center bg-white rounded-xl p-6 shadow-md border border-blue-100">
          <p className="text-gray-700">
            <strong className="text-[#1e88e5]">Note:</strong> Replace these placeholders with your actual pool project photos
            to showcase your excellent work to potential customers.
          </p>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[#d4af37] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="max-w-4xl w-full bg-gradient-to-br from-[#1e88e5] to-[#42a5f5] rounded-xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">{galleryImages[selectedImage].title}</h3>
              <p className="text-xl mb-4">{galleryImages[selectedImage].description}</p>
              <p className="text-blue-100">{galleryImages[selectedImage].placeholder}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
