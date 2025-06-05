'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Typography from '../GradientText/Typography';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Slide = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  href: string;
  imageSrc: string;
  mobileImageSrc?: string;
  imageAlt?: string;
  onButtonClick?: () => void;
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
  const [imageLoaded, setImageLoaded] = useState(false);
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

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out' });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [currentSlide]);

  useEffect(() => {
    if (!autoplay || !imageLoaded) return;

    timeoutRef.current = setTimeout(() => {
      handleNextSlide();
    }, autoplayInterval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [autoplay, autoplayInterval, currentSlide, imageLoaded]);

  const handleNextSlide = () => {
    setImageLoaded(false); // Reset before next slide
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setImageLoaded(false); // Reset before previous slide
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen md:max-h-[91vh] overflow-hidden flex md:items-center items-start py-20 mt-10">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Image */}
        <div data-aos="fade-right" className="hidden md:block w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Mobile Image */}
        <div data-aos="fade-right" className="block md:hidden w-full h-full">
          <Image
            src={mobileImageSrc || imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container px-6 sm:px-6 mx-auto flex flex-col md:items-center items-start justify-center h-full">
          <div className="max-w-[1400px] md:px-20">
            <div className={`md:space-y-6 ${textAlign ?? 'text-left'} w-full md:${conWidth ?? 'w-[40%]'} text-${color}`}>
              <div data-aos="fade-right" className="mb-4" key={`title-${currentSlide}`}>
                <Typography as="h2" variant="h2-medium-magistral">{title}</Typography>
              </div>

              <div data-aos="fade-right" className="mb-6 jakarta font-[400]" key={`subtitle-${currentSlide}`}>
                <Typography variant="body-regular-jakarta">{subtitle}</Typography>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4 font-jakarta" key={`button-${currentSlide}`}>
                <Link href={href}>
                  <button
                    className={`font-jakarta md:text-md text-sm border-2 border-${color} md:px-6 md:py-2 px-4 py-1 rounded-md flex gap-2 items-center text-${color}`}
                  >
                    Explore More <ArrowRight size={20} />
                  </button>
                </Link>
                {price && (
                  <div>
                    <p className="md:text-sm text-xs">Priced at</p>
                    <span className="md:text-xl text-lg font-bold">PKR {price}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 md:top-1/2 top-2/3 transform -translate-y-1/2 bg-white/70 p-2 rounded-full z-40"
        onClick={handlePrevSlide}
      >
        <ArrowLeft size={24} />
      </button>
      <button
        className="absolute right-4 md:top-1/2 top-2/3 transform -translate-y-1/2 bg-white/70 p-2 rounded-full z-40"
        onClick={handleNextSlide}
      >
        <ArrowRight size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
