import Image from 'next/image'
import React from 'react'

type PerformanceCardProps = {
  img: any
  logo: any
  PKR: string
  range: string
  speed: string
  motor: string
  battery: string
}

const PerformanceCard = ({ img, logo, PKR, range, speed, motor, battery }: PerformanceCardProps) => {
  return (
    <div className='flex flex-col justify-center items-center md:gap-6 gap-2'>
      <Image src={img} alt='Bike Image' />
      <Image src={logo} alt='Logo' />
      <div className='bg-black-30 flex items-end justify-center p-2 w-full rounded-md'>
        <h3 className='text-[#47D1EB] font-magistral md:text-3xl text-xl font-bold text-center'>PKR {PKR}</h3>
      </div>
      <hr className="border-top border-gray-600 w-full" />
      <ul className='md:text-lg font-jakarta text-sm text-center mt-0 space-y-2'>
        <li>Range: {range}</li>
        <li>Speed: {speed}</li>
        <li>Motor: {motor}</li>
        <li>Battery: {battery}</li>
      </ul>
    </div>
  )
}

export default PerformanceCard
