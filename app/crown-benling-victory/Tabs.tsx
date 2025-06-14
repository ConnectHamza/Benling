'use client';
import Image from 'next/image';
import React, { useState } from 'react';

// import SkyVoltBlue from '../../public/assets/Victory/Colors/Victory-Sky-Volt-Blue.webp';
// import SteelGrey from '../../public/assets/Victory/Colors/Victory-Street-Grey.webp';
// import FlameRed from '../../public/assets/Victory/Colors/Victory-Flame-Red.webp';
// import PearlWhite from '../../public/assets/Victory/Colors/Victory-Pearl-White.webp';
// import PhantomBlack from '../../public/assets/Victory/Colors/Victory-Phantom-Black.webp';


const Tabs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

const colorOptions = [
  { id: '1', label: 'Blue', image: '/assets/Victory/Colors/Victory-Sky-Volt-Blue.webp', alt: 'Victory Sky Volt Blue' },
  { id: '2', label: 'Grey', image: '/assets/Victory/Colors/Victory-Street-Grey.webp', alt: 'Victory Steel Grey' },
  { id: '3', label: 'Red', image: '/assets/Victory/Colors/Victory-Flame-Red.webp', alt: 'Victory Flame Red' },
  { id: '4', label: 'White', image: '/assets/Victory/Colors/Victory-Pearl-White.webp', alt: 'Victory Pearl White' },
  { id: '5', label: 'Black', image: '/assets/Victory/Colors/Victory-Phantom-Black.webp', alt: 'Victory Phantom Black' },
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
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
