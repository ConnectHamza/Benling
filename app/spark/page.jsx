"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData } from './data'
import LoopMain from '@/components/LoopCarousel/loop-main'
import ScootyGrid from '../../public/assets/Spark/SparkGrid.png'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import { initFixOverflow } from '../fixOverflow'
import Tabs from './Tabs'
import MiniFeatuedIMG from '../../public/assets/Spark/featured-section.png';
import FeatureMbl from '../../public/assets/Spark/feature-mobile.webp'

import Featured from '@/components/Features/HeroFeature'

const heading = 'Explore Spark – Charge Your Ride';
const colors = [
  { color: '#121212', percentage: 50 },
  { color: '#121212', percentage: 80 },
  { color: '#121212', percentage: 100 },
];
const statsData = [
  { value: "35-40 km/h", label: "Top Speed" },
  { value: "35-40 km", label: "Range" },
  { value: "5-6 Hours", label: "Charging Time" },
  { value: "≤15°", label: "Climbing Angle" },

];
const page = () => {

  useEffect(() => {
    initFixOverflow();
  }, []);

  return (
    <div>
      <Banner />
      <StickyBar
        title="Crown Benling Spark"
        headingPartOne="Lightweight and practical, Spark is powered by a 650W Motor and a 48V 30AH battery, offering a smooth and economical ride. "
        headingPartTwo="With its sleek design and eco-friendly performance, Spark is the perfect choice for effortless city mobility."
        colorOne="#fff"
        colorTwo="#297CA0"
        gradients={"bg-gradient-to-br from-[#C7E4F0] to-[#5EB3D2]"}
      />
      <Featured stats={statsData} mblImage={FeatureMbl} imageAlt={"RoshniX Featured Image"} imageSrc={MiniFeatuedIMG} textColor="text-black"
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