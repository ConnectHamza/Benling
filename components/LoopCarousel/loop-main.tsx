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
      {/* <motion.div
       variants={textVariants}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: false, amount: 0.2 }}
      > */}
      <div data-aos="zoom-in">
        <GradientText heading={heading} colors={colors} />
        </div>
      {/* </motion.div> */}
      <LoopCarousel src={imageSrc} />
    </div>
  );
};

export default LoopMain;