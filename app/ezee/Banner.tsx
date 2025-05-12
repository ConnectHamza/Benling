import React from 'react'
import FireflyIMG from '../../public/assets/Ezee/Ezee-banner.webp'
import Button from '@/components/Button/Button'

const Banner = () => {
    return (
        <div className='w-full md:h-[90vh]  items-center flex justify-center px-5 py-10'
            style={{
                backgroundImage: `url(${FireflyIMG.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="w-lg">
                <div className="md:w-[50%] w-[65%] text-white">
                    <h2 className='heading2 font-magistral font-bold leading-[1.2]'>
                    Benling Redefining Electric Mobility
                    </h2>
                    <p className='font-jakarta font-normal'>Experience the future of urban mobility with the Firefly electric scooter.
                    Discover cutting-edge electric vehicles designed for performance, sustainability, and style.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner