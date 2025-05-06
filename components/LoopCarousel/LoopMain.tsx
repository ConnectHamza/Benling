import React from 'react';
import LoopCarousel from './LoopCarousel';
import GradientText from '../GradientText/gradientHeading';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Define ColorStop Interface
interface ColorStop {
  color: string;
  percentage: number;
}


interface LoopMainProps {
  imageSrc: string; 
  heading: string;
  colors: ColorStop[]; 
}

const LoopMain: React.FC<LoopMainProps> = ({ imageSrc, heading, colors }) => {
  return (
    <div className="w-full flex flex-col md:justify-center md:py-[100px] px-5 py-10 text-center">
      {/* Motion Div for Animated Heading */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <GradientText heading={heading} colors={colors} />
      </motion.div>
      
      {/* Carousel Component */}
      <LoopCarousel images={[imageSrc]} />
    </div>
  );
};

export default LoopMain;