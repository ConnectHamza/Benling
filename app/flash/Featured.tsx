import Image from 'next/image'
import React from 'react'
import RoshniFeatuedIMG from '../../public/assets/RoshniX/Featured-Section.png'

const Featured = () => {
    return (
        <div className='w-full flex justify-center relative self-center'>
            <Image src={RoshniFeatuedIMG} alt='Roshni Featured IMG' className='w-full'/>
            <div className="md:w-lg absolute md:bottom-20 bottom-[8vh]">
            <div className=" flex flex-wrap md:flex-nowrap  justify-between gap-8 text-center mx-5 md:mx-0 self-center">
                <div className='text-white'>
                    <h4 className='heading4'>115-120 km</h4>
                    <p>Range Per Charge</p>
                </div>
                <div className='text-white '>
                    <h4 className='heading4'>70-80 km/h</h4>
                    <p>Top Speed</p>
                </div>
                <div className='text-white '>
                    <h4 className='heading4'>6-8 Hours</h4>
                    <p>Charging Time</p>
                </div>
                <div className='text-white '>
                    <h4 className='heading4'>≤20°</h4>
                    <p>Climbing Angle</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Featured