import React from 'react'
import KnightRiderBanner from '../../public/assets/Knight-Rider/Knight-Rider-Banner.webp'
import StickyBar from '@/app/components/StickyBar/sticky-bar'
import DesignedSection from './designedSection'
import LedSection from './ledSection'
import WaterResistanceSection from './waterResistanceSection'
<<<<<<< HEAD
import FeaturesSection from '@/components/Features/Features'
import LoopMain from '@/components/LoopCarousel/loop-main'
import KnightLoopIMG from '../../public/assets/Knight-Rider/Knight-Loop-IMG.webp'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import {aboutSpecificationsData, aboutSpecificationsData2, faqsData, featuresData, featureHeader, heading, colors} from './data'
import Faqs from '@/components/Faqs/Faqs'
import Slider from '@/components/Slider/Slider'
import Banner from './Banner'
=======
import FeaturesSection from '@/app/components/Features/features'
import LoopMain from '@/app/components/LoopCarousel/loop-main'
import KnightLoopIMG from '../../public/assets/Knight-Rider/Knight-Loop-IMG.webp'
import Specifications from '@/app/components/TechnicalSpecifications/Specifications'
import {aboutSpecificationsData, aboutSpecificationsData2, faqsData, featuresData, featureHeader} from './data'
import Faqs from '@/app/components/Faqs/faqs'
import Slider from '@/app/components/Slider/slider'



export const heading = 'Knight Rider Own The Night';
export const colors = [
  { color: '#121212', percentage: 50 },
  { color: '#121212', percentage: 80 },
  { color: '#121212', percentage: 100 },
];
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002


const KnightRider = () => {
    return (
        <main>
           <Banner />
           <StickyBar
                title="Crown Benling Knight Rider"
                headingPartOne="Discover the Knight Rider, a revolutionary electric bike crafted to deliver superior performance, unmatched style, and eco-friendly mobility. Built with cutting-edge Graphene Battery Technology and a robust 1200W Brushless Motor, "
                headingPartTwo="Knight Rider ensures your rides are smooth, powerful, and sustainable."
                colorOne="#FFF"
                colorTwo="#4C4442"
                gradients={"bg-gradient-to-br from-[#4C4442] to-[#0A0A0A]"}
            />
            <DesignedSection />
            <LedSection />
            <WaterResistanceSection />
            <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
<<<<<<< HEAD
            <LoopMain imageSrc={KnightLoopIMG} heading={heading} colors={colors} />
=======
        
            <LoopMain imageSrc={KnightLoopIMG.src} heading={heading} colors={colors} />
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002
            <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
            <Faqs data={faqsData}/>
        </main>
    )
}

export default KnightRider