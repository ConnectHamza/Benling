import React from 'react';

import Image from 'next/image';
const Specifications = ({ data, data2, bottomImageTag = false }) => {

  // const half = Math.ceil(data.length / 2);
  const firstColumn = data;
  const secondColumn = data2;

  return (
    <div className='w-full flex justify-center md:py-[150px] px-5 py-10'>
      <div className="w-lg">
        <h2 className='heading2 font-magistral'>Technical Specifications</h2>
        <div className="flex md:flex-row flex-col justify-between mt-10">
          <div className='md:w-[40%] flex flex-col gap-5'>
            {firstColumn.map((item, index) => (
              <div key={index} className='flex items-center gap-5'>
                <span className=' md:text-[20px] text-[20px] text-nowrap font-jakarta font-bold'>{item.title}</span>
                <hr className='border-black-70 w-[100%] ' />
                <span className='md:text-[20px] text-[15px] text-nowrap font-jakarta font-normal'>{item.value}</span>
              </div>
            ))}
          </div>
          <div className='md:w-[40%] flex flex-col gap-5 mt-5 md:mt-0'>
            {secondColumn.map((item, index) => (
              <div key={index} className='flex items-center gap-5'>
                <span className=' md:text-[20px] text-[20px] text-nowrap font-jakarta font-bold'>{item.title2}</span>
                <hr className='border-black-70 w-[100%] ' />
                <span className='md:text-[20px] text-[15px] text-nowrap font-jakarta font-normal'>{item.value2}</span>
              </div>
            ))}
          </div>
        
        </div>
        {bottomImageTag && (
            <div className="mt-5 w-full relative h-[50px]"> {/* Adjust height as needed */}
              <Image
                src={bottomImageTag?.src}
                alt="Complimentary Banner"
                fill
                className="object-cover rounded-10"
              />
            </div>
          )}
      </div>
    </div>
  );
};

export default Specifications;