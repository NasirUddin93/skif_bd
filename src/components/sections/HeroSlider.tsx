'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroSlide } from '@/types';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const slides: HeroSlide[] = [
  {
    id: '1',
    title: 'Empowering Youth Through Shotokan Karate',
    subtitle: 'Join the largest Shotokan Karate federation in Bangladesh and discover your true potential through discipline, respect, and rigorous training.',
    image: '/images/Gallery/GS-Pic-1-Cw.jpg',
    cta1: { label: 'Find a Dojo', href: '/dojos' },
    cta2: { label: 'Upcoming Tournaments', href: '/events' },
  },
  {
    id: '2',
    title: 'Excellence in Competition and Character',
    subtitle: 'From local dojos to international arenas, our athletes demonstrate the true spirit of Shotokan Karate across the globe.',
    image: '/images/Gallery/P-2.jpg',
    cta1: { label: 'Latest News', href: '/news' },
    cta2: { label: 'Our Philosophy', href: '/structure' },
  },
  {
    id: '3',
    title: 'Train Under World-Class Instructors',
    subtitle: 'Learn from certified SKIF instructors dedicated to preserving the authentic teachings of Kancho Nobuaki Kanazawa.',
    image: '/images/Gallery/P-3.jpg',
    cta1: { label: 'Executive Committee', href: '/about/committee' },
    cta2: { label: 'Contact Us', href: '/contact' },
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div 
      className="relative w-full h-[600px] lg:h-[700px] overflow-hidden bg-navy"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Background Image (Right Side) */}
          <div className="absolute inset-0 md:left-1/3 w-full md:w-2/3 h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Gradient overlay for mobile/tablet to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent md:hidden" />
          </div>

          {/* Solid Color Block (Left Side - WKF Style Asymmetric Split) */}
          <div className="hidden md:block absolute top-0 left-0 bottom-0 w-1/2 bg-navy hero-clip" />

          {/* Content */}
          <div className="relative z-20 h-full section-container flex items-center">
            <div className="w-full md:w-1/2 lg:w-5/12 pt-12 md:pt-0">
              <div
                className={cn(
                  "transform transition-all duration-1000 delay-100",
                  index === currentSlide ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                )}
              >
                <div className="inline-block mb-4 px-3 py-1 bg-crimson/20 border border-crimson/30 rounded text-crimson-light text-xs font-bold uppercase tracking-widest">
                  SKIF-Bangladesh
                </div>
                <h1 className="heading-display text-white mb-6 leading-none">
                  {slide.title}
                </h1>
                <p className="text-white/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={slide.cta1.href}>
                    <Button variant="crimson" size="lg" className="w-full sm:w-auto">
                      {slide.cta1.label}
                    </Button>
                  </Link>
                  <Link href={slide.cta2.href}>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/30 hover:bg-white hover:text-navy hover:border-white">
                      {slide.cta2.label}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="section-container flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "h-1.5 transition-all duration-300 rounded-full",
                index === currentSlide ? "w-12 bg-crimson" : "w-4 bg-white/30 hover:bg-white/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
