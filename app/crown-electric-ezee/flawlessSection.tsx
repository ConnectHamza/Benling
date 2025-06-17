"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import FlawlessImg from '../../public/assets/Ezee/Flawless-Design.webp';
import Typography from '@/components/GradientText/Typography';


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
    <div className='w-full md:px-20 px-5 pt-20 md:pt-0 flex justify-center'
      style={{ background: 'linear-gradient(to right, #AB1609 10%, #F31C09 100%)' }}>

      <div className='w-full flex md:flex-row flex-col'>
        {/* Text Animation (Slide from Left) */}
        <div
          className='md:w-[55%] text-white justify-center flex flex-col '
        >
          <Typography className='leading-3'>
            <div data-aos="zoom-in">
            <Typography as='p' variant='h5-regular-magistral'  >
              Fearless Rides.
            </Typography>
            <br />
            </div>
            <div data-aos="fade-right">
            <Typography variant='h2-bold-magistral' className='my-2'>Flawless Design.              
            </Typography>
            </div>
          </Typography>
          <div data-aos="fade-right">
          <Typography variant='body-regular-jakarta'>
            With dimensions of 1800mm x 690mm x 1250mm and lightweight construction (116 kg),
            the Ezee is perfect for urban commutes.
          </Typography>
          </div>
        </div>

        {/* Image Animation (Slide from Right) */}
        <div
          className='md:w-[70%] '
        >
          <Image src={FlawlessImg} className='w-full' alt='Flawless Design' data-aos="slide-left"/>
        </div>
      </div>
    </div>
  );
};

export default Flawless;
