'use client';

import { useState } from 'react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Actual pool images from /public directory
  const galleryImages = [
    {
      id: 1,
      title: 'Crystal Clear Pool',
      description: 'Residential pool maintenance',
      image: '/adonyi-gabor-DfSDlvCZz40-unsplash.jpg',
      alt: 'Crystal clear residential pool with perfect water maintenance',
    },
    {
      id: 2,
      title: 'Equipment Installation',
      description: 'New pump and filter system',
      image: '/artem-militonian-UYW6FZLlnL8-unsplash.jpg',
      alt: 'Professional pool equipment installation',
    },
    {
      id: 3,
      title: 'Pool Renovation',
      description: 'Complete pool resurfacing',
      image: '/jubeo-hernandez-ZmWLGkPe1Sg-unsplash.jpg',
      alt: 'Beautiful pool renovation project with modern design',
    },
    {
      id: 4,
      title: 'Tile Work',
      description: 'Custom tile installation',
      image: '/tim-bermudez-sIiyCDSbDpE-unsplash.jpg',
      alt: 'Elegant custom tile work on pool edge',
    },
    {
      id: 5,
      title: 'Pool Cleaning',
      description: 'Weekly maintenance service',
      image: '/adheesha-paranagama-kOYh8C_xLUQ-unsplash.jpg',
      alt: 'Professional pool cleaning and maintenance service',
    },
    {
      id: 6,
      title: 'Pool Design',
      description: 'Custom pool design and construction',
      image: '/zhiqiang-wang-uWB32BEOnuw-unsplash.jpg',
      alt: 'Stunning custom pool design with beautiful water features',
    },
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white via-[#F8FBFF] to-white py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1F3F] mb-6 md:mb-8">
            Our Work
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#1B5A7D] to-transparent mx-auto mb-8 md:mb-10"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-[#536471] max-w-3xl mx-auto font-light leading-relaxed px-4">
            Take a look at some of our recent projects and see the quality we bring to every pool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
              onClick={() => setSelectedImage(index)}
            >
              {/* Actual Image */}
              <img
                src={image.image}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  {image.title}
                </h3>
                <p className="text-sm md:text-base text-white/90 drop-shadow-md">
                  {image.description}
                </p>
              </div>

              {/* Hover effect indicator */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>


        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-[#D4AF6E] transition-colors z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div 
              className="max-w-6xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].image}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="bg-gradient-to-r from-[#1B5A7D] to-[#2C7DA0] p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">{galleryImages[selectedImage].title}</h3>
                <p className="text-lg md:text-xl text-white/90">{galleryImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
