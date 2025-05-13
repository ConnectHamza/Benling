import React from 'react'
import MiniBanner from '../../public/assets/mini-scooty/main.png'

const Banner = () => {
    return (
        <div className='w-full md:h-[90vh]  items-center flex justify-center px-5 py-10'
            style={{
                backgroundImage: `url(${MiniBanner.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <div className="w-lg">
                <div className="md:w-[50%] w-[65%] text-white">
                    <h2 className='heading2 font-magistral leading-[1.2]'>
                        Benling Redefining Electric Mobility
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