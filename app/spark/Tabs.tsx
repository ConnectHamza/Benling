"use client"
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
  return (
    <div className="w-full flex justify-center md:px-10 px-5 py-10 bg-gray-50 md:h-[100vh]">
      <div className="w-full md:flex justify-between items-center md:ml-20">
        <div className="md:w-[40%]">
          <h2 className="text-[30px] font-semibold font-magistral">Colors to Match Your Vibe</h2>
          <div className="mt-5 md:block flex flex-wrap">
            <h3
              className={`md:heading2 heading4  cursor-pointer font-jakarta  ${activeTab === '1' ? 'text-[#292826]  inline-block' : 'text-gray-20'}`}
              onClick={() => handleTabClick('1')}
            >
              Charcoal Grey
            </h3>
            <h3
              className={`md:heading2 heading4  cursor-pointer font-jakarta ${activeTab === '2' ? 'text-[#292826] inline-block ' : 'text-gray-20'}`}
              onClick={() => handleTabClick('2')}
            >
              Oasis Blue
            </h3>
            <h3
              className={`md:heading2 heading4  cursor-pointer  font-jakarta ${activeTab === '3' ? 'text-[#292826] inline-block ' : 'text-gray-20'}`}
              onClick={() => handleTabClick('3')}
            >
              Crimson Red
            </h3>
          </div>
        </div>
        <div className="md:w-[60%]">
          {activeTab === '1' && <Image src={Grey} alt="Spark Charcoal Grey" />}
          {activeTab === '2' && <Image src={Blue} alt="Spark Oasis Blue" />}
          {activeTab === '3' && <Image src={Red} alt="Spark Crimson Red" />}
        </div>
      </div>
    </div>
  );
};

export default Tabs;