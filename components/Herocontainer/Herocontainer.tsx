'use client';

import { motion } from 'framer-motion';
import Typography from '../GradientText/Typography';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  imageSrc: string;
  mobileImageSrc?: string;
  imageAlt?: string;
  onButtonClick?: () => void;
  textColor?: string;
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
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[91vh] overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mobileImageSrc || imageSrc})`,
          // Fallback for browsers that don't support media queries in JS
        }}
      >
        {/* Desktop Background (hidden on mobile) */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageSrc})`
          }}
        />
      </div>

      {/* Overlay */}
      <div className="  bg-black/40 z-10" />

      {/* Text Content Container */}
      <div className="relative flex md:items-center z-20 h-full max-w-[1300px] mx-auto py-10">
          
        <div
          className={` md:w-[50%] md:px-4 px-10  
            text-left ${textColor}
            `}
         
        >
          <div className="mb-4" data-aos="fade-right" data-aos-delay="0">            
            <Typography as='h2' variant="h2-medium-magistral">{title}</Typography>
          </div>
          <div className="mb-6 jakarta font-[400]"data-aos="fade-up" data-aos-delay="200">
            <Typography variant="body-regular-jakarta">{subtitle}</Typography>
          </div>
          
          {onButtonClick && (
            <button
              onClick={onButtonClick}
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold transition"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;