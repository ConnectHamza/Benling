'use client';

import Image from 'next/image';
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
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Desktop Image */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden absolute inset-0 z-0">
        <img
          src={mobileImageSrc || imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain"
          style={{ backgroundColor: '#000' }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <motion.div
        className={`absolute z-20 w-full px-6 sm:px-10 max-w-[800px] mx-auto
          text-left ${textColor}
          top-[8%] md:top-1/2 transform -translate-y-0 md:-translate-y-1/2`}
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
  );
};

export default HeroSection;
