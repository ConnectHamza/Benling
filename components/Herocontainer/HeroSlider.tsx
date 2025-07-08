'use client';

import Image from 'next/image';
import { useEffect, useState, useRef, useCallback } from 'react';
import Typography from '../GradientText/Typography';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import DotLoader from '../Loader/Loader';


const SlideImage = ({
  src,
  alt,
  priority = false,
  isMobile = false,
  onLoad,
  hidden = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  isMobile?: boolean;
  onLoad?: () => void;
  hidden?: boolean;
}) => (
  <div
    className={`${isMobile ? 'block md:hidden' : 'hidden md:block'} w-full h-full ${hidden ? 'opacity-0 absolute' : ''}`}
  >
    <Image
      src={src}
      alt={alt}
      height={10000}
      width={10000}    
      className="object-cover object-center h-full w-full"
      priority={priority}
      onLoad={onLoad}
      sizes={isMobile ? '100vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'}
    />
  </div>
);


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
  const [nextSlide, setNextSlide] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const imageLoadedRef = useRef(false);

  const currentSlideData = slides[currentSlide] || {};
  const nextSlideData = nextSlide !== null ? slides[nextSlide] : null;

  // Slide navigation with loading state
  const goToSlide = useCallback((index: number) => {
    if (index === currentSlide || isLoading) return;
    
    setIsLoading(true);
    imageLoadedRef.current = false;
    setNextSlide(index);
  }, [currentSlide, isLoading]);

  const handleNextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  const handlePrevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  const handleImageLoad = useCallback(() => {
    imageLoadedRef.current = true;
    if (nextSlide !== null) {
      setIsLoading(false);
      setCurrentSlide(nextSlide);
      setNextSlide(null);
    }
  }, [nextSlide]);

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
    if (!autoplay || slides.length <= 1 || isLoading) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(handleNextSlide, autoplayInterval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [autoplay, autoplayInterval, handleNextSlide, slides.length, currentSlide, isLoading]);

  const pauseAutoplay = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const resumeAutoplay = useCallback(() => {
    if (autoplay && !timeoutRef.current && !isLoading) {
      timeoutRef.current = setTimeout(handleNextSlide, autoplayInterval);
    }
  }, [autoplay, autoplayInterval, handleNextSlide, isLoading]);

  // Preload next image when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined' && slides.length > 1) {
      const nextIndex = (currentSlide + 1) % slides.length;
      const img = new window.Image();
      img.src = slides[nextIndex].imageSrc;
      if (slides[nextIndex].mobileImageSrc) {
        const mobileImg = new window.Image();
        mobileImg.src = slides[nextIndex].mobileImageSrc!;
      }
    }
  }, [currentSlide, slides]);

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
  <SlideImage
    src={currentSlideData.imageSrc}
    alt={currentSlideData.imageAlt || 'Hero Image'}
    priority={currentSlide === 0}
  />
  <SlideImage
    src={currentSlideData.mobileImageSrc || currentSlideData.imageSrc}
    alt={currentSlideData.imageAlt || 'Hero Image'}
    priority={currentSlide === 0}
    isMobile
  />
  {nextSlide !== null && (
    <>
      <SlideImage
        src={slides[nextSlide].imageSrc}
        alt={slides[nextSlide].imageAlt || 'Hero Image'}
        hidden
        onLoad={handleImageLoad}
      />
      <SlideImage
        src={slides[nextSlide].mobileImageSrc || slides[nextSlide].imageSrc}
        alt={slides[nextSlide].imageAlt || 'Hero Image'}
        hidden
        onLoad={handleImageLoad}
        isMobile
      />
    </>
  )}
  <div className="absolute inset-0 bg-black/40" />
</div>


      {/* Loading indicator */}
{isLoading && <DotLoader />}


      {/* Slide Content */}
       <div className="relative z-10 w-full">
        <div className="container px-6 sm:px-6 mx-auto flex flex-col md:items-center items-start justify-center h-full">
          <div className="md:w-[1400px] md:px-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`
                  md:space-y-6 
                   text-left
                  w-full
                  md:w-[50%]
                  text-${currentSlideData.color || 'white'}
                `}
              >
                <div className="mb-4">
                  <Typography as="h1" variant="h2-bold-magistral">
                    {currentSlideData.title}
                  </Typography>
                </div>

                <div className="mb-6 jakarta font-[400]">
                  <Typography variant="body-regular-jakarta">
                    {currentSlideData.subtitle}
                  </Typography>
                </div>

                <div className="flex items-center gap-4 font-jakarta">
                  <Link href={currentSlideData.href} legacyBehavior>
                    <a
                      className={`font-jakarta md:text-md text-sm border-2 border-${currentSlideData.color || 'white'} md:px-6 md:py-2 px-4 py-1 rounded-md flex gap-2 items-center text-${currentSlideData.color || 'white'}`}
                    >
                      Explore More <ArrowRight size={20} />
                    </a>
                  </Link>

                  {currentSlideData.price && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <p className="md:text-sm text-xs">Priced at</p>
                      <span className="md:text-xl text-lg font-bold">PKR {currentSlideData.price}</span>
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
        className="absolute left-4 md:top-1/2 top-2/3 transform -translate-y-1/2 bg-white/70 p-2 rounded-full z-40 hover:bg-white transition-all disabled:opacity-50"
        onClick={handlePrevSlide}
        disabled={isLoading}
        aria-label="Previous slide"
      >
        <ArrowLeft size={24} />
      </button>
      <button
        className="absolute right-4 md:top-1/2 top-2/3 transform -translate-y-1/2 bg-white/70 p-2 rounded-full z-40 hover:bg-white transition-all disabled:opacity-50"
        onClick={handleNextSlide}
        disabled={isLoading}
        aria-label="Next slide"
      >
        <ArrowRight size={24} />
      </button>
    </section>
  );
};

export default HeroSection;