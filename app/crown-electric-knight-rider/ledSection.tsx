'use client'
import React, { useState, useEffect } from 'react';
import KnightRiderLedIMG1 from '../../public/assets/Knight-Rider/Knight-Rider-LED-1.webp';
import KnightRiderLedIMG2 from '../../public/assets/Knight-Rider/Knight-Rider-LED-2.webp';
import Typography from '@/components/GradientText/Typography';
import Image from 'next/image';

const LedSection = () => {
  const images = [KnightRiderLedIMG1, KnightRiderLedIMG2];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full bg-white flex pr-5 py-10 md:py-0 md:h-[100vh] h-[65vh] md:items-center items-start justify-center'>
      <div className="w-full justify-center items-center flex flex-col gap-10 md:gap-0 md:flex-row">
        <div className='md:w-[55%]'>
          <Image width={1000} alt='Knight Rider Image' src={images[currentIndex]} />
        </div>
        <div className='md:w-[45%] order-first md:order-last'>
          <div data-aos="fade-up">
            <Typography as='span' variant='h2-medium-magistral' color='text-black'>
              Powerful LED
            </Typography>
            <br />
            <Typography as='span' variant='h2-medium-magistral' color='text-black'>
              Back Light
            </Typography>
            <br />
            <Typography variant='body-regular-jakarta'>
              The bright and durable LED back light enhances visibility and ensures safer rides, day or night
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LedSection;
