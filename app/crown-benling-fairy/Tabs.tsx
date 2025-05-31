'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import CrimsonCream from '../../public/assets/Fairy/Variants/Crimson-Cream.webp';
import IvoryFrost from '../../public/assets/Fairy/Variants/Ivory-Frost.webp';
import SapphireBeige from '../../public/assets/Fairy/Variants/Sapphire-Beige.webp';
import StoneMist from '../../public/assets/Fairy/Variants/Stone-Mist.webp';
import VanillaShodow from '../../public/assets/Fairy/Variants/Vanilla-Shadow.webp';

import { div } from 'framer-motion/client';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const colorOptions = [
    { id: '1', label: 'Crimson Cream', image: CrimsonCream, alt: 'Spark Charcoal Grey' },
    { id: '2', label: 'Ivory Frost', image: IvoryFrost, alt: 'Spark Oasis Blue' },
    { id: '3', label: 'Sapphire Beige', image: SapphireBeige, alt: 'Spark Crimson Red' },
    { id: '4', label: 'Stone Mist', image: StoneMist, alt: 'Spark Crimson Red' },
    { id: '5', label: 'Vanilla Shadow', image: VanillaShodow, alt: 'Spark Crimson Red' },
  ];

  return (
    <div className="w-full flex justify-center md:px-10 px-5 md:py-40 py-20 bg-gray-50">
      <div className="w-lg flex flex-col-reverse md:flex-row justify-between items-center md:ml-20 gap-8">
        
        {/* Text and Tab Section */}
        <div className="md:w-[40%] w-full">
          <h2 className="text-[24px] md:text-[30px] font-semibold font-magistral mb-4 text-center md:text-left" data-aos="fade-up">
            Colors to Match Your Vibe
          </h2>
          <div className="flex flex-wrap md:flex-col justify-center md:justify-start gap-x-4 gap-y-2">
            {colorOptions.map((option) => (
              <div data-aos="zoom-out">
              <h3                                
                key={option.id}
                onClick={() => handleTabClick(option.id)}
                className={`heading4 mx-1 cursor-pointer font-jakarta text-center md:text-left w-[30%] md:w-full whitespace-nowrap ${
                  activeTab === option.id ? 'text-[#292826]' : 'text-gray-400'
                }`}
              >
                {option.label}
              </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-[60%] w-full flex justify-center">
          <Image
            data-aos="slide-left"
            src={colorOptions.find((opt) => opt.id === activeTab)?.image!}
            alt={colorOptions.find((opt) => opt.id === activeTab)?.alt || 'Color Variant'}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
