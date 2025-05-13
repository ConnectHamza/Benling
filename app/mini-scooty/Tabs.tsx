"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Shadowjet from '../../public/assets/mini-scooty/Variants/shadowjet.png';


const Tabs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="w-full flex justify-center md:px-10 px-5 py-10 bg-gray-50 md:h-[100vh]">
      <div className="w-full md:flex justify-between items-center md:ml-20">
        <div className="md:w-[40%]">
          <h2 className="text-[30px] font-semibold font-magistral">Express Yourself in Every Shade</h2>
          <div className="mt-5 md:block flex flex-wrap">
            <h3
              className={`md:heading2 heading4  cursor-pointer font-jakarta  ${activeTab === '1' ? 'text-[#292826]  inline-block' : 'text-gray-20'}`}
              onClick={() => handleTabClick('1')}
            >
              Shadow Jet
            </h3>
            <h3
              className={`md:heading2 heading4  cursor-pointer font-jakarta ${activeTab === '2' ? 'text-[#292826] inline-block ' : 'text-gray-20'}`}
              onClick={() => handleTabClick('2')}
            >
              Bubble Blue
            </h3>
            <h3
              className={`md:heading2 heading4  cursor-pointer  font-jakarta ${activeTab === '3' ? 'text-[#292826] inline-block ' : 'text-gray-20'}`}
              onClick={() => handleTabClick('3')}
            >
              Cherry Zoom
            </h3>
            <h3
              className={`md:heading2 heading4  cursor-pointer font-jakarta ${activeTab === '4' ? 'text-[#292826] inline-block ' : 'text-gray-20'}`}
              onClick={() => handleTabClick('4')}
            >
              Vanila Pop
            </h3>
           
          </div>
        </div>
        <div className="md:w-[60%]">
          {activeTab === '1' && <Image src={Shadowjet} alt="Mini Scooty Shadow Jet" />}
          {activeTab === '2' && <Image src={Shadowjet} alt="Mini Scooty Bubble Blue" />}
          {activeTab === '3' && <Image src={Shadowjet} alt="Mini Scooty Cherry Zoom" />}
          {activeTab === '4' && <Image src={Shadowjet} alt="Mini Scooty Vanilla Pop" />}
        </div>
      </div>
    </div>
  );
};

export default Tabs;