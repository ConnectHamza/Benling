import React from 'react'
import KnightRiderBanner from '../../public/assets/Knight-Rider/Knight-Rider-Banner.webp'
import StickyBar from '../../components/StickyBar/sticky-bar'
import DesignedSection from './designedSection'
import LedSection from './ledSection'
import WaterResistanceSection from './waterResistanceSection'
import FeaturesSection from '../../components/Features/features'
import LoopMain from '../../components/LoopCarousel/loop-main'
import KnightLoopIMG from '../../public/assets/Knight-Rider/Knight-Loop-IMG.webp'
import Specifications from '../../components/TechnicalSpecifications/Specifications'
import {aboutSpecificationsData, aboutSpecificationsData2, faqsData, featuresData, featureHeader} from './data'
import Faqs from '../../components/Faqs/faqs'
import Slider from '../../components/Slider/slider'



export const heading = 'Knight Rider Own The Night';
export const colors = [
  { color: '#121212', percentage: 50 },
  { color: '#121212', percentage: 80 },
  { color: '#121212', percentage: 100 },
];


const KnightRider = () => {
    return (
        <main>
            <div className='w-full md:h-[90vh] h-[50vh]'
                style={{
                    backgroundImage: `url(${KnightRiderBanner.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
            </div>
            <StickyBar
                title="Benling Knight Rider"
                description="Discover the Knight Rider, a revolutionary electric bike crafted to deliver superior performance, unmatched style, and eco-friendly mobility. Built with cutting-edge Graphene Battery Technology and a robust 1200W Brushless Motor, Knight Rider ensures your rides are smooth, powerful, and sustainable."
                gradient1="#4C4442"
                gradient2="#0A0A0A"
                textColor="text-white"
            />
            <DesignedSection />
            <Slider />
            <LedSection />
            <WaterResistanceSection />
            <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
        
            <LoopMain imageSrc={KnightLoopIMG.src} heading={heading} colors={colors} />
            <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
            <Faqs data={faqsData}/>
        </main>
    )
}

export default KnightRider