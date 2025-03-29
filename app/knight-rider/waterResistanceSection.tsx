import React from 'react'
import KnightWaaterIMG from '../../public/assets/Knight-Rider/Knight-Rider-Water.webp'
import Image from 'next/image'

const WaterResistanceSection = () => {
  return (
    <div className='w-full md:min-h-[100vh] flex flex-col justify-center md:pt-[150px] pt-20'
    >
        <div className=" text-center justify-center px-5" style={{zIndex: '10'}}>
            <h2 className='text-black-70 heading2 z-100'>
            Reliable Water Resistance
            </h2>
            <p className='text-black-70'>
            Ride with confidence in rain water with splash proof protection and up to 30 cm of water submersion.
            </p>
        </div>
        <div className='md:mt-[-20vh]'>
        <Image src={KnightWaaterIMG} alt='Water Resistance'/>
        </div>
    </div>
  )
}

export default WaterResistanceSection