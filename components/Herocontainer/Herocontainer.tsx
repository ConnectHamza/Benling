'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Typography from '../GradientText/Typography';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  imageSrc: string;
  imageAlt?: string;
  onButtonClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  imageSrc,
  imageAlt = 'Hero Image',
  onButtonClick,
}) => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover w-full h-full"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <motion.div
        className="absolute z-20 top-1/2 -translate-y-1/2 left-6 md:left-16 text-white max-w-xl"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-4">
          <Typography variant='h2-medium-magistral'>
          {title}
          </Typography>
          
          </div>
        <div className=" mb-6 jakarta font-[400]">
          <Typography variant='body-regular-jakarta'>
            {subtitle}
          </Typography>
        </div>
        {onButtonClick && <button
          onClick={onButtonClick}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold transition"
        >
          {buttonText}
        </button>}
      </motion.div>
    </div>
  );
};

export default HeroSection;
