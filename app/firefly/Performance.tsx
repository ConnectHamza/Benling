import React from 'react'


const Performance = () => {
  return (
    <div className=" w-full flex justify-end md:px-10 px-5 py-10 md:h-[90vh] items-center fireflyUnleashed">
        
        <div className="md:w-[40%]">
            <h2 className='heading3'>Performance <br></br>Unleashed</h2>
            <div className='flex flex-wrap md:justify-between mt-5 gap-5 '>
            <div className='bg-gray-10 md:py-5 py-3 md:px-8 px-5 rounded-10 md:w-[60%] hover:shadow-md'>
                <h4 className='md:text-[32px] text-[20px] font-bold text-black-50'><span className='md:text-[20px] text-[13px] font-[500] text-gray-300'>Top Speed</span><br></br>70 to 80 km/h</h4>
            </div>
            <div className='bg-gray-10 md:py-5 py-3 md:px-8 px-5 rounded-10 md:w-[35%] hover:shadow-md'>
                <h4 className='md:text-[32px] text-[20px] font-bold text-black-50'><span className='md:text-[20px] text-[13px] font-[500] text-gray-300'>Climbing Angle</span><br></br>≤15°</h4>
            </div>
            <div className='bg-gray-10 md:py-5 py-3 md:px-8 px-5 rounded-10 md:w-[50%] hover:shadow-md'>
                <h4 className='md:text-[32px] text-[20px] font-bold text-black-50'><span className='md:text-[20px] text-[13px] font-[500] text-gray-300'>Full Charge Range</span><br></br>Up to 105KM</h4>
            </div>
            <div className='bg-gray-10 md:py-5 py-3 md:px-8 px-5 rounded-10 md:w-[45%] hover:shadow-md'>
                <h4 className='md:text-[32px] text-[20px] font-bold text-black-50'><span className='md:text-[20px] text-[13px] font-[500] text-gray-300'>Charger Time</span><br></br>2-3 hours</h4>
            </div>
            </div>
        
        </div>
    </div>
  )
}

export default Performance