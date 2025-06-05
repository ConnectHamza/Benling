'use client';

import { motion } from 'framer-motion';
import Typography from '../GradientText/Typography';
import Link from 'next/link';
import { ArrowRight, BookDown } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  imageSrc: string;
  mobileImageSrc?: string;
  imageAlt?: string;
  onButtonClick?: () => void;
  textColor?: string;
  href?: string; // Updated type to string
  color?: string;
  price?: string;
}

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  imageSrc,
  mobileImageSrc,
  imageAlt = 'Hero Image',
  onButtonClick,
  textColor = 'text-white',
  href,
  color = 'white', // Default color
  price,
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[91vh] overflow-hidden z-40">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mobileImageSrc || imageSrc})`,
        }}
      >
        {/* Desktop Background (hidden on mobile) */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        />
      </div>

      {/* Overlay */}
      <div className="bg-black/40 z-10" />

      {/* Text Content Container */}
      <div className="relative flex md:items-center z-20 h-full max-w-[1300px] mx-auto py-10">
        <div
          className={`md:w-[50%] md:px-4 px-6  
            text-left ${textColor}`}
        >
          {/* Title */}
          <div className="mb-4" data-aos="fade-right" data-aos-delay="0">
            <Typography as="h2" variant="h2-medium-magistral">
              {title}
            </Typography>
          </div>

          {/* Subtitle */}
          <div className="mb-6 jakarta font-[400]" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="body-regular-jakarta">{subtitle}</Typography>
          </div>

          {/* Button and Pricing */}
          {(href || price) && (
            <div
              className="md:flex hidden items-center gap-4 font-jakarta"
              data-aos="fade-up"
              data-aos-delay="1000" // 1 second delay after subtitle
              data-aos-duration="800" // 0.8 second duration
            >
              {/* Button */}
              {href && (
                <Link href={href}>
                  <button
                    className={`font-jakarta md:text-md text-sm border-2 border-${color} md:px-6 md:py-2 px-4 py-1 rounded-md flex gap-2 items-center text-${color}`}
                  >
                    Download Brochure <BookDown size={20} />
                  </button>
                </Link>
              )}

              {/* Price */}
              {price && (
                <div>
                  <p className="md:text-sm text-xs">Priced at</p>
                  <span className="md:text-xl text-lg font-bold">PKR {price}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;