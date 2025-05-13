"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import RoshniBlack from '../../public/assets/Roshni/Tabs/Roshni-Black.webp';
import RoshniWhite from '../../public/assets/Roshni/Tabs/Roshni-White.webp';
import RoshniBlue from '../../public/assets/Roshni/Tabs/Roshni-Blue.webp';
import RoshniSilver from '../../public/assets/Roshni/Tabs/Roshni-Silver.webp';
import RoshniRed from '../../public/assets/Roshni/Tabs/Roshni-Red.webp';

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
              Black
            </h3>
            <h3
              className={`md:heading2 heading4  cursor-pointer font-jakarta ${activeTab === '2' ? 'text-[#292826] inline-block ' : 'text-gray-20'}`}
              onClick={() => handleTabClick('2')}
            >
              White
            </h3>
            <h3
              className={`md:heading2 heading4  cursor-pointer  font-jakarta ${activeTab === '3' ? 'text-[#292826] inline-block ' : 'text-gray-20'}`}
              onClick={() => handleTabClick('3')}
            >
              Blue
            </h3>
            <h3
              className={`md:heading2 heading4  cursor-pointer font-jakarta ${activeTab === '4' ? 'text-[#292826] inline-block ' : 'text-gray-20'}`}
              onClick={() => handleTabClick('4')}
            >
              Silver
            </h3>
            <h3
              className={`md:heading2 heading4  cursor-pointer font-jakarta ${activeTab === '5' ? 'text-[#292826] inline-block ' : 'text-gray-20'}`}
              onClick={() => handleTabClick('5')}
            >
              Red
            </h3>
          </div>
        </div>
        <div className="md:w-[60%]">
          {activeTab === '1' && <Image src={RoshniBlack} alt="Firefly Roshni Black" />}
          {activeTab === '2' && <Image src={RoshniWhite} alt="Firefly Roshni White" />}
          {activeTab === '3' && <Image src={RoshniBlue} alt="Firefly Roshni Blue" />}
          {activeTab === '4' && <Image src={RoshniSilver} alt="Firefly Roshni Silver" />}
          {activeTab === '5' && <Image src={RoshniRed} alt="Firefly Roshni Red" />}
        </div>
      </div>
    </div>
  );
};

export default Tabs;