'use client'
import React from 'react'
import Image from 'next/image'
import KnightRiderDesignIMG from '../../public/assets/Knight-Rider/Knight-Rider-Design.webp'
import Typography from '@/components/GradientText/Typography'

const DesignedSection = () => {
  return (
    <div className="relative w-full bg-black-200 h-[75vh] md:h-[100vh] overflow-hidden">

      {/* Background Image using Next.js Image */}
      <Image
        src={KnightRiderDesignIMG}
        alt="Knight Rider Design"
        fill
        className="object-contain object-center md:object-[top_right] z-0"
        priority
      />

      {/* Text content absolutely positioned over image */}
      <div className="absolute inset-0 flex px-5 py-10 md:py-0 md:items-center items-end justify-center z-10">
        <div className="w-lg">
          <div className="md:w-[45%] animation-scroll">
            <div>
              <Typography className='text-[#FFF]' variant='h2-medium-magistral'>
                Designed for Power and Performance
              </Typography>
            </div>
            <div className="flex md:gap-10 md:mt-10 mt-5">
              <div className="w-[50%]">
                <Typography as='span' className='text-white' variant='body-regular-jakarta'>
                  Top Speed
                </Typography>
                <br />
                <Typography className='text-[#776D57]' as='span' variant='h4-bold-jakarta'>
                  50-60km/h
                </Typography>
              </div>
              <div className="w-[50%]">
                <Typography as='span' className='text-white' variant='body-regular-jakarta'>
                  Graphene Battery
                </Typography>
                <br />
                <Typography className='text-[#776D57]' as='span' variant='h4-bold-jakarta'>
                  72V / 36Ah
                </Typography>
              </div>
            </div>
            <div className="flex md:gap-10 md:mt-5 mt-3">
              <div className="w-[50%]">
                <Typography as='span' className='text-white' variant='body-regular-jakarta'>
                  Full Charge Range
                </Typography>
                <br />
                <Typography className='text-[#776D57]' as='span' variant='h4-bold-jakarta'>
                  Up to 100KM
                </Typography>
               
              </div>
              <div className="w-[50%]">
                   <Typography as='span' className='text-white' variant='body-regular-jakarta'>
                  Brushless Motor
                </Typography>
                <br />
                <Typography className='text-[#776D57]' as='span' variant='h4-bold-jakarta'>
                 1500W
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignedSection
