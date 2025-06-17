import React from 'react'
import SmartFeatureBG from '../../../public/assets/Roshni/Smart-Feature-BG.webp'
import SmartFeatureIMG from '../../../public/assets/Roshni/Smart-Feature-IMG.webp'
import Image from 'next/image'
import FeatureBar from './FeatureBar'

const SmartFeature = () => {
  return (
    <div className='md:w-full  flex flex-col justify-around items-center px-5 pt-10 md:pt-40 overflow-x-Hide'
    style={{
        backgroundImage: `url(${SmartFeatureBG.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
    }}
    >        
    <div>
    <h2 className='heading2 text-white text-center'>Smart Features for Every Ride</h2>
    </div>
   
    <div className='flex justify-center '>
        <Image src={SmartFeatureIMG} alt='Smart Feature IMG' className='w-[70%] z-40' />
    </div>
    <FeatureBar/>
    </div>
  )
}

export default SmartFeature