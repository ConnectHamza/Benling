'use client';

import Image from 'next/image';
import { useEffect, useState, useRef, useCallback } from 'react';
import Typography from '../GradientText/Typography';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type Slide = {
  title?: string;
  subtitle?: string;
  href: string;
  imageSrc: string;
  mobileImageSrc?: string;
  imageAlt?: string;
  color?: string;
  price?: string;
  conWidth?: string;
  textAlign?: string;
};

interface HeroSectionProps {
  slides: Slide[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  slides = [],
  autoplay = true,
  autoplayInterval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const {
    title,
    subtitle,
    href,
    imageSrc,
    mobileImageSrc,
    imageAlt = 'Hero Image',
    color = 'white',
    price,
    conWidth,
    textAlign,
  } = slides[currentSlide] || {};

  // Slide navigation
  const handleNextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNextSlide();
      if (e.key === 'ArrowLeft') handlePrevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || slides.length <= 1) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(handleNextSlide, autoplayInterval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [autoplay, autoplayInterval, handleNextSlide, slides.length, currentSlide]);

  const pauseAutoplay = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const resumeAutoplay = useCallback(() => {
    if (autoplay && !timeoutRef.current) {
      timeoutRef.current = setTimeout(handleNextSlide, autoplayInterval);
    }
  }, [autoplay, autoplayInterval, handleNextSlide]);

  return (
    <section
      className="relative w-full h-screen md:max-h-[91vh] overflow-hidden flex md:items-center items-start py-20 mt-10"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
      onTouchStart={pauseAutoplay}
      onTouchEnd={resumeAutoplay}
    >
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        <div className="hidden md:block w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority={currentSlide === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>
        <div className="block md:hidden w-full h-full">
          <Image
            src={mobileImageSrc || imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority={currentSlide === 0}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Slide Content */}
      <div className="relative z-10 w-full">
        <div className="container px-6 sm:px-6 mx-auto flex flex-col md:items-center items-start justify-center h-full">
          <div className="max-w-[1400px] md:px-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`md:space-y-6 ${textAlign ?? 'text-left'} w-full md:${conWidth ?? 'w-[40%]'} text-${color}`}
              >
                <div className="mb-4">
                  <Typography as="h2" variant="h2-medium-magistral">{title}</Typography>
                </div>

                <div className="mb-6 jakarta font-[400]">
                  <Typography variant="body-regular-jakarta">{subtitle}</Typography>
                </div>

                <div className="flex items-center gap-4 font-jakarta">
                  <Link href={href} legacyBehavior>
                    <a
                      className={`font-jakarta md:text-md text-sm border-2 border-${color} md:px-6 md:py-2 px-4 py-1 rounded-md flex gap-2 items-center text-${color}`}
                    >
                      Explore More <ArrowRight size={20} />
                    </a>
                  </Link>

                  {price && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <p className="md:text-sm text-xs">Priced at</p>
                      <span className="md:text-xl text-lg font-bold">PKR {price}</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 md:top-1/2 top-2/3 transform -translate-y-1/2 bg-white/70 p-2 rounded-full z-40 hover:bg-white transition-all"
        onClick={handlePrevSlide}
        aria-label="Previous slide"
      >
        <ArrowLeft size={24} />
      </button>
      <button
        className="absolute right-4 md:top-1/2 top-2/3 transform -translate-y-1/2 bg-white/70 p-2 rounded-full z-40 hover:bg-white transition-all"
        onClick={handleNextSlide}
        aria-label="Next slide"
      >
        <ArrowRight size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
