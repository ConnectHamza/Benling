"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import FireflyGreen from '../../public/assets/Firefly/Tabs/Firefly-Emerald-Green.webp';
import FireflyCharcoal from '../../public/assets/Firefly/Tabs/Firefly-Charoal-Grey.webp';
import FireflyWhite from '../../public/assets/Firefly/Tabs/Firefly-White.webp';
import FireflyMint from '../../public/assets/Firefly/Tabs/Firefly-Mint-Green.webp';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Emerald Green');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full flex justify-center md:px-10 px-5 py-10 bg-gray-50 md:h-[100vh]">
      <div className="w-lg md:flex justify-between items-center">
        <div className="md:w-[40%]">
          <h2 className="text-[20px] font-bold font-magistral">Pick Your Ideal Tint</h2>
          <div className="mt-5 md:block flex flex-wrap">
            <h3
              className={`md:heading2 rounded h-[75px] heading4 font-magistral text-gray-20 cursor-pointer p-3  ${activeTab === 'Emerald Green' ? 'text-white inline-block bg-[#16514C]' : ''}`}
              onClick={() => handleTabClick('Emerald Green')}
            >
              Emerald Green
            </h3>
            <h3
              className={`md:heading2 rounded h-[75px] heading4 font-magistral text-gray-20 cursor-pointer p-3  ${activeTab === 'Charcoal Grey' ? 'text-white inline-block bg-[#16514C]' : ''}`}
              onClick={() => handleTabClick('Charcoal Grey')}
            >
              Charcoal Grey
            </h3>
            <h3
              className={`md:heading2 rounded h-[75px] heading4 font-magistral text-gray-20 cursor-pointer p-3  ${activeTab === 'Ivory White' ? 'text-white inline-block bg-[#16514C]' : ''}`}
              onClick={() => handleTabClick('Ivory White')}
            >
              Ivory White
            </h3>
            <h3
              className={`md:heading2 rounded h-[75px] heading4 font-magistral text-gray-20 cursor-pointer p-3 ${activeTab === 'Mint Green' ? 'text-white inline-block bg-[#16514C]' : ''}`}
              onClick={() => handleTabClick('Mint Green')}
            >
              Mint Green
            </h3>
          </div>
        </div>
        <div className="md:w-[60%]">
          {activeTab === 'Emerald Green' && <Image src={FireflyGreen} alt="Firefly Emerald Green" />}
          {activeTab === 'Charcoal Grey' && <Image src={FireflyCharcoal} alt="Firefly Charcoal Grey" />}
          {activeTab === 'Ivory White' && <Image src={FireflyWhite} alt="Firefly Ivory White" />}
          {activeTab === 'Mint Green' && <Image src={FireflyMint} alt="Firefly Mint Green" />}
        </div>
      </div>
    </div>
  );
};

export default Tabs;