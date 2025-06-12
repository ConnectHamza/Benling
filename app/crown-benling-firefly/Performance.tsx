import Typography from '@/components/GradientText/Typography'
import React from 'react'


const Performance = () => {
    return (
        <div className=" w-full flex justify-end md:px-10 px-5 py-10 md:h-[90vh]  items-center fireflyUnleashed">

            <div className="md:w-[45%]">
                <div data-aos="zoom-in">
                <Typography variant='h2-bold-magistral'>
                    Performance<br></br> Unleashed
                </Typography>
                <br />
                </div>                
                <div className='flex flex-wrap md:justify-between mt-5 gap-5 '>
                    <div className='bg-gray-10 md:py-5 py-3 md:px-8 px-5 rounded-10 md:w-[60%] hover:shadow-xl shadow-md' data-aos="fade-up">
                        <div className='md:text-[20px] text-[16] font-normal font-jakarta text-black-50'><Typography variant='body-regular-jakarta' style={{ color: "#32CFB8" }}>Top Speed</Typography>
                            <Typography style={{ color: "#052E2C" }} as="span" variant='h5-semibold-jakarta'>
                                55 to 60 km/h
                            </Typography>
                        </div>
                    </div>
                    <div className='bg-gray-10 md:py-5 py-3 md:px-8 px-5 rounded-10 md:w-[35%] hover:shadow-xl shadow-md' data-aos="fade-up">

                        <div className='md:text-[20px] text-[16] font-normal font-jakarta text-black-50'><Typography variant='body-regular-jakarta' style={{ color: "#32CFB8" }}>Climbing Angle</Typography>
                            <Typography style={{ color: "#052E2C" }} as="span" variant='h5-semibold-jakarta'>
                                ≤15°
                            </Typography>
                        </div>
                    </div>
                    <div className='bg-gray-10 md:py-5 py-3 md:px-8 px-5 rounded-10 md:w-[50%] hover:shadow-xl shadow-md' data-aos="fade-up">
                         <div className='md:text-[20px] text-[16] font-normal font-jakarta text-black-50'><Typography variant='body-regular-jakarta' style={{ color: "#32CFB8" }}>Full Charge Range</Typography>
                            <Typography style={{ color: "#052E2C" }} as="span" variant='h5-semibold-jakarta'>
                                Up to 100KM
                            </Typography>
                        </div>
                    </div>
                    <div className='bg-gray-10 md:py-5 py-3 md:px-8 px-5 rounded-10 md:w-[45%] hover:shadow-xl shadow-md' data-aos="fade-up">
                           <div className='md:text-[20px] text-[16] font-normal font-jakarta text-black-50'><Typography variant='body-regular-jakarta' style={{ color: "#32CFB8" }}>Charger Time</Typography>
                            <Typography style={{ color: "#052E2C" }} as="span" variant='h5-semibold-jakarta'>
                                6-8 Hours
                            </Typography>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Performance