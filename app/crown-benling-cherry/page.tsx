"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import FeaturesSection from '@/components/Features/Features'
import { featuresData, featureHeader, aboutSpecificationsData, aboutSpecificationsData2, faqsData } from './data'
import LoopMain from '@/components/LoopCarousel/loop-main'
import CherryLoopIMG from '../../public/assets/Cherry/Cherry-Loop-Image.webp'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import { initFixOverflow } from '../fixOverflow'
import Featured from '@/components/Features/HeroFeature'
import CHerryFeatuedIMG from '../../public/assets/Cherry/Crown-Electric-Mobility-Cherry-Banner.webp'
import CherryMobile from '../../public/assets/Cherry/Crown-Electric-Mobility-Cherry-Banner-Mobile.webp'
import Tabs from './Tabs'


const heading = 'Crown Cherry - Pretty is the New Cherry';
const colors = [
  { color: '#000', percentage: 50 },
  { color: '#000', percentage: 80 },
  { color: '#dedede', percentage: 100 },
];
const statsData = [
  { value: "75-80 km/h", label: "Top Speed" },
  { value: "110-130 km", label: "Range" },
  { value: "4-5 Hours", label: "Charging Time" },
  { value: "3000W", label: "NFC Unlock" },
];


const page = () => {

  useEffect(() => {
    initFixOverflow();
  }, []);

  return (
    <div>
      <head>
        <title>Crown Benling - Cherry</title>
      </head>
      <Banner />
      <StickyBar
        title="Crown Benling Cherry"
        description='Crown Cherry delivers unmatched speed, style, and efficiency with a 3000W motor and a 72V 40Ah Lithium Iron Phosphate battery , offering a range of up to 130 km and a top speed of 80 km/h . Equipped with fast charging capabilities, this eco-friendly scooter combines sleek design, zero emissions, and superior performance—making it the perfect choice for modern urban riders.'
        gradient1="#B7D1F0"
        gradient2="#F2F6FC"
        textColor="text-black-30"
      />
      <Featured
        stats={statsData}
        imageAlt={"Cherry Feature Image"}
        mobileImageSrc={CherryMobile}
        imageSrc={CHerryFeatuedIMG}
        textColor="text-black"
        cardBgColor="bg-white/70"
        titleVariant='h5-bold-jakarta'
        subtitleVariant='body-regular-jakarta'
        itemsPosition=""
      />
      <Tabs />      
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />

      <LoopMain imageSrc={CherryLoopIMG} heading={heading} colors={colors} />

      <Specifications  data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </div>
  )
}

export default page