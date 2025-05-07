import React from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/sticky-bar'
import Tabs from './Tabs'
import Performance from './Performance'
import Blaze from './Blaze'
import Illumination from './Illumination'
import './styles/firefly.css'
import Benefits from './Benefits'
import {aboutSpecificationsData, aboutSpecificationsData2, faqsData} from './data'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/faqs'

const Firefly = () => {

  const heading = 'Knight Rider Own The Night';
  const colors = [
    { color: '#121212', percentage: 50 },
    { color: '#121212', percentage: 80 },
    { color: '#121212', percentage: 100 },
  ];

  return (
    <>
      <Banner />
      <StickyBar
        title="Benling Firefly"
        description="Experience the Firefly, a modern marvel combining sleek design with eco-friendly technology. Equipped with advanced Graphene Battery Technology and a powerful 1200W Brushless Motor, Firefly ensures unmatched performance, efficiency, and sustainable mobility for every journey."
        gradient1="#fff"
        gradient2="#fff"
        textColor="000"
      />
      <Blaze />
      <Tabs />
      <Performance />
      <Illumination />
      <Benefits />
      {/* <LoopMain imageSrc={FireflyLoopIMG} heading={heading} colors={colors} /> */}
      <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData}/>
    </>
  )
}

export default Firefly