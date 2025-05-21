import React from 'react'
import InnovationSection from './Heading'
import Carousel from './Carousel'
import AdvancedImg from '../../../public/assets/Ezee/CasouselIMG/Advanced.webp'
import LedImg from '../../../public/assets/Ezee/CasouselIMG/LED.webp'
import GripImg from '../../../public/assets/Ezee/CasouselIMG/RoadGrip.webp'
import StorageImg from '../../../public/assets/Ezee/CasouselIMG/Storage.webp'
import ComfortImg from '../../../public/assets/Ezee/CasouselIMG/UltimateComfort.webp'


const InnovationMain = () => {

  const slidesData = [
    {
      image: `${AdvancedImg.src}`,
      heading: 'Advanced Front Disc Brakes'
    },
    {
      image: `${LedImg.src}`,
      heading: 'Full LED Front Lights'
    },

    {
      image: `${StorageImg.src}`,
      heading: 'Hook, Storage & Handy Cup Holder'
    },
    
  ];

  return (
    <div className='w-full flex flex-col md:justify-center px-5 md:py-[100px] justify-center py-20'>
       
        <InnovationSection />
        <Carousel slides={slidesData}/>
    
    </div>
  )
}

export default InnovationMain