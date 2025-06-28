'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import FireflyGreen from '../../public/assets/Firefly/Tabs/Firefly-Emerald-Green.webp';
import FireflyCharcoal from '../../public/assets/Firefly/Tabs/Firefly-Charoal-Grey.webp';
import FireflyWhite from '../../public/assets/Firefly/Tabs/Firefly-White.webp';
import FireflyMint from '../../public/assets/Firefly/Tabs/Firefly-Mint-Green.webp';
import Typography from '@/components/GradientText/Typography';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Emerald Green');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const tabItems = [
    { label: 'Emerald Green', image: FireflyGreen, alt: 'Firefly Emerald Green' },
    { label: 'Grey', image: FireflyCharcoal, alt: 'Firefly Charcoal Grey' },
    { label: 'White', image: FireflyWhite, alt: 'Firefly Ivory White' },
    { label: 'Light Green', image: FireflyMint, alt: 'Firefly Mint Green' },
    // { label: 'Blue', image: FireflyMint, alt: 'Firefly Mint Green' },
    // { label: 'Black', image: FireflyMint, alt: 'Firefly Mint Green' },
  ];

  return (
    <div className="w-full flex justify-center md:px-10 px-5 md:py-40 py-20 bg-gray-50 ">
      <div className="w-lg flex flex-col-reverse md:flex-row justify-between items-center gap-8">

        {/* Text and Tabs */}
        <div className="md:w-[40%] w-full">
          <h2 className="text-[22px] md:text-[30px] font-bold font-magistral mb-4 text-center md:text-left" data-aos="zoom-in">
            Pick Your Ideal Tint
          </h2>
          <div className="flex flex-wrap md:flex-col justify-center md:justify-start gap-3 mt-10">
            {tabItems.map((item) => (
              <div
                key={item.label}
                onClick={() => handleTabClick(item.label)}
                className={`
                  cursor-pointer p-3 rounded  font-magistral 
                  text-center md:text-left flex items-center
                  w-[45%] md:w-[80%]
                  ${activeTab === item.label ? 'text-white bg-[#16514C] ' : 'text-gray-400 bg-transparent'}
                `}
              >
                <div data-aos="zoom-out">
                <Typography variant='h2-bold-magistral' className='font-bold md:text-5xl text-xs'>
                  {item.label}
                </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Display */}
        <div className="md:w-[60%] w-full flex justify-center">
          <Image
            src={tabItems.find((item) => item.label === activeTab)?.image!}
            alt={tabItems.find((item) => item.label === activeTab)?.alt || 'Firefly Variant'}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
