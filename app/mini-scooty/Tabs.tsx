"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Green from '../../public/assets/mini-scooty/Variants/green.png';

import Yellow from '../../public/assets/mini-scooty/Variants/yellow.png';

import Red from '../../public/assets/mini-scooty/Variants/red.png';

import Shadowjet from '../../public/assets/mini-scooty/Variants/shadowjet.png';


const Tabs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="w-full flex justify-center md:px-10 px-5 py-10 bg-gray-50 md:h-[100vh]">
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center md:ml-20 gap-8">

        {/* Left Section (Text + Tabs) */}
        <div className="md:w-[40%] w-full">
          <div className="text-[24px] md:text-[30px] font-semibold font-magistral mb-4 text-center md:text-left">
            Express Yourself in Every Shade
          </div>
          <div className="mt-5 flex flex-wrap md:flex-col justify-center md:justify-start gap-x-4 gap-y-2">
  {[
    { id: '1', label: 'Shadow Jet' },
    { id: '2', label: 'Bubble Blue' },
    { id: '3', label: 'Cherry Zoom' },
    { id: '4', label: 'Vanilla Pop' },
  ].map((tab) => (
    <h3
      key={tab.id}
      className={`
        heading4 cursor-pointer font-jakarta 
        text-center md:text-left 
        w-[30%] md:w-full whitespace-nowrap 
        ${activeTab === tab.id ? 'text-[#292826]' : 'text-gray-400'}
      `}
      onClick={() => handleTabClick(tab.id)}
    >
      {tab.label}
    </h3>
  ))}
</div>


        </div>

        {/* Right Section (Image) */}
        <div className="md:w-[60%] w-full flex justify-center">
          {activeTab === '1' && <Image src={Shadowjet} alt="Mini Scooty Shadow Jet" className="w-full h-auto object-contain" />}
          {activeTab === '2' && <Image src={Green} alt="Mini Scooty Bubble Blue" className="w-full h-auto object-contain" />}
          {activeTab === '3' && <Image src={Red} alt="Mini Scooty Cherry Zoom" className="w-full h-auto object-contain" />}
          {activeTab === '4' && <Image src={Yellow} alt="Mini Scooty Vanilla Pop" className="w-full h-auto object-contain" />}
        </div>
      </div>
    </div>
  );

};

export default Tabs;