import React from 'react'
import FlashBanner from '../../public/assets/flash/main.png'
import Button from '@/components/Button/Button'

const Banner = () => {
    return (
        <div className='w-full md:h-[90vh]  items-center flex justify-center px-5 py-10'
            style={{
                backgroundImage: `url(${FlashBanner.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <div className="w-lg">
                <div className="md:w-[50%] w-[65%] text-white">
                    <h2 className='heading2 font-magistral leading-[1.2]'>
                        Ride the Future
                        Today with Firefly
                    </h2>
                    <p className='font-jakarta font-normal'>Discover cutting-edge electric vehicles designed for performance, sustainability, and style.
                        </p>
                        <div className='mt-5'>
              
                        </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Banner