'use client';

import { motion } from 'framer-motion';
import Typography from '../GradientText/Typography';

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  imageSrc,
  mobileImageSrc,
  imageAlt = 'Hero Image',
  onButtonClick,
  textColor = 'text-white',
}) => {
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
          
        <motion.div
          className={` md:w-[50%] px-6 sm:px-10 
            text-left ${textColor}
            top-[8%] md:top-1/2 md:-translate-y-1/2`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4">
            <Typography variant="h2-medium-magistral">{title}</Typography>
          </div>
          <div className="mb-6 jakarta font-[400]">
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
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;