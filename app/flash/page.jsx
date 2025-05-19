"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData } from './data'
import ColorShowcase from "./ColorShowcase"
import LoopMain from '@/components/LoopCarousel/loop-main'
import RoshniLoopIMG from '../../public/assets/flash/GridLoop.webp'
import Complimentary from '../../public/assets/flash/Complimentary.png'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import { initFixOverflow } from '../fixOverflow'
import RoshniFeatuedIMG from '../../public/assets/flash/Featured-Section.png'
import Featured from '@/components/Features/HeroFeature'


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
      <Banner />
      <StickyBar
        title="Crown Benling Flash"
        headingPartOne="Designed for those who go the distance, Flash combines a robust 1500W Brushless Motor with a long-range 72V 47AH battery. It delivers smooth, powerful, and eco-friendly rides, perfect for daily commutes or spontaneous adventures. Flash is all about performance,"
        headingPartTwo="reliability, and clean mobility."
        colorOne="#fff"
        colorTwo="#fff"
        gradients={"bg-gradient-to-br from-[#30266C] to-[#111619]"}
        isSticky={false}
      />
      <Featured stats={statsData} imageAlt={"Flash Feature Image"} imageSrc={RoshniFeatuedIMG} textColor="text-black"
        cardBgColor="bg-white/40" titleVariant='h5-bold-jakarta' subtitleVariant='body-regular-jakarta' />

      <ColorShowcase />
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
      <LoopMain imageSrc={RoshniLoopIMG} heading={heading} colors={colors} />
      <Specifications bottomImageTag={Complimentary} data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </div>
  )
}

export default page