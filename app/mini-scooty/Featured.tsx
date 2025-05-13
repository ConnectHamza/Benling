import Image from 'next/image'
import React from 'react'
import MiniFeatuedIMG from '../../public/assets/mini-scooty/featured-section.png'

const Featured = () => {
    return (
        <div className='w-full flex justify-center relative self-center'>
            <Image src={MiniFeatuedIMG} alt='Roshni Featured IMG' className='w-full' />
            <div className="md:w-lg absolute md:bottom-20 bottom-[8vh]">
                <div className=" flex flex-wrap md:flex-nowrap  justify-between gap-8 text-center mx-5 md:mx-0 self-center">
                    <div className='text-white'>
                        <h4 className='heading4'>450W</h4>
                        <p>Brushless Motor</p>
                    </div>
                    <div className='text-white '>
                        <h4 className='heading4'>35 km/h</h4>
                        <p>Top Speed</p>
                    </div>
                    <div className='text-white '>
                        <h4 className='heading4'>35 km</h4>
                        <p>Range</p>
                    </div>
                    <div className='text-white '>
                        <h4 className='heading4'>6-8 Hours</h4>
                        <p>Charging Time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured