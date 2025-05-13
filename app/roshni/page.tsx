"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import Featured from './Featured'
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

  return (
    <div>
      <Banner />
      <StickyBar
        title="Crown Benling Roshni"
        description="Experience the Roshni, a blend of innovative design and eco-friendly technology. Powered by advanced Graphene Battery Technology and a reliable 1200W Brushless Motor, Roshni promises smooth, efficient, and sustainable mobility tailored for every journey."
        gradient1="#fff"
        gradient2="#fff"
        textColor="#fff"
      />
      <Featured />
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