"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData } from './data'
import ColorShowcase from "./ColorShowcase"
import LoopMain from '@/components/LoopCarousel/loop-main'
import RoshniLoopIMG from '../../public/assets/RoshniX/GridLoop.png'
import Complimentary from '../../public/assets/RoshniX/Complimentary.png'

import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import { initFixOverflow } from '../fixOverflow'
import Featured from '@/components/Features/HeroFeature'
import RoshniFeatuedIMG from '../../public/assets/RoshniX/Featured-Section.png'
import RoshniMobile from '../../public/assets/RoshniX/Roshni-x-feature-mobile.png'


const heading = 'Explore Roshni X - Feel Alive';
const colors = [
  { color: '#121212', percentage: 50 },
  { color: '#121212', percentage: 80 },
  { color: '#121212', percentage: 100 },
];
const statsData = [
  { value: "150 km", label: "Range" },
  { value: "70 km/h", label: "Top Speed" },
  { value: "9-11 Hours", label: "Charging Time" },
  { value: "≤20°", label: "Climbing Angle" },
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
        description='Experience next-gen mobility with the Roshni X. Powered by a 1500W Brushless Motor and a durable 72V 36AH Graphene Battery, it delivers smooth, powerful, and eco-friendly rides. Designed for urban explorers, Roshni X offers efficiency, style, and zero emissions in one sleek package.'
        gradient1="#534C2A"
        gradient2="#0F0C02"
        textColor="text-[#FDCF0A]"
      />
      <Featured stats={statsData} imageAlt={"RoshniX Feature Image"} mobileImageSrc={RoshniMobile} imageSrc={RoshniFeatuedIMG} textColor="text-black"
        cardBgColor="bg-white/40" titleVariant='h5-bold-jakarta' subtitleVariant='body-regular-jakarta' />
      {/* <Featured /> */}
      <ColorShowcase />
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
      <LoopMain imageSrc={RoshniLoopIMG} heading={heading} colors={colors} />
      <Specifications bottomImageTag={Complimentary} data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </div>
  )
}

export default page