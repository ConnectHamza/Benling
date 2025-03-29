import React from 'react'
import BlazeIMG from '../../public/assets/Firefly/Blaze.svg'
import BlazeIMG2 from '../../public/assets/Firefly/Firefly-Blaze.webp'
import Image from 'next/image'

const Blaze = () => {
  return (
    <div className="w-full bg-gray-50 flex flex-col justify-center relative items-center">
        <Image src={BlazeIMG} alt='Blaze Logo' className='absolute text-center z-10 top-[20%] w-[70%]'/>
        <Image src={BlazeIMG2} alt='Blaze Image' className='z-20'/>
    </div>

  )
}

export default Blaze