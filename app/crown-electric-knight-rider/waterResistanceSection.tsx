import React from 'react'
import KnightWaaterIMG from '../../public/assets/Knight-Rider/Reliable-Water-Resistance.webp'
import Image from 'next/image'
import Typography from '@/components/GradientText/Typography'

const WaterResistanceSection = () => {
  return (
    <div className='w-full md:min-h-[100vh] flex flex-col justify-center md:pt-[150px] pt-20'
    >
      <div className=" text-center justify-center px-5" style={{ zIndex: '10' }}>
        <div data-aos="zoom-in">
        <Typography variant='h2-medium-magistral' className='z-100'>
          Reliable Water Resistance
        </Typography>
        </div>
        <div data-aos="zoom-out">
        <Typography variant='body-regular-jakarta' as={"p"}>
          Ride with confidence in rain water with splash proof protection and up to 30 cm of water submersion.
        </Typography>
        </div>
      </div>
      <div className='md:mt-[-20vh]' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
        <Image src={KnightWaaterIMG} alt='Water Resistance' />
      </div>
    </div>
  )
}

export default WaterResistanceSection