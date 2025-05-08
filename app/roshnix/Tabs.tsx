"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import RoshniBlack from '../../public/assets/Roshni/Tabs/Roshni-Black.webp';
import RoshniWhite from '../../public/assets/Roshni/Tabs/Roshni-White.webp';
import RoshniBlue from '../../public/assets/Roshni/Tabs/Roshni-Blue.webp';
import RoshniSilver from '../../public/assets/Roshni/Tabs/Roshni-Silver.webp';
import RoshniRed from '../../public/assets/Roshni/Tabs/Roshni-Red.webp';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Roshni Black');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full flex justify-center md:px-10 px-5 py-10 bg-gray-50 md:h-[100vh]">
      <div className="w-full md:flex justify-between items-center md:ml-20">
        <div className="md:w-[40%]">
          <h2 className="text-[20px] font-bold">Pick Your Ideal Tint</h2>
          <div className="mt-5 md:block flex flex-wrap">
            <h3
              className={`md:heading2 heading4 text-gray-20 cursor-pointer  ${activeTab === 'Roshni Black' ? 'text-[#16514C]  inline-block' : ''}`}
              onClick={() => handleTabClick('Roshni Black')}
            >
              Roshni Black
            </h3>
            <h3
              className={`md:heading2 heading4 text-gray-20 cursor-pointer ${activeTab === 'Roshni White' ? 'text-[#16514C] inline-block ' : ''}`}
              onClick={() => handleTabClick('Roshni White')}
            >
              Roshni White
            </h3>
            <h3
              className={`md:heading2 heading4 text-gray-20 cursor-pointer   ${activeTab === 'Roshni Blue' ? 'text-[#16514C] inline-block ' : ''}`}
              onClick={() => handleTabClick('Roshni Blue')}
            >
              Roshni Blue
            </h3>
            <h3
              className={`md:heading2 heading4 text-gray-20 cursor-pointer  ${activeTab === 'Roshni Silver' ? 'text-[#16514C] inline-block ' : ''}`}
              onClick={() => handleTabClick('Roshni Silver')}
            >
              Roshni Silver
            </h3>
            <h3
              className={`md:heading2 heading4 text-gray-20 cursor-pointer ${activeTab === 'Roshni Red' ? 'text-[#16514C] inline-block ' : ''}`}
              onClick={() => handleTabClick('Roshni Red')}
            >
              Roshni Red
            </h3>
            
          </div>
        </div>
        <div className="md:w-[60%]">
          {activeTab === 'Roshni Black' && <Image src={RoshniBlack} alt="Firefly Roshni Black" />}
          {activeTab === 'Roshni White' && <Image src={RoshniWhite} alt="Firefly Roshni White" />}
          {activeTab === 'Roshni Blue' && <Image src={RoshniBlue} alt="Firefly Roshni Blue" />}
          {activeTab === 'Roshni Silver' && <Image src={RoshniSilver} alt="Firefly Roshni Silver" />}
          {activeTab === 'Roshni Red' && <Image src={RoshniRed} alt="Firefly Roshni Red" />}
        </div>
      </div>
    </div>
  );
};

export default Tabs;