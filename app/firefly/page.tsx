import React from 'react'
import Banner from './Banner'
import StickyBar from '@/app/components/StickyBar/sticky-bar'
import Tabs from './Tabs'
import Performance from './Performance'
import Blaze from './Blaze'
import Illumination from './Illumination'
import './styles/firefly.css'
import Benefits from './Benefits'
<<<<<<< HEAD
import { aboutSpecificationsData, aboutSpecificationsData2, faqsData } from './data'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import FireflyLoopIMG from '../../public/assets/Firefly/Firefly-Loop-IMG.webp'
import LoopMain from '@/components/LoopCarousel/loop-main'

=======
import {aboutSpecificationsData, aboutSpecificationsData2, faqsData} from './data'
import Specifications from '@/app/components/TechnicalSpecifications/Specifications'
import Faqs from '@/app/components/Faqs/faqs'
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002

const Firefly = () => {

  const heading = 'Light Up Your Journey with Firefly';
  const colors = [
    { color: '#121212', percentage: 50 },
    { color: '#121212', percentage: 80 },
    { color: '#121212', percentage: 100 },
  ];

  return (
    <>
      <Banner />
      <StickyBar
        title="Crown Benling Firefly"
        headingPartOne="Experience the Firefly, a modern marvel combining sleek design with eco-friendly technology. Equipped with advanced Graphene Battery Technology and a powerful 1200W Brushless Motor, "
        headingPartTwo="Firefly ensures unmatched performance, efficiency, and sustainable mobility for every journey."
        colorOne="#052E2C"
        colorTwo="#19B39F"
        gradients={"bg-gradient-to-br from-[#9CF3E1] to-[#F0FDFA]"}
      />
      <Blaze />
      <Tabs />
      <Performance />
      <Illumination />
      <Benefits />
      <LoopMain imageSrc={FireflyLoopIMG} heading={heading} colors={colors} />
      <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </>
  )
}

export default Firefly