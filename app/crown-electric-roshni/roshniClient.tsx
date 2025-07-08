"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import Intelligent from './Intelligent'
import SmartFeature from './SmartFeature/Main'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData, slides } from './data'
import Tabs from './Tabs'
import LoopMain from '@/components/LoopCarousel/loop-main'
import RoshniLoopIMG from '../../public/assets/Roshni/RoshniLoopIMG.webp'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import PerfectTabs from './PerfectTabs/PerfectTabs'
import { initFixOverflow } from '../fixOverflow'
import Featured from '@/components/Features/HeroFeature'
import RoshniFeatuedIMG from '../../public/assets/Roshni/Featured-Section.webp'
import AutoSwiper from '@/components/LoopCarousel/auto-swiper'




const heading = 'Explore Roshni Electric Ride';
const colors = [
  { color: '#121212', percentage: 50 },
  { color: '#121212', percentage: 80 },
  { color: '#121212', percentage: 100 },
];

const RoshniClient = () => {

  useEffect(() => {
    initFixOverflow();
  }, []);
  const statsData = [
    { value: "115–120 km", label: "Range Per Charge" },
    { value: "55-60 km/h", label: "Top Speed" },
    { value: "6–8 Hours", label: "Charging Time" },
    { value: "≤20°", label: "Climbing Angle" },
  ];

  return (
    <div>
      <Banner />
      <StickyBar
        title="Crown Electric Roshni"
        description='Experience the Crown Electric Roshni, a perfect fusion of innovative design and eco-friendly technology. As a leading 1200W electric scooter in Pakistan, it’s powered by advanced graphene battery technology and a reliable 1200W brushless motor — delivering smooth, efficient, and sustainable mobility for every journey.'
        gradient1="#B9B5B0"
        gradient2="#F8F8F8"
        textColor="text-black-30"
        price='215,000'
      />
      <div>

      </div>
      <Featured
        stats={statsData}
        imageAlt="Roshni Feature Image"
        imageSrc={RoshniFeatuedIMG}
        mobileImageSrc={RoshniFeatuedIMG}
        textColor="text-white"
        cardBgColor="bg-black/40"
        titleVariant='h5-bold-jakarta'
        subtitleVariant='body-regular-jakarta'
        itemsPosition=""
      />
      <Tabs />
      <Intelligent />
      <SmartFeature />
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
      <AutoSwiper slideData={slides} heading={heading} colors={colors}/>
      <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} isGraphene={true}/>
      <Faqs data={faqsData} />
    </div>
  )
}

export default RoshniClient