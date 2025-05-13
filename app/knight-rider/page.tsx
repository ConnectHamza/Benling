import React from 'react'
import KnightRiderBanner from '../../public/assets/Knight-Rider/Knight-Rider-Banner.webp'
import StickyBar from '@/components/StickyBar/stickyBar'
import DesignedSection from './designedSection'
import LedSection from './ledSection'
import WaterResistanceSection from './waterResistanceSection'
import FeaturesSection from '@/components/Features/Features'
import LoopMain from '@/components/LoopCarousel/loop-main'
import KnightLoopIMG from '../../public/assets/Knight-Rider/Knight-Loop-IMG.webp'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import {aboutSpecificationsData, aboutSpecificationsData2, faqsData, featuresData, featureHeader, heading, colors} from './data'
import Faqs from '@/components/Faqs/Faqs'
import Slider from '@/components/Slider/Slider'
import Banner from '../ezee/Banner'


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

            <Slider />
            <WaterResistanceSection />
            <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
        
            <LoopMain imageSrc={KnightLoopIMG} heading={heading} colors={colors} />
            <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
            <Faqs data={faqsData}/>
        </main>
    )
}

export default KnightRider