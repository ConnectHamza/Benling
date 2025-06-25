"use client"
import React, { useEffect } from 'react'
import StickyBar from '@/components/StickyBar/stickyBar'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData, slides } from './data'
import AutoSwiper from '@/components/LoopCarousel/auto-swiper'
import ScootyGrid from '../../public/assets/mini-scooty/ScootyGrid.png'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import { initFixOverflow } from '../fixOverflow'
import Tabs from './Tabs'
import Banner from './Banner'
import Featured from '@/components/Features/HeroFeature'
import MiniFeatuedIMG from '../../public/assets/mini-scooty/featured-section.png'

const heading = 'Explore Mini – Small Ride, Big Freedom';
const colors = [
  { color: '#121212', percentage: 50 },
  { color: '#121212', percentage: 80 },
  { color: '#121212', percentage: 100 },
];
const statsData = [
  { value: "30-35km/h", label: "Top Speed" },
  { value: "30-35km", label: "Range" },
  { value: "6-8 Hours", label: "Charging Time" },
  { value: "≤15°", label: "Climbing Angle" },
];

const MiniClient = () => {

  useEffect(() => {
    initFixOverflow();
  }, []);

  return (
    <div>
      <Banner />
      <StickyBar
        title="Crown Mini Scooty"
        description="Perfect for short city rides, the Mini Scooty features a 450W Motor and a reliable 48V 23AH battery. Its lightweight design, easy handling, and zero-emission drive make it ideal for everyday convenience with a touch of timeless charm."
        gradient1="#1DADB5"
        gradient2="#05080C"
        textColor="text-white"
        price="99,999"
      />
      <Featured stats={statsData} imageAlt={"Mini Scooty Feature Image"} mobileImageSrc={MiniFeatuedIMG} imageSrc={MiniFeatuedIMG} textColor="text-black"
        cardBgColor="bg-white/40" titleVariant='h5-bold-jakarta' subtitleVariant='body-regular-jakarta' />
      <Tabs />
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
      <AutoSwiper slideData={slides} heading={heading} colors={colors}/>
      <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </div>
  )
}

export default MiniClient