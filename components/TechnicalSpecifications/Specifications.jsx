import React from 'react';

import Image from 'next/image';
import Typography from '../GradientText/Typography';
import WarrantyImage from '../../public/assets/Home/Thumbnail/Warranty-Specs-Image.svg'

const Specifications = ({ data, data2, bottomImageTag = '' }) => {

  // const half = Math.ceil(data.length / 2);
  const firstColumn = data;
  const secondColumn = data2;

  return (
    <div className='w-full flex justify-center md:py-40 px-5 py-20 '>
      <div className="md:w-lg">
        <div data-aos="zoom-in">
        <Typography as="h2" variant='h2-bold-magistral'>
          Technical Specifications
        </Typography>
        </div>
        <div className="flex md:flex-row flex-col justify-between mt-10">
          <div className='md:w-[40%] flex flex-col gap-5'>
            {firstColumn.map((item, index) => (
              <div key={index} className='flex items-center gap-5'>
                <div data-aos="fade-right">
                <Typography as='span' variant='body-bold-jakarta' className='text-nowrap'>{item.title}</Typography>
                </div>
                <hr className='border-black-70 w-[100%] ' />
                <div data-aos="fade-left">
                <Typography variant='body-bold-regular' as='span' className='text-nowrap'>{item.value}</Typography>
                </div>
              </div>
            ))}
          </div>
          <div className='md:w-[40%] flex flex-col gap-5 mt-5 md:mt-0'>
            {secondColumn.map((item, index) => (
              <div key={index} className='flex items-center gap-5'>
                <div data-aos="fade-right">
                <Typography as='span' variant='body-bold-jakarta' className='text-nowrap'>{item.title2}</Typography>
                </div>
                <hr className='border-black-70 w-[100%] ' />
                <div data-aos="fade-left">
                <Typography variant='body-bold-regular' as='span' className='text-nowrap'>{item.value2}</Typography>
                </div>
              </div>
            ))}
          </div>

        </div>
              <div className='flex justify-center items-center mt-20'>
                  <div className='md:w-[60%] flex md:gap-10 flex-wrap md:flex-nowrap gap-4 items-center'>
                      <div className='flex justify-center w-[100%]'>
                        <Image src={WarrantyImage} alt='Warranty Badge' height={200} width={200} className='md:w-[100%] w-[150px]'/>
                      </div>
                      <div className='flex flex-col gap-2 text-center md:text-start'>
                          <Typography variant='h3-bold-magistral' as='h3' className='text-nowrap'>WARRANTY</Typography>
                          <Typography variant='h2-bold-magistral' as='h2' className='text-nowrap'>4 YEARS/48,000KM</Typography>
                          <Typography variant='h5-bold-jakarta' as='h5' className='text-nowrap'>Battery, Motor & Controller</Typography>
                          <Typography variant='body-bold-jakarta' as='p' className='text-nowrap'>Body Parts 12 Months/12,000KM</Typography>
                          
                      </div>
                  </div>
              </div>

        {bottomImageTag && (
          <div className="mt-10 w-full" data-aos="zoom-out">
            <Image
              src={bottomImageTag?.src}
              alt="Complimentary Banner"
              width={800} // adjust to your actual image width
              height={100} // adjust to your actual image height
              className="object-cover rounded-10 w-full h-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Specifications;