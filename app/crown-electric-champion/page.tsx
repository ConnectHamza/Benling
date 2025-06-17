"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData, slides } from './data'
import ColorShowcase from "./ColorShowcase"
import LoopMain from '@/components/LoopCarousel/loop-main'
import ChampionLoopIMG from '../../public/assets/Champion/ChampionLoop.webp'
import Complimentary from '../../public/assets/RoshniX/Complimentary.png'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import { initFixOverflow } from '../fixOverflow'
import Featured from '@/components/Features/HeroFeature'
import ChampionFeatuedIMG from '../../public/assets/Champion/Benling-Champion-Banner.webp'
import CHampionMobile from '../../public/assets/Champion/Benling-Champion-Banner-Mobile.webp'
import AutoSwiper from '@/components/LoopCarousel/auto-swiper'


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
    <>
      <head>
        <title>Crown Electric - Champion</title>
      </head>
      <Banner />
      <StickyBar
        title="Crown Champion"
        description='Powered by a 1200W brushless motor and a 72V 60Ah Lithium-LiFePO₄ battery, the Crown Benling Champion offers a range of 200–220 km and speeds up to 70 km/h. Its sturdy frame and eco-friendly design make it ideal for both bold adventures and daily rides.'
        gradient1="#BC3747"
        gradient2="#081118"
        textColor="text-white"
        price='325,000'
      />
      <Featured
        stats={statsData}
        imageAlt={"Champion Feature Image"}
        mobileImageSrc={CHampionMobile}
        imageSrc={ChampionFeatuedIMG}
        textColor="text-black"
        cardBgColor="bg-white/40"
        titleVariant='h5-bold-jakarta'
        subtitleVariant='body-regular-jakarta'
        itemsPosition="left"
      />
      {/* <Featured /> */}
      <ColorShowcase />
      <div className='bg-[#081118]'>
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
      </div>
      <div className='bg-[#081118] py-20'>
      <AutoSwiper slideData={slides} heading={heading} colors={colors}/>
      </div>
      <Specifications  data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </>
  )
}

export default page