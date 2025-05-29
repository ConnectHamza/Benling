import Image from 'next/image'
import React from 'react'
import MiniFeatuedIMG from '../../public/assets/Spark/featured-section.png'

const Featured = () => {
    return (
        <div className='w-full h-[80vh]flex justify-center relative self-center'>
            <Image src={MiniFeatuedIMG} alt='Roshni Featured IMG' className='w-full' />
        </div>
    )
}

export default Featured