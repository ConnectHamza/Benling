import React from 'react'
import KnightRiderLedIMG from '../../public/assets/Knight-Rider/Knight-Rider-LED.webp'

const LedSection = () => {
    return (
        <div className='w-full bg-white flex px-5 py-10 md:py-0 md:h-[100vh] h-[50vh]  md:items-center items-start justify-center'
        style={{
            backgroundImage: `url(${KnightRiderLedIMG.src})`,
            backgroundSize: 'contain',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="w-lg justify-end flex">
            <div className='md:w-[45%]'>
                <div>
                    <h3 className='text-black-200 heading3'>Powerful LED
                    Back Light</h3>
                        <p>The bright and durable LED back light enhances visibility and ensures safer rides, day or night.</p>
                </div>
               
            </div>
            </div>
        </div>
    )
}

export default LedSection