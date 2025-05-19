"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import Featured from './Featured'
import Intelligent from './Intelligent'
import SmartFeature from './SmartFeature/Main'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData } from './data'
import Tabs from './Tabs'
import ColorShowcase from "./ColorShowcase"
import LoopMain from '@/components/LoopCarousel/loop-main'
import RoshniLoopIMG from '../../public/assets/RoshniX/GridLoop.png'
import Complimentary from '../../public/assets/RoshniX/Complimentary.png'

import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import PerfectTabs from './PerfectTabs/PerfectTabs'
import { initFixOverflow } from '../fixOverflow'


const heading = 'Explore Roshni X - Feel Alive';
const colors = [
  { color: '#121212', percentage: 50 },
  { color: '#121212', percentage: 80 },
  { color: '#121212', percentage: 100 },
];

const page = () => {

  useEffect(() => {
    initFixOverflow();
  }, []);

  return (
    <div>
      <Banner />
      <StickyBar
        title="Crown Benling RoshniX"
        headingPartOne="Experience next-gen mobility with the Roshni X. Powered by a 1500W Brushless Motor and a durable 72V 36AH Graphene Battery, it delivers smooth, powerful, and eco-friendly rides. "
        headingPartTwo="Designed for urban explorers, Roshni X offers efficiency, style, and zero emissions in one sleek package."
        colorOne="#fff"
        colorTwo="#FDCF0A"
        gradients={"bg-gradient-to-br from-[#534C2A] to-[#0F0C02]"}
      />
      <Featured />
      <ColorShowcase />
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
      <LoopMain imageSrc={RoshniLoopIMG} heading={heading} colors={colors} />
      <Specifications bottomImageTag={Complimentary} data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </div>
  )
}

export default page