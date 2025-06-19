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
import { aboutSpecificationsData, aboutSpecificationsData2, faqsData, featuresData, featureHeader, heading, colors, slides } from './data'
import Faqs from '@/components/Faqs/Faqs'
import Slider from '@/components/Slider/Slider'
import Banner from './Banner'
import AutoSwiper from '@/components/LoopCarousel/auto-swiper'


export const metadata = {
  title: "Crown Electric Knight Rider – 1500W Electric Motorcycle in Pakistan",
  description: "Ride the future with the Crown Electric Knight Rider. Equipped with a 1500W brushless motor, 72V graphene battery, and a range of up to 105 km. Ideal for urban commuting in Pakistan.",
  alternates: {
    canonical: "/crown-electric-knight-rider",
  },
  openGraph: {
    title: "Crown Electric Knight Rider – 1500W Electric Motorcycle in Pakistan",
    description: "Ride the future with the Crown Electric Knight Rider. Equipped with a 1500W brushless motor, 72V graphene battery, and a range of up to 105 km. Ideal for urban commuting in Pakistan.",
    url: "https://crownelectricmobility.com/crown-electric-knight-rider",
    siteName: "Crown Electric Mobility",
    type: "website",
  },
};


const KnightRider = () => {
    return (
        <main>
            <head>
                <title>Crown Electric - Knight Rider</title>
            </head>
            <Banner />
            <StickyBar
                title="Crown Knight Rider"
                description='Discover the Crown Knight Rider, a revolutionary electric bike crafted to deliver superior performance, unmatched style, and eco-friendly mobility. Built with cutting-edge 72V36Ah Graphene Battery Technology and a robust 1500W Brushless Motor, Knight Rider ensures your rides are smooth, powerful, and sustainable.'
                gradient1="#4C4442"
                gradient2="#121212"
                textColor='text-white'
                price='240,000'
            />
            <DesignedSection />
            <LedSection />
            <WaterResistanceSection />
            <FeaturesSection featureItems={featuresData} FeatureHeader={featureHeader} />
            <div className='pt-20 pb-10 md:pb-0'>
                <AutoSwiper slideData={slides} heading={heading} colors={colors} />

            </div>
            <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
            <Faqs data={faqsData} />
        </main>
    )
}

export default KnightRider