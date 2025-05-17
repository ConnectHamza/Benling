import React from 'react';

import Image from 'next/image';
import Typography from '../GradientText/Typography';
const Specifications = ({ data, data2, bottomImageTag = '' }) => {

  // const half = Math.ceil(data.length / 2);
  const firstColumn = data;
  const secondColumn = data2;

  return (
    <div className='w-full flex justify-center md:py-[150px] px-5 py-10'>
      <div className="w-lg">
        <Typography variant='h2-bold-magistral'>
          Technical Specifications
        </Typography>
        <div className="flex md:flex-row flex-col justify-between mt-10">
          <div className='md:w-[40%] flex flex-col gap-5'>
            {firstColumn.map((item, index) => (
              <div key={index} className='flex items-center gap-5'>
                <Typography as='span' variant='body-bold-jakarta' className='text-nowrap'>{item.title}</Typography>
                <hr className='border-black-70 w-[100%] ' />
                <Typography variant='body-bold-regular' as='span' className='text-nowrap'>{item.value}</Typography>
              </div>
            ))}
          </div>
          <div className='md:w-[40%] flex flex-col gap-5 mt-5 md:mt-0'>
            {secondColumn.map((item, index) => (
           <div key={index} className='flex items-center gap-5'>
                <Typography as='span' variant='body-bold-jakarta' className='text-nowrap'>{item.title2}</Typography>
                <hr className='border-black-70 w-[100%] ' />
                <Typography variant='body-bold-regular' as='span' className='text-nowrap'>{item.value2}</Typography>
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