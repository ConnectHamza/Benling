"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import FlawlessImg from '../../public/assets/Ezee/Flawless-Design.webp';


const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};


const Flawless = () => {
  return (
    <div className='w-full md:px-20 px-5 flex justify-center' 
      style={{ background: 'linear-gradient(to right, #AB1609 10%, #F31C09 100%)' }}>
      
      <div className='w-full flex md:flex-row flex-col'>
        {/* Text Animation (Slide from Left) */}
        <motion.div 
          className='md:w-[30%] text-white md:pt-[150px] pt-20 flex flex-col justify-center'
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className='md:text-[24px] text-[20px]'>
            Fearless Rides.<br />
            <span className='heading3'>Flawless Design.</span>
          </h3>
          <p>
            With dimensions of 1800mm x 690mm x 1250mm and lightweight construction (116 kg), 
            the Ezee is perfect for urban commutes.
          </p>
        </motion.div>
        
        {/* Image Animation (Slide from Right) */}
        <motion.div 
          className='md:w-[70%]'
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image src={FlawlessImg} alt='Flawless Design' />
        </motion.div>
      </div>
    </div>
  );
};

export default Flawless;
