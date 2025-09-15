'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import Blue from '../../public/assets/Spark/Variants/blue.png';
import Grey from '../../public/assets/Spark/Variants/grey.png';
import Red from '../../public/assets/Spark/Variants/red.png';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const colorOptions = [
    { id: '1', label: 'Charcoal Grey', image: Grey, alt: 'Spark Charcoal Grey' },
    { id: '2', label: 'Oasis Blue', image: Blue, alt: 'Spark Oasis Blue' },
    { id: '3', label: 'Crimson Red', image: Red, alt: 'Spark Crimson Red' },
  ];

  return (
    <div className="w-full flex justify-center md:px-10 px-5 py-10 bg-gray-50 md:h-[100vh]">
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center md:ml-20 gap-8">
        
        {/* Text and Tab Section */}
        <div className="md:w-[40%] w-full">
          <h2 className="text-[24px] md:text-[30px] font-semibold font-magistral mb-4 text-center md:text-left">
            Colors to Match Your Vibe
          </h2>
          <div className="flex flex-wrap md:flex-col justify-center md:justify-start gap-x-4 gap-y-2">
            {colorOptions.map((option) => (
              <h3
                key={option.id}
                onClick={() => handleTabClick(option.id)}
                className={`heading4 mx-1 cursor-pointer font-jakarta text-center md:text-left w-[30%] md:w-full whitespace-nowrap ${
                  activeTab === option.id ? 'text-[#292826]' : 'text-gray-400'
                }`}
              >
                {option.label}
              </h3>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-[60%] w-full flex justify-center">
          <Image
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
