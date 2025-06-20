import Image from 'next/image'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

type PerformanceCardProps = {
  img: any
  logo: any
  PKR: string
  range: string
  speed: string
  motor: string
  battery: string
  exploreLink?: string
}

const PerformanceCard = ({ img, logo, PKR, range, speed, motor, battery, exploreLink }: PerformanceCardProps) => {
  return (
    <div className='flex flex-col justify-center items-center md:gap-6 gap-2'>
      <Link href={exploreLink ?? ''}>
      <Image src={img} alt='Bike Image' data-aos="zoom-out" data-aos-delay="200"/>
      <Image src={logo} alt='Logo' data-aos="zoom-in" data-aos-delay="400"/>
      </Link>
      <div className='bg-black-30 flex items-end justify-center p-2 w-full rounded-md' data-aos="zoom-out" data-aos-delay="600">
        <h3 className='text-[#47D1EB] font-magistral md:text-3xl text-xl font-bold text-center'>PKR {PKR}</h3>
      </div>
      <hr className="border-top border-gray-600 w-full" />
      <ul className='md:text-lg font-jakarta text-sm text-center mt-0 space-y-2'>
        <li data-aos="fade-up">Range: {range}</li>
        <li data-aos="fade-up">Speed: {speed}</li>
        <li data-aos="fade-up">Motor: {motor}</li>
        <li data-aos="fade-up">Battery: {battery}</li>
      </ul>
    </div>
  )
}

export default PerformanceCard
