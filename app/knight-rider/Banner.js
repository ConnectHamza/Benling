import React from 'react'
import KnightRiderBanner from '../../public/assets/Knight-Rider/Knight-Rider-Banner.webp'

const Banner = () => {
    return (
        <div className='w-full md:h-[90vh]  items-center flex justify-center px-5 py-10'
            style={{
                backgroundImage: `url(${KnightRiderBanner.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="w-lg">
                <div className="md:w-[50%] w-[65%] text-white">
                    <h2 className='heading2 font-magistral font-bold leading-[1.2]'>
                    Benling Redefining Electric Mobility
                    </h2>
                    <p className='font-jakarta font-normal'>Discover cutting-edge electric vehicles designed for performance, sustainability, and style.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner