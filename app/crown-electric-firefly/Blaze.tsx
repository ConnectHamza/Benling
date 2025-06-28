import React from 'react'
import BlazeIMG from '../../public/assets/Firefly/Blaze.svg'
import BlazeIMG2 from '../../public/assets/Firefly/Firefly-Blaze.webp'
import Image from 'next/image'

const Blaze = () => {
  return (
    <div className="w-full bg-[#CDFAEF] flex flex-col justify-center relative items-center">
        <Image src={BlazeIMG} alt='Blaze Logo' className='absolute text-center z-10 top-[20%] w-[70%]' data-aos="zoom-in" data-aos-delay="600"/>
        <Image src={BlazeIMG2} alt='Blaze Image' className='z-20' data-aos="zoom-out"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"/>
    </div>

  )
}

export default Blaze