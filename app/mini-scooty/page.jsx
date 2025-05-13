"use client"
import React, { useEffect } from 'react'
import StickyBar from '@/components/StickyBar/stickyBar'
import Featured from './Featured'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData } from './data'
import LoopMain from '@/components/LoopCarousel/loop-main'
import ScootyGrid from '../../public/assets/mini-scooty/ScootyGrid.png'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import { initFixOverflow } from '../fixOverflow'
import Tabs from './Tabs'
import Banner from './Banner'

const heading = 'Explore Flash – Ride Bold';
const colors = [
  { color: '#121212', percentage: 50 },
  { color: '#121212', percentage: 80 },
  { color: '#121212', percentage: 100 },
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
      <Featured />
      <Tabs />
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
      <LoopMain imageSrc={ScootyGrid} heading={heading} colors={colors} />
      <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </div>
  )
}

export default page