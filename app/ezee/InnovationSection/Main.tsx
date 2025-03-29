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
      heading: 'Another Slide Title'
    },
    {
      image: `${GripImg.src}`,
      heading: 'Another Slide Title'
    },
    {
      image: `${StorageImg.src}`,
      heading: 'Another Slide Title'
    },
    {
      image: `${ComfortImg.src}`,
      heading: 'Another Slide Title'
    },
    
  ];

  return (
    <div className='w-full flex flex-col md:justify-center px-5 md:py-[100px] py-20'>
       
        <InnovationSection />
        <Carousel slides={slidesData}/>
    
    </div>
  )
}

export default InnovationMain