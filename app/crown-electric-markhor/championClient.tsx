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
import MarkhorFeatuedIMG from '../../public/assets/Markhor/Crown-Electric-Mobility-Markhor-Banner.webp'
import MarkhorMobile from '../../public/assets/Markhor/Crown-Electric-Mobility-Markhor-Banner-mobile.webp'
import AutoSwiper from '@/components/LoopCarousel/auto-swiper'


const heading = 'Crown Markhor — Strength is the New Style';
const colors = [
  { color: '#0A0A0A', percentage: 50 },
  { color: '#0A0A0A', percentage: 80 },
  { color: '#0A0A0A', percentage: 100 },
];
const statsData = [
  { value: "90-100 km/h", label: "Top Speed" },
  { value: "90-100 km", label: "Range" },
  { value: "4-5 Hours ", label: "Charging Time" },
  { value: "3000W", label: "Brushless Motor" },
];


const ChampionClient = () => {

  useEffect(() => {
    initFixOverflow();
  }, []);

  return (
    <>
      <Banner />
      <StickyBar
        title="Crown Electric Markhor"
        description='Crown Markhor, a true beast on the road, engineered for power, performance, and next-gen mobility. Equipped with a robust 3000W motor and advanced 72V 40Ah Lithium Iron Phosphate (LiFePO₄) battery, it delivers an impressive range of 90–100 km and a top speed of 90–100 km/h, with a quick charging time of just 4–5 hours.'
        gradient1="#F7E2B1"
        gradient2="#FEFAEE"
        textColor="text-black-30"
        price='380,000'
        isLithium={true}
      />
      <Featured
        stats={statsData}
        imageAlt={"Markhor Feature Image"}
        mobileImageSrc={MarkhorMobile}
        imageSrc={MarkhorFeatuedIMG}
        textColor="text-black"
        cardBgColor="bg-white/40"
        titleVariant='h5-bold-jakarta'
        subtitleVariant='body-regular-jakarta'
        itemsPosition=""
      />
      {/* <Featured /> */}
      <ColorShowcase />
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />

      <div className='md:pb-0 pt-20 py-20'>
      <AutoSwiper slideData={slides} heading={heading} colors={colors}/>
      </div>
      <Specifications  data={aboutSpecificationsData} data2={aboutSpecificationsData2} isLithium={true}/>
      {/* <Faqs data={faqsData} /> */}
    </>
  )
}

export default ChampionClient