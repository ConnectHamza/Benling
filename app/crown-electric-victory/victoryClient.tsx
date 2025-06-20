"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData, slides } from './data'
import LoopMain from '@/components/LoopCarousel/loop-main'
// import VictoryLoopIMG from '../../public/assets/VIctory/VictoryLoopImage.png'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import { initFixOverflow } from '../fixOverflow'
import Featured from '@/components/Features/HeroFeature'
import Tabs from './Tabs'
import imageSrc from '../../public/assets/Victory/Benling-Victory-Banner.webp'
import imageSrcMob from '../../public/assets/Victory/Victory-Banner-mobile.webp'
import AutoSwiper from '@/components/LoopCarousel/auto-swiper'


const heading = 'Crown Victory – The Elegant Swag';

const colors = [
  { color: '#000', percentage: 50 },
  { color: '#000', percentage: 80 },
  { color: '#000', percentage: 100 },
];

const statsData = [
  { value: "50-55 km/h", label: "Top Speed" },
  { value: "100-120 km", label: "Range" },
  { value: "4-5 Hours", label: "Charging Time" },
  { value: "Yes", label: "NFC Unlock" },
];


const VictoryClient = () => {

  useEffect(() => {
    initFixOverflow();
  }, []);

  return (
    <div>
      <Banner />
      <StickyBar
        title="Crown Electric Victory"
        description='Introducing the Crown Victory—sleek design with unmatched performance. Powered by a 1000W motor and 72V 30Ah lithium battery, it offers a 50-55 km/h top speed and up to 120 km range. Perfect for city commuting or exploration, it delivers confidence, style, and zero emissions.'
        gradient1="#B7C6E3"
        gradient2="#FFFFFF"
        textColor="text-[#536478]"
        price='265,000'
      />
      <Featured
        stats={statsData}
        imageAlt={"Champion Feature Image"}
        mobileImageSrc={imageSrcMob}
        imageSrc={imageSrc}
        textColor="text-black"
        cardBgColor="bg-white/40"
        titleVariant='h5-bold-jakarta'
        subtitleVariant='body-regular-jakarta'
        itemsPosition=""
      />
      <Tabs />
      
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />      
      <AutoSwiper slideData={slides} heading={heading} colors={colors}/>
      <Specifications  data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </div>
  )
}

export default VictoryClient
