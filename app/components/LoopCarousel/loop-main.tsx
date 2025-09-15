<<<<<<< HEAD:components/LoopCarousel/loop-main.tsx
// @ts-nocheck
import React from 'react';
import GradientText from '../GradientText/gradientHeading';
import { motion } from 'framer-motion'; // Uncommented this import
import LoopCarousel from './loop-carousel';
import Typography from '../GradientText/Typography';

const textVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

=======
import React from 'react';
import LoopCarousel from './loop-carousel';
import GradientText from '../GradientText/gradient-heading';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Define ColorStop Interface
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002:app/components/LoopCarousel/loop-main.tsx
interface ColorStop {
  color: string;
  percentage: number;
}

<<<<<<< HEAD:components/LoopCarousel/loop-main.tsx
interface LoopMainProps {
  imageSrc: string | any;
  heading: string;
  colors: ColorStop[];
=======

interface LoopMainProps {
  imageSrc: string; 
  heading: string;
  colors: ColorStop[]; 
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002:app/components/LoopCarousel/loop-main.tsx
}

const LoopMain: React.FC<LoopMainProps> = ({ imageSrc, heading, colors }) => {
  return (
<<<<<<< HEAD:components/LoopCarousel/loop-main.tsx
    <div className='w-full flex flex-col md:justify-center md:py-[100px] px-5 py-10 text-center'>
      {/* <motion.div
       variants={textVariants}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: false, amount: 0.2 }}
      > */}
        <GradientText heading={heading} colors={colors} />
      {/* </motion.div> */}
      <LoopCarousel src={imageSrc} />
=======
    <div className="w-full flex flex-col md:justify-center md:py-[100px] px-5 py-10 text-center">
      {/* Motion Div for Animated Heading */}
      {/* <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      > */}
        <GradientText heading={heading} colors={colors} />
      {/* </motion.div> */}
      
      {/* Carousel Component */}
      <LoopCarousel images={[imageSrc]} />
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002:app/components/LoopCarousel/loop-main.tsx
    </div>
  );
};

export default LoopMain;