'use client';

import Image from "next/image";
import { useRef, useEffect, useMemo } from "react";


function VideoItem({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set initial time to 10 seconds
    video.currentTime = 10;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 19) {
        video.currentTime = 10; // Loop back to 10 seconds
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        autoPlay
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-3 text-sm font-semibold tracking-wide text-white">
        {title}
      </figcaption>
    </figure>
  );
}

export default function GalleryShowcase() {
  const items = useMemo(() => [
    {
      type: 'image' as const,
      src: '/nps-images/IMG_0108.jpg',
      title: "Professional pool maintenance",
    },
    {
      type: 'image' as const,
      src: '/nps-images/IMG_0443.jpg',
      title: "Expert equipment service",
    },
    {
      type: 'image' as const,
      src: '/nps-images/IMG_2109.jpg',
      title: "Quality pool renovation",
    },
    {
      type: 'image' as const,
      src: '/nps-images/IMG_2911.jpg',
      title: "Precision pool care",
    },
    {
      type: 'image' as const,
      src: '/nps-images/IMG_2988.jpg',
      title: "Complete pool solutions",
    },
    {
      type: 'video' as const,
      src: '/nps-images/IMG_2837.mp4',
      title: "Our work in action",
    },
  ], []);
  
  return (
    <section className="relative w-full flex flex-col bg-[#0B1F3F] showcase-section" style={{ 
      height: 'auto',
      minHeight: 'calc(100vh - 80px - 64px)'
    }}>
      <div className="absolute inset-0 min-h-full opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(70,143,175,0.4),_transparent_55%)]" />
      </div>

      {/* Content - flex-1 to fill space, flex layout */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-start md:justify-center px-6 py-8 pb-20 text-white md:px-10 md:py-6 md:pb-6 lg:px-16">
        <div className="w-full max-w-6xl flex flex-col md:h-full md:justify-center">
          <header className="mb-6 flex flex-col items-center space-y-2 text-center md:mb-8 md:space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-white/60 md:text-sm">
              Portfolio Preview
            </p>
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Past Work Gallery
            </h1>
            <p className="max-w-2xl text-center text-sm leading-relaxed text-white/80 md:text-base">
              A curated look at recent renovations and maintenance clients across greater New Orleans.
              Each project is an expression of our commitment to precision, ambience, and lasting quality.
            </p>
          </header>

          {/* Compact 3-column grid to fit viewport */}
          <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {items.map((item, index) => {
              if (!item.src) {
                console.warn(`Missing URL for gallery item: ${item.title}`);
                return null;
              }
              
              return item.type === 'video' ? (
                <VideoItem key={`${item.src}-${index}`} src={item.src} title={item.title} />
              ) : (
                <figure
                  key={`${item.src}-${index}`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <Image
                    src={item.src}
                    alt={`${item.title} - Pool renovation project by NOLA Pool Solutions in New Orleans`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-3 text-sm font-semibold tracking-wide text-white">
                    {item.title}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}