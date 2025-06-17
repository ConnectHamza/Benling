// @ts-nocheck
import React from 'react';
import GradientText from '../GradientText/gradientHeading';
import { motion } from 'framer-motion'; // Uncommented this import
import LoopCarousel from './loop-carousel';
import Typography from '../GradientText/Typography';
import AutoSwiper from './auto-swiper';

const textVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

interface ColorStop {
  color: string;
  percentage: number;
}

interface LoopMainProps {
  imageSrc: string | any;
  heading: string;
  colors: ColorStop[];
}

const LoopMain: React.FC<LoopMainProps> = ({ imageSrc, heading, colors }) => {
  return (
    <div className='w-full flex flex-col md:py-20 md:justify-center justify-center text-center'>
      <div data-aos="zoom-in">
        <GradientText heading={heading} colors={colors} />
        </div>
      <LoopCarousel src={imageSrc} />
      <div className='mt-10'>
        <AutoSwiper />
      </div>      
    </div>
  );
};

export default LoopMain;