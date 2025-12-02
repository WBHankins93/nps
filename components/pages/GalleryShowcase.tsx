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
    <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex-shrink-0">
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

interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  title: string;
}

function AutoCarousel({ items, direction = 'left', speed = 1 }: { items: GalleryItem[]; direction?: 'left' | 'right'; speed?: number }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const scrollPositionRef = useRef(0);
  const firstSetWidthRef = useRef(0);

  // Duplicate items for seamless infinite scroll
  const duplicatedItems = useMemo(() => [...items, ...items, ...items], [items]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const calculateWidth = () => {
      const firstChild = carousel.firstElementChild as HTMLElement;
      if (!firstChild) return 0;
      
      const itemWidth = firstChild.offsetWidth;
      const gap = 8; // gap-2 = 8px
      const calculatedWidth = (itemWidth + gap) * items.length;
      return calculatedWidth;
    };

    const updateWidth = () => {
      const newWidth = calculateWidth();
      if (newWidth > 0 && newWidth !== firstSetWidthRef.current) {
        // Adjust scroll position proportionally when width changes
        if (firstSetWidthRef.current > 0) {
          const ratio = newWidth / firstSetWidthRef.current;
          scrollPositionRef.current = scrollPositionRef.current * ratio;
        }
        firstSetWidthRef.current = newWidth;
      }
    };

    const animate = () => {
      if (!carousel) return;

      // Recalculate width periodically to handle resize
      const currentWidth = calculateWidth();
      if (currentWidth > 0) {
        if (firstSetWidthRef.current === 0 || Math.abs(currentWidth - firstSetWidthRef.current) > 1) {
          updateWidth();
        }
      }

      if (firstSetWidthRef.current === 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      if (direction === 'left') {
        scrollPositionRef.current += speed;
        if (scrollPositionRef.current >= firstSetWidthRef.current) {
          scrollPositionRef.current = scrollPositionRef.current - firstSetWidthRef.current;
        }
      } else {
        scrollPositionRef.current -= speed;
        if (scrollPositionRef.current < 0) {
          scrollPositionRef.current = firstSetWidthRef.current + scrollPositionRef.current;
        }
      }

      carousel.scrollLeft = scrollPositionRef.current;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      updateWidth();
    };

    // Wait for layout to calculate proper widths
    const timeout = setTimeout(() => {
      updateWidth();
      animationFrameRef.current = requestAnimationFrame(animate);
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [direction, speed, items]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex gap-2 scrollbar-hide"
        style={{
          scrollBehavior: 'auto',
          overflowX: 'auto',
          willChange: 'scroll-position',
        }}
      >
        {duplicatedItems.map((item, index) => {
          if (!item.src) {
            console.warn(`Missing URL for gallery item: ${item.title}`);
            return null;
          }
          
          return item.type === 'video' ? (
            <div key={`${item.src}-${index}`} className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[300px] lg:w-[320px] xl:w-[360px]">
              <VideoItem src={item.src} title={item.title} />
            </div>
          ) : (
            <figure
              key={`${item.src}-${index}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex-shrink-0 w-[240px] sm:w-[280px] md:w-[300px] lg:w-[320px] xl:w-[360px]"
            >
              <Image
                src={item.src}
                alt={`${item.title} - Pool renovation project by NOLA Pool Solutions in New Orleans`}
                fill
                sizes="(max-width: 640px) 240px, (max-width: 767px) 280px, (max-width: 1023px) 300px, (max-width: 1279px) 320px, 360px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 py-2 text-xs font-semibold tracking-wide text-white sm:px-4 sm:py-3 sm:text-sm">
                {item.title}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default function GalleryShowcase() {
  const allItems = useMemo(() => [
    // Carousel 1 - nps-images folder
    {
      type: 'image' as const,
      src: '/nps-images/IMG_1_0108.jpg',
      title: "Round Pool Maintenance",
    },
    {
      type: 'image' as const,
      src: '/nps-images/IMG_1_0443.jpg',
      title: "Residential Pool Service",
    },
    {
      type: 'image' as const,
      src: '/nps-images/IMG_1_2109.jpg',
      title: "Freeform Pool Care",
    },
    {
      type: 'image' as const,
      src: '/nps-images/IMG_1_2911.jpg',
      title: "Robotic Pool Cleaning",
    },
    {
      type: 'image' as const,
      src: '/nps-images/IMG_1_2988.jpg',
      title: "Luxury Pool Service",
    },
    {
      type: 'video' as const,
      src: '/nps-images/IMG_1_2837.mp4',
      title: "Pool Service in Action",
    },
    // Carousel 1 - nps-newest-images folder
    {
      type: 'image' as const,
      src: '/nps-newest-images/IMG_1_5640.jpg',
      title: "Tropical Pool Maintenance",
    },
    // Carousel 2 - nps-newest-images folder
    {
      type: 'image' as const,
      src: '/nps-newest-images/IMG_2_5645.jpg',
      title: "Professional Pool Cleaning",
    },
    {
      type: 'image' as const,
      src: '/nps-newest-images/IMG_2_5650.jpg',
      title: "Lap Pool Service",
    },
    {
      type: 'image' as const,
      src: '/nps-newest-images/hero-background.jpg',
      title: "Pool and Spa Maintenance",
    },
    {
      type: 'image' as const,
      src: '/nps-newest-images/IMG_2_5804.jpg',
      title: "Classic Pool Care",
    },
    {
      type: 'image' as const,
      src: '/nps-newest-images/IMG_2_5853.jpg',
      title: "Brick Coping Pool Service",
    },
    {
      type: 'image' as const,
      src: '/nps-newest-images/IMG_2_6023.jpg',
      title: "Weekly Pool Maintenance",
    },
    {
      type: 'image' as const,
      src: '/nps-newest-images/IMG_2_6192.jpg',
      title: "Custom Tile Pool Care",
    },
    // Carousel 3 - nps-newest-images folder
    {
      type: 'image' as const,
      src: '/nps-newest-images/IMG_3_6235.jpg',
      title: "Standard Pool Service",
    },
    {
      type: 'image' as const,
      src: '/nps-newest-images/IMG_3_6630.jpg',
      title: "Commercial Pool Maintenance",
    },
    {
      type: 'image' as const,
      src: '/nps-newest-images/IMG_3_6674.jpg',
      title: "Modern Pool Care",
    },
    {
      type: 'image' as const,
      src: '/nps-newest-images/IMG_3_6843.jpg',
      title: "Privacy Fence Pool Service",
    },
    {
      type: 'image' as const,
      src: '/nps-newest-images/IMG_3_7004.jpg',
      title: "Spa Combination Pool Care",
    },
    {
      type: 'image' as const,
      src: '/nps-newest-images/IMG_3_7005.jpg',
      title: "Kidney-Shaped Pool Service",
    },
    {
      type: 'image' as const,
      src: '/nps-newest-images/IMG_3_7031.jpg',
      title: "Automated Pool Maintenance",
    },
  ], []);

  // Split into 3 groups of 7
  const carousel1 = allItems.slice(0, 7);
  const carousel2 = allItems.slice(7, 14);
  const carousel3 = allItems.slice(14, 21);

  return (
    <section className="relative w-full flex flex-col bg-[#0B1F3F] showcase-section" style={{ 
      height: 'auto',
      minHeight: 'calc(100vh - 80px - 64px)'
    }}>
      <div className="absolute inset-0 min-h-full opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(70,143,175,0.4),_transparent_55%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-start px-6 py-4 pb-12 text-white md:px-10 md:py-4 md:pb-8 lg:px-16">
        <div className="w-full max-w-7xl flex flex-col">
          {/* Header - moved up with less spacing */}
          <header className="mb-4 flex flex-col items-center space-y-1 text-center md:mb-6 md:space-y-2">
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

          {/* Three Auto-Scrolling Carousels - Single Column */}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
            <AutoCarousel items={carousel1} direction="left" speed={0.6} />
            <AutoCarousel items={carousel2} direction="right" speed={0.7} />
            <AutoCarousel items={carousel3} direction="left" speed={0.65} />
          </div>
        </div>
      </div>
    </section>
  );
}