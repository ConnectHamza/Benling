"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import EzeeBlack from '../../public/assets/Ezee/Ezee-black.webp';
import EzeeWhite from '../../public/assets/Ezee/Ezee-white.webp';
import EzeeRed from '../../public/assets/Ezee/Ezee-red.webp';
import GradientText from '@/components/GradientText/gradient-heading';

interface Color {
  color: string;
  percentage: number;
}

const Carousel: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>(EzeeBlack.src);
  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');
  const heading = 'Ezee Ride in Your Hue';
  const colors: Color[] = [
    { color: '#121212', percentage: 60 },
    { color: '#c51f26', percentage: 70 },
    { color: '#121212', percentage: 100 },    
  ];

  const handleTabSelection = (image: string, color: string) => {
    setSelectedImage(image);
    setBackgroundColor(color);

    setTimeout(() => {
      setBackgroundColor('transparent');
    }, 300);
  };

  return (
    <motion.div 
      className='w-full px-5 py-20 flex justify-center relative overflow-hidden'
      initial={{ background: 'transparent' }}
      animate={{ background: `linear-gradient(to top, transparent 0%, ${backgroundColor} 100%)` }}
      transition={{ duration: 1 }}
    >
      <div className="w-lg justify-center flex flex-col text-center">
        <GradientText heading={heading} colors={colors}/>
        <div>
          <Image alt='Carousel' src={selectedImage} className='w-[100%]' width={1000} height={1000}/>
        </div>
        <div className='flex md:gap-8 gap-4 justify-center'>
          <button
            className={`bg-black-70 text-white md:py-6 py-4 rounded-10 ${selectedImage === EzeeBlack.src ? 'md:px-16 px-8' : 'md:px-8 px-4'} transition-all duration-100`}
            onClick={() => handleTabSelection(EzeeBlack.src, '#121212')}
          >
          </button>
          <button
            className={`bg-gray-30 text-white md:py-6 py-4 rounded-10 ${selectedImage === EzeeWhite.src ? 'md:px-16 px-8' : 'md:px-8 px-4'} transition-all duration-100`}
            onClick={() => handleTabSelection(EzeeWhite.src, '#f0f0f0')}
          >
          </button>
          <button
            className={`bg-red-300 text-white md:py-6 py-4 rounded-10 ${selectedImage === EzeeRed.src ? 'md:px-16 px-8' : 'md:px-8 px-4'} transition-all duration-100`}
            onClick={() => handleTabSelection(EzeeRed.src, '#c51f26')}
          >
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Carousel;