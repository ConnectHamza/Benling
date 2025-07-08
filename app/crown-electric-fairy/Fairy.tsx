'use client';

import React, { useEffect } from 'react';
import Banner from './Banner';
import StickyBar from '@/components/StickyBar/stickyBar';
import FeaturesSection from '@/components/Features/Features';
import {
  featuresData,
  featureHeader,
  aboutSpecificationsData,
  aboutSpecificationsData2,
  faqsData,
  slides
} from './data';
import LoopMain from '@/components/LoopCarousel/loop-main';
import ScootyGrid from '../../public/assets/Fairy/Fairy-loop.webp';
import Specifications from '@/components/TechnicalSpecifications/Specifications';
import Faqs from '@/components/Faqs/Faqs';
import { initFixOverflow } from '../fixOverflow';
import Tabs from './Tabs';
import FairyFeaturedIMG from '../../public/assets/Fairy/Fairy-Banner.webp';
import FeatureMbl from '../../public/assets/Fairy/Fairy-Banner-Mobile.webp';
import Featured from '@/components/Features/HeroFeature';
import AutoSwiper from '@/components/LoopCarousel/auto-swiper';

const heading = 'Explore Fairy — Power Your Journey';

const colors = [
  { color: '#121212', percentage: 50 },
  { color: '#121212', percentage: 80 },
  { color: '#121212', percentage: 100 },
];

const statsData = [
  { value: '50–55 km/h', label: 'Top Speed' },
  { value: '75–80 km', label: 'Range' },
  { value: '5-6 Hours', label: 'Charging Time' },
  { value: 'Up to 12°', label: 'Climbing Angle' },
];

const Fairy = () => {
  useEffect(() => {
    initFixOverflow();
  }, []);

  return (
    <div>
      <Banner />
      <StickyBar
        title="Crown Electric Fairy"
        description="Powerful and practical, the Crown Electric Fairy is built for modern urban life. As a reliable 1000W electric scooter in Pakistan, it features a robust 1000W motor and a 72V 23AH graphene battery, delivering a smooth, high-performance ride with excellent range and speed. With its sleek design, eco-friendly technology, and spacious utility, the Fairy is the perfect companion for effortless, everyday commuting."
        gradient1="#FFFEEF"
        gradient2="#ADACA2"
        textColor="text-[#424233]"
        price='165,000'
      />
      <Featured
        stats={statsData}
        itemsPosition="items-end"
        mobileImageSrc={FeatureMbl}
        imageAlt="Fairy Featured Image"
        imageSrc={FairyFeaturedIMG}
        textColor="text-black"
        cardBgColor="bg-white/40"
        titleVariant="h5-bold-jakarta"
        subtitleVariant="body-regular-jakarta"
      />
      <Tabs />
      <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
            <AutoSwiper slideData={slides} heading={heading} colors={colors}/>
      
      <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} isGraphene={true}/>
      <Faqs data={faqsData} />
    </div>
  );
};

export default Fairy;
