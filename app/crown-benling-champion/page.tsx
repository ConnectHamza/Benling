"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData } from './data'
import ColorShowcase from "./ColorShowcase"
import LoopMain from '@/components/LoopCarousel/loop-main'
import ChampionLoopIMG from '../../public/assets/Champion/ChampionLoop.webp'
import Complimentary from '../../public/assets/RoshniX/Complimentary.png'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import { initFixOverflow } from '../fixOverflow'
import Featured from '@/components/Features/HeroFeature'
import ChampionFeatuedIMG from '../../public/assets/Champion/Benling-Champion-Banner.webp'
import RoshniMobile from '../../public/assets/RoshniX/Roshni-x-feature-mobile.png'


const heading = 'Champion Your Commute.';
const colors = [
  { color: '#fff', percentage: 50 },
  { color: '#dedede', percentage: 80 },
  { color: '#b1b1b1', percentage: 100 },
];
const statsData = [
  { value: "65-70 km/h", label: "Top Speed" },
  { value: "200-220 km", label: "Range" },
  { value: "5-6 Hours", label: "Charging Time" },
  { value: "Yes", label: "NFC Unlock" },
];


const page = () => {

  useEffect(() => {
    initFixOverflow();
  }, []);

  return (
    <div>
      <head>
        <title>Crown Benling - Roshni X</title>
      </head>
      <Banner />
      <StickyBar
        title="Crown Benling Champion"
        description='Experience next-gen mobility with the Roshni X. Powered by a 1500W Brushless Motor and a durable 72V 36AH Graphene Battery, it delivers smooth, powerful, and eco-friendly rides. Designed for urban explorers, Roshni X offers efficiency, style, and zero emissions in one sleek package.'
        gradient1="#BC3747"
        gradient2="#081118"
        textColor="text-white"
      />
      <Featured stats={statsData} imageAlt={"RoshniX Feature Image"} mobileImageSrc={ChampionFeatuedIMG} imageSrc={ChampionFeatuedIMG} textColor="text-black"
        cardBgColor="bg-white/40" titleVariant='h5-bold-jakarta' subtitleVariant='body-regular-jakarta' />
      {/* <Featured /> */}
      <ColorShowcase />
      <div className='bg-[#081118]'>
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
      </div>
      <div className='bg-[#081118]'>
      <LoopMain imageSrc={ChampionLoopIMG} heading={heading} colors={colors} />
      </div>
      <Specifications  data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </div>
  )
}

export default page