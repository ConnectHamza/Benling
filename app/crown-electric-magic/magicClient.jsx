"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData, slides } from './data'
import AutoSwiper from '@/components/LoopCarousel/auto-swiper'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import { initFixOverflow } from '../fixOverflow'
import Tabs from './Tabs'
import MagicFeaturedIMG from '../../public/assets/Magic/Crown-Electric-Magic-Banner.webp'
import MagicMbl from '../../public/assets/Magic/Crown-Electric-Magic-Mobile-Banner.webp'

import Featured from '@/components/Features/HeroFeature'

const heading = 'Move with the Funk. Touch the Magic.';
const colors = [
  { color: '#121212', percentage: 50 },
  { color: '#121212', percentage: 80 },
  { color: '#121212', percentage: 100 },
];
const statsData = [
  { value: "30-35 km/h", label: "Top Speed" },
  { value: "30-35 km", label: "Range" },
  { value: "6-8 Hours", label: "Charging Time" },
  { value: "≤15°", label: "Climbing Angle" },

];
const MagicClient = () => {

  useEffect(() => {
    initFixOverflow();
  }, []);

  return (
    <div>
      <Banner />
      <StickyBar
        title="Crown Electric Magic"
        description="Crown Electric Magic is a smart, compact electric bike designed for daily convenience. Powered by a 450W brushless motor and a 48V 23Ah advanced Graphene battery, it delivers a smooth top speed of 30–35 km/h and a reliable range of 30–35 km — perfect for short-distance city travel."
        gradient1="#FBEFD9"
        gradient2="#EFC482"
        textColor="text-black-30"
        price="99,999"
      />
      <Featured stats={statsData}  mobileImageSrc={MagicMbl} imageAlt={"RoshniX Featured Image"} imageSrc={MagicFeaturedIMG} textColor="text-black"
        cardBgColor="bg-white/40" titleVariant='h5-bold-jakarta' subtitleVariant='body-regular-jakarta' />
      <Tabs />
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
      <AutoSwiper slideData={slides} heading={heading} colors={colors}/>
      <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} isGraphene={true}/>
      <Faqs data={faqsData} />
    </div>
  )
}

export default MagicClient