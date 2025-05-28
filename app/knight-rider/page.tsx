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
import Banner from './Banner'


const KnightRider = () => {
    return (
        <main>
           <Banner />
           <StickyBar
                title="Crown Benling Knight Rider"
                description='Discover the Knight Rider, a revolutionary electric bike crafted to deliver superior performance, unmatched style, and eco-friendly mobility. Built with cutting-edge Graphene Battery Technology and a robust 1200W Brushless Motor, Knight Rider ensures your rides are smooth, powerful, and sustainable.'
                gradient1="#4C4442"
                gradient2="#121212"
                textColor='text-white'
            />            
            <DesignedSection />
            <LedSection />
            <WaterResistanceSection />
            <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
            <div className='pt-20 pb-10 md:pb-0'>
            <LoopMain imageSrc={KnightLoopIMG} heading={heading} colors={colors} />
            </div>
            <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
            <Faqs data={faqsData}/>
        </main>
    )
}

export default KnightRider