"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData, slides } from './data'
import ColorShowcase from "./ColorShowcase"
import AutoSwiper from '@/components/LoopCarousel/auto-swiper'
import RoshniLoopIMG from '../../public/assets/flash/GridLoop.webp'
import Complimentary from '../../public/assets/flash/Complimentary.png'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import { initFixOverflow } from '../fixOverflow'
import RoshniFeatuedIMG from '../../public/assets/flash/Featured-Section.png'
import Featured from '@/components/Features/HeroFeature'
import RoshniFeatuedMbl from '../../public/assets/flash/flash-mobile.webp'


const heading = 'Explore Flash – Ride Bold';
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
      <head>
        <title>Crown Electric - Flash</title>
      </head>
      <Banner />
      <StickyBar
        title="Crown Electric Flash"
        description="Designed for those who go the distance, Flash combines a robust 1500W Brushless Motor with a long-range 72V 47AH battery. It delivers smooth, powerful, and eco-friendly rides, perfect for daily commutes or spontaneous adventures. Flash is all about performance, reliability and clean mobility."
        gradient1="#30266C"
        gradient2="#111619"
        textColor="text-white"
        isSticky={false}
        price="250,000"
      />
      <Featured stats={statsData} imageAlt={"Flash Feature Image"} mblImage={RoshniFeatuedMbl} imageSrc={RoshniFeatuedIMG} mobileImageSrc={RoshniFeatuedMbl} textColor="text-black"
        cardBgColor="bg-white/40" titleVariant='h5-bold-jakarta' subtitleVariant='body-regular-jakarta' />
      <ColorShowcase />
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
      <AutoSwiper slideData={slides} heading={heading} colors={colors}/>
      <Specifications bottomImageTag={Complimentary} data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </div>
  )
}

export default page