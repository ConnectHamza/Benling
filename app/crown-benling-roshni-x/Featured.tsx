import Image from 'next/image'
import React from 'react'
import RoshniFeatuedIMG from '../../public/assets/RoshniX/Featured-Section.png'

const Featured = () => {
    return (
        <div className='w-full flex justify-center relative self-center'>
            <Image src={RoshniFeatuedIMG} alt='Roshni Featured IMG' className='w-full'/>
            <div className="md:w-lg absolute md:bottom-20 bottom-[8vh]">
            </div>
        </div>
    )
}

export default Featured