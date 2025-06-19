"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData, slides } from './data'
import LoopMain from '@/components/LoopCarousel/loop-main'
import RaftaatLoopIMG from '../../public/assets/Raftaar/RaftaarLoopIMG.webp'
import Complimentary from '../../public/assets/RoshniX/Complimentary.png'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import { initFixOverflow } from '../fixOverflow'
import Featured from '@/components/Features/HeroFeature'
import RaftaarFeatuedIMG from '../../public/assets/Raftaar/Crown-Electric-Mobility-Raftaar-Banner.webp'
import RaftaarMobile from '../../public/assets/Raftaar/Crown-Electric-Mobility-Raftaar-Banner-Mobile.webp'
import Tabs from './Tabs'
import AutoSwiper from '@/components/LoopCarousel/auto-swiper'


const heading = 'Ride the Rush. Own the Raftaar.';
const colors = [
  { color: '#fff', percentage: 50 },
  { color: '#fff', percentage: 80 },
  { color: '#dedede', percentage: 100 },
];
const statsData = [
  { value: "85-90 km/h", label: "Top Speed" },
  { value: "140-160 km", label: "Range" },
  { value: "4-5 Hours", label: "Charging Time" },
  { value: "2000W", label: "NFC Unlock" },
];


const RaftaarClient = () => {

  useEffect(() => {
    initFixOverflow();
  }, []);

  return (
    <div>
      <Banner />
      <StickyBar
        title="Crown Electric Raftaar"
        description='Crown Raftaar offers speed, style, and efficiency with a 2000W motor and 72V 40Ah Lithium Iron Phosphate battery, reaching 85–90 km/h and 140–160 km range. Featuring fast 72V 8A charging, sleek design, and zero emissions, it’s ideal for modern urban riders.'
        gradient1="#AA2300"
        gradient2="#371700"
        textColor="text-white"
        price='299,000'
      />
      <Featured
        stats={statsData}
        imageAlt={"Raftaar Feature Image"}
        mobileImageSrc={RaftaarMobile}
        imageSrc={RaftaarFeatuedIMG}
        textColor="text-black"
        cardBgColor="bg-white/70"
        titleVariant='h5-bold-jakarta'
        subtitleVariant='body-regular-jakarta'
        itemsPosition=""
      />
      <Tabs />      
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
      <div className='bg-[#371700] py-20'>
      <AutoSwiper slideData={slides} heading={heading} colors={colors}/>
      </div>
      <Specifications  data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </div>
  )
}

export default RaftaarClient