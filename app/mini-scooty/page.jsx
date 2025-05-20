"use client"
import React, { useEffect } from 'react'
import StickyBar from '@/components/StickyBar/stickyBar'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData } from './data'
import LoopMain from '@/components/LoopCarousel/loop-main'
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
  { value: "450W", label: "Brushless Motor" },
  { value: "30-35km/h", label: "Top Speed" },
  { value: "30-35km/h", label: "Range" },
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
        title="Crown Benling Mini Scooty"
        headingPartOne="Perfect for short city rides, the Mini Scooty features a 450W Motor and a reliable 48V 23AH battery. "
        headingPartTwo="Its lightweight design, easy handling, and zero-emission drive make it ideal for everyday convenience with a touch of timeless charm"
        colorOne="#fff"
        colorTwo="#07BFD5"
        gradients={"bg-gradient-to-br from-[#1DADB5] to-[#05080C]"}
      />
      <Featured stats={statsData} imageAlt={"Mini Scooty Feature Image"} imageSrc={MiniFeatuedIMG} textColor="text-black"
        cardBgColor="bg-white/40" titleVariant='h5-bold-jakarta' subtitleVariant='body-regular-jakarta' />
      <Tabs />
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
      <LoopMain imageSrc={ScootyGrid} heading={heading} colors={colors} />
      <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </div>
  )
}

export default page