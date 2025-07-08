import React from 'react';

import Image from 'next/image';
import Typography from '../GradientText/Typography';
import WarrantyImage from '../../public/assets/Home/Thumbnail/Warranty-Specs.webp'

const Specifications = ({ data, data2, bottomImageTag = '', isLithium, isGraphene }) => {

  // const half = Math.ceil(data.length / 2);
  const firstColumn = data;
  const secondColumn = data2;
  bottomImageTag


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

        {bottomImageTag && (
          <div className="mt-20 w-full" data-aos="zoom-out">
            <Image
              src={bottomImageTag}
              alt="Complimentary Banner"
              width={800} // adjust to your actual image width
              height={100} // adjust to your actual image height
              className="object-cover rounded-10 w-full h-auto"
            />
          </div>
        )}

        {/* {isLithium && (
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
              )} */}

        {/* Lithium Warranty Section */}
        {isLithium && (
          <div className=' mt-20 relative flex flex-col justify-center md:h-[45vh] md:p-4'>
            <div className='bg-[#0B052D] rounded-lg md:rounded-br-[150px] p-6 flex gap-4 flex-col justify-center md:h-[30vh]'>
              <div className='md:hidden flex justify-center'>
                <Image src={WarrantyImage} alt='Warranties You Can Trust' className='w-40 mt-[-80]' />
              </div>
              <div className='md:text-start text-center'>
                <Typography variant='h3-medium-magistral' as='h3' className='text-white' >Warranties You Can Trust</Typography>
                <Typography variant='body-light-jakarta' as='p' className='text-white' >Enjoy peace of mind with our comprehensive coverage across essential components:</Typography>
              </div>
              <div className="flex md:flex-nowrap flex-wrap md:gap-6 gap-4">
                <div className='bg-gradient-to-r from-[#CE2E1E] via-[#9C0B0E] to-[#9C0B0E] border-[#F1E75E] border-2 rounded-lg px-4 py-2 text-center md:w-auto w-full'>
                  <Typography variant='h5-medium-magistral' as='h4' className='text-white'>4 Years/48,000KM</Typography>
                  <Typography variant='h6-light-magistral' as='span' className='text-white'>Motor & Controller</Typography>
                </div>
                <div className='bg-gradient-to-r from-[#CE2E1E] via-[#9C0B0E] to-[#9C0B0E] border-[#F1E75E] border-2 rounded-lg px-4 py-2 text-center md:w-auto w-full'>
                  <Typography variant='h5-medium-magistral' as='h4' className='text-white'>4 Years/48,000KM</Typography>
                  <Typography variant='h6-light-magistral' as='span' className='text-white'>LiFePO₄ Battery</Typography>
                </div>
                <div className='bg-gradient-to-r from-[#CE2E1E] via-[#9C0B0E] to-[#9C0B0E] border-[#F1E75E] border-2 rounded-lg px-4 py-2 text-center md:w-auto w-full'>
                  <Typography variant='h5-medium-magistral' as='h4' className='text-white'>1 Year/12,000KM</Typography>
                  <Typography variant='h6-light-magistral' as='span' className='text-white'>Body Parts</Typography>
                </div>
              </div>
            </div>
            <div>
              <Image src={WarrantyImage} alt='Warranties You Can Trust' className=' md:block hidden absolute md:right-0 top-0 w-80' />
            </div>
            <div>
            </div>
          </div>
        )}

        {/* Graphene Warranty Section */}
        {isGraphene && (
          <div className=' mt-20 relative flex flex-col justify-center md:h-[45vh] md:p-4'>
            <div className='bg-[#0B052D] rounded-lg md:rounded-br-[150px] p-6 flex gap-4 flex-col justify-center md:h-[30vh]'>
              <div className='md:hidden flex justify-center'>
                <Image src={WarrantyImage} alt='Warranties You Can Trust' className='w-40 mt-[-80]' />
              </div>
              <div className='md:text-start text-center'>
                <Typography variant='h3-medium-magistral' as='h3' className='text-white' >Warranties You Can Trust</Typography>
                <Typography variant='body-light-jakarta' as='p' className='text-white' >Enjoy peace of mind with our comprehensive coverage across essential components:</Typography>
              </div>
              <div className="flex md:flex-nowrap flex-wrap md:gap-6 gap-4">
                <div className='bg-gradient-to-b from-[#F1E75E] via-[#C49749] to-[#C49749] border-[#F1E75E] border-2 rounded-lg px-4 py-2 text-center md:w-auto w-full'>
                  <Typography variant='h5-medium-magistral' as='h4' className='text-black-30'>36 Months/36,000KM</Typography>
                  <Typography variant='h6-medium-magistral' as='span' className='text-black-30'>Motor & Controller</Typography>
                </div>
                <div className='bg-gradient-to-b from-[#F1E75E] via-[#C49749] to-[#C49749] border-[#F1E75E] border-2 rounded-lg px-4 py-2 text-center md:w-auto w-full'>
                  <Typography variant='h5-medium-magistral' as='h4' className='text-black-30'>18 Months/18,000KM</Typography>
                  <Typography variant='h6-medium-magistral' as='span' className='text-black-30'>Graphene Battery</Typography>
                </div>
                <div className='bg-gradient-to-b from-[#F1E75E] via-[#C49749] to-[#C49749] border-[#F1E75E] border-2 rounded-lg px-4 py-2 text-center md:w-auto w-full'>
                  <Typography variant='h5-medium-magistral' as='h4' className='text-black-30'>12 Months/12,000KM</Typography>
                  <Typography variant='h6-medium-magistral' as='span' className='text-black-30'>Body Parts</Typography>
                </div>
              </div>
            </div>
            <div>
              <Image src={WarrantyImage} alt='Warranties You Can Trust' className=' md:block hidden absolute md:right-0 top-0 w-80' />
            </div>
            <div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Specifications;