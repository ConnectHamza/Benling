import Typography from '@/components/GradientText/Typography'
import React from 'react'


const Performance = () => {
    return (
        <div className=" w-full flex justify-end md:px-10 px-5 py-10 md:h-[90vh]  items-center fireflyUnleashed">

            <div className="md:w-[45%]">
                <Typography variant='h2-bold-magistral'>
                    Performance
                </Typography>
                <br />
                <Typography variant={"h2-bold-magistral"} className='leading-10'>Unleashed</Typography>
                <div className='flex flex-wrap md:justify-between mt-5 gap-5 '>
                    <div className='bg-gray-10 md:py-5 py-3 md:px-8 px-5 rounded-10 md:w-[60%] hover:shadow-md'>
                        <div className='md:text-[20px] text-[16] font-normal font-jakarta text-black-50'><Typography variant='body-regular-jakarta' style={{ color: "#32CFB8" }}>Top Speed</Typography><br></br>
                            <Typography style={{ color: "#052E2C" }} as="span" variant='h5-semibold-jakarta'>
                                55 to 60 km/h
                            </Typography>
                        </div>
                    </div>
                    <div className='bg-gray-10 md:py-5 py-3 md:px-8 px-5 rounded-10 md:w-[35%] hover:shadow-md'>

                        <div className='md:text-[20px] text-[16] font-normal font-jakarta text-black-50'><Typography variant='body-regular-jakarta' style={{ color: "#32CFB8" }}>Climbing Angle</Typography><br></br>
                            <Typography style={{ color: "#052E2C" }} as="span" variant='h5-semibold-jakarta'>
                                ≤15°
                            </Typography>
                        </div>
                    </div>
                    <div className='bg-gray-10 md:py-5 py-3 md:px-8 px-5 rounded-10 md:w-[50%] hover:shadow-md'>
                         <div className='md:text-[20px] text-[16] font-normal font-jakarta text-black-50'><Typography variant='body-regular-jakarta' style={{ color: "#32CFB8" }}>Full Charge Range</Typography><br></br>
                            <Typography style={{ color: "#052E2C" }} as="span" variant='h5-semibold-jakarta'>
                                Up to 100KM
                            </Typography>
                        </div>
                    </div>
                    <div className='bg-gray-10 md:py-5 py-3 md:px-8 px-5 rounded-10 md:w-[45%] hover:shadow-md'>
                           <div className='md:text-[20px] text-[16] font-normal font-jakarta text-black-50'><Typography variant='body-regular-jakarta' style={{ color: "#32CFB8" }}>Charger Time</Typography><br></br>
                            <Typography style={{ color: "#052E2C" }} as="span" variant='h5-semibold-jakarta'>
                                6-8 hours
                            </Typography>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Performance