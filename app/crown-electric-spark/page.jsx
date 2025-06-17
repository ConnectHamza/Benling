"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData, slides } from './data'
import AutoSwiper from '@/components/LoopCarousel/auto-swiper'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import { initFixOverflow } from '../fixOverflow'
import Tabs from './Tabs'
import SparkFeaturedIMG from '../../public/assets/Spark/featured-section.png'
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
      <head>
        <title>Crown Electric - Spark</title>
      </head>
      <Banner />
      <StickyBar
        title="Crown Spark"
        description="Lightweight and practical, Spark is powered by a 600W Motor and a 48V 30AH battery, offering a smooth and economical ride. With its sleek design and eco-friendly performance, Spark is the perfect choice for effortless city mobility."
        gradient1="#C7E4F0"
        gradient2="#5EB3D2"
        textColor="text-[#297CA0]"
        price="145,000"
      />
      <Featured stats={statsData} itemsPosition='items-start' mobileImageSrc={FeatureMbl} imageAlt={"RoshniX Featured Image"} imageSrc={SparkFeaturedIMG} textColor="text-black"
        cardBgColor="bg-white/40" titleVariant='h5-bold-jakarta' subtitleVariant='body-regular-jakarta' />
      <Tabs />
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
      <AutoSwiper slideData={slides} heading={heading} colors={colors}/>
      <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </div>
  )
}

export default page