import React from 'react'
import KnightRiderDesignIMG from '../../public/assets/Knight-Rider/Knight-Rider-Design.webp'

const DesignedSection = () => {
    return (
        <div className='w-full bg-black-200 flex px-5 py-10 md:py-0 md:h-[100vh] h-[75vh]  md:items-center items-end justify-center'
        style={{
            backgroundImage: `url(${KnightRiderDesignIMG.src})`,
            backgroundSize: 'contain',
            backgroundPosition: 'top right',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="w-lg">
            <div className='md:w-[45%] animation-scroll'>
                <div>
                    <h3 className='text-white heading3 font-magistral'>Designed for Power
                        and Performance</h3>
                </div>
                <div className='flex md:gap-10 md:mt-10 mt-5'>
                    <div className='w-[50%]'>
                        <h4 className='text-white md:text-[20px] text-[16px] font-jakarta font-normal'>
                            Top Speed <br></br> <span className='text-gray-200 md:text-[32px] text-[20px] font-bold font-jakarta'>60km/h</span>
                        </h4>
                    </div>
                    <div className='w-[50%]'>
                        <h4 className='text-white md:text-[20px] text-[16px] font-jakarta font-normal'>
                        Graphene Battery <br></br> <span className='text-gray-200 md:text-[32px] text-[20px] font-bold font-jakarta'>72V / 35Ah/h</span>
                        </h4>
                    </div>
                </div>
                <div className='flex md:gap-10 md:mt-5 mt-3'>
                    <div className='w-[50%]'>
                        <h4 className='text-white md:text-[20px] text-[16px] font-jakarta font-normal'>
                        Full Charge Range <br></br> <span className='text-gray-200 md:text-[32px] text-[20px] font-bold font-jakarta'>Up to 105KM</span>
                        </h4>
                    </div>
                    <div className='w-[50%]'>
                        <h4 className='text-white md:text-[20px] text-[16px] font-jakarta font-normal'>
                        Brushless Motor <br></br> <span className='text-gray-200 md:text-[32px] text-[20px] font-bold font-jakarta'>1200W </span>
                        </h4>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DesignedSection