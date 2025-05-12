import React from 'react'
import RoshniBanner from '../../public/assets/Roshnix/Roshni-Banner.png'
import Button from '@/components/Button/Button'

const Banner = () => {
    return (
        <div className='w-full md:h-[90vh]  items-center flex justify-center px-5 py-10'
            style={{
                backgroundImage: `url(${RoshniBanner.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <div className="w-lg">
                <div className="md:w-[50%] w-[65%] text-black">
                    <h2 className='heading2 font-magistral leading-[1.2]'>
                    Benling Redefining Electric Mobility
                    </h2>
                    <p className='font-jakarta text-black font-normal'>Discover cutting-edge electric vehicles designed for performance, sustainability, and style.</p>                       
                </div>
            </div>
        </div>
    )
}

export default Banner