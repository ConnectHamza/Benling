import React from 'react'
import Banner from './Banner'
import StickyBar from '@/components/StickyBar/stickyBar'
import Tabs from './Tabs'
import Performance from './Performance'
import Blaze from './Blaze'
import Illumination from './Illumination'
import './styles/firefly.css'
import Benefits from './Benefits'
import { aboutSpecificationsData, aboutSpecificationsData2, faqsData, slides } from './data'
import Specifications from '@/components/TechnicalSpecifications/Specifications'
import Faqs from '@/components/Faqs/Faqs'
import AutoSwiper from '@/components/LoopCarousel/auto-swiper'


  export const metadata = {
  title: "Crown Electric Firefly – 1200W Electric Scooter in Pakistan",
  description: "Ride in style with the Crown Electric Firefly, featuring a 1200W motor, 105 km range, and advanced graphene battery technology. Ideal for daily commuting in Pakistan.",
  alternates: {
    canonical: "/crown-electric-firefly",
  },
  openGraph: {
    title: "Crown Electric Firefly – 1200W Electric Scooter in Pakistan",
    description: "Ride in style with the Crown Electric Firefly, featuring a 1200W motor, 105 km range, and advanced graphene battery technology. Ideal for daily commuting in Pakistan.",
    url: "https://crownelectricmobility.com/crown-electric-firefly",
    type: "website",
  },
};


const Firefly = () => {

  const heading = 'Light Up Your Journey with Firefly';
  const colors = [
    { color: '#121212', percentage: 50 },
    { color: '#121212', percentage: 80 },
    { color: '#121212', percentage: 100 },
  ];

  return (
    <>
      <Banner />
      <StickyBar
        title="Crown Electric Firefly"
        description='Experience the Firefly, a modern marvel combining sleek design with eco-friendly technology. Equipped with advanced Graphene Battery Technology and a powerful 1200W Brushless Motor, Firefly ensures unmatched performance, efficiency, and sustainable mobility for every journey.'
        gradient1="#dedede"
        gradient2="#f3f3f3"
        textColor='text-black'
        price='195,000'
      />
      <Blaze />
      <Tabs />
      <Performance />
      <Illumination />
      <Benefits />
            <AutoSwiper slideData={slides} heading={heading} colors={colors}/>

      <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
      <Faqs data={faqsData} />
    </>
  )
}

export default Firefly