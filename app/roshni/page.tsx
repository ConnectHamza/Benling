"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import Intelligent from './Intelligent'
import SmartFeature from './SmartFeature/Main'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData } from './data'
import Tabs from './Tabs'
import LoopMain from '@/components/LoopCarousel/loop-main'
import RoshniLoopIMG from '../../public/assets/Roshni/RoshniLoopIMG.webp'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import PerfectTabs from './PerfectTabs/PerfectTabs'
import { initFixOverflow } from '../fixOverflow'
import Featured from '@/components/Features/HeroFeature'
import RoshniFeatuedIMG from '../../public/assets/Roshni/Featured-Section.webp'



const heading = 'Explore Roshni Electric Ride';
const colors = [
  { color: '#121212', percentage: 50 },
  { color: '#121212', percentage: 80 },
  { color: '#121212', percentage: 100 },
];

const page = () => {

  useEffect(() => {
    initFixOverflow();
  }, []);
  const statsData = [
    { value: "115–120 km", label: "Range Per Charge" },
    { value: "50-60 km/h", label: "Top Speed" },
    { value: "6–8 Hours", label: "Charging Time" },
    { value: "≤20°", label: "Climbing Angle" },
  ];

  return (
    <div>
      <Banner />
      <StickyBar
        title="Crown Benling Roshni"
        headingPartOne="Experience the Roshni, a blend of innovative design and eco-friendly technology. Powered by advanced Graphene Battery Technology and a reliable 1200W Brushless Motor, "
        headingPartTwo="Roshni promises smooth, efficient, and sustainable mobility tailored for every journey."
        colorOne="#000"
        colorTwo="#9F9A94"
        gradients={"bg-gradient-to-br from-[#B9B5B0] to-[#F8F8F8]"}
      />
      <div>
        
      </div>
      <Featured stats={statsData} imageAlt="Roshni Feature Image" imageSrc={RoshniFeatuedIMG} textColor="text-white"
        cardBgColor="bg-black/40" titleVariant='h5-bold-jakarta' subtitleVariant='body-regular-jakarta' />
      <Tabs />
      <Intelligent />
      <SmartFeature />
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
      <LoopMain imageSrc={RoshniLoopIMG} heading={heading} colors={colors} />
      <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </div>
  )
}

export default page