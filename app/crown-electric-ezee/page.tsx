import React from 'react';
import EzeeBanner from '../../public/assets/Ezee/Ezee-banner.webp'
import StickyBar from '@/components/StickyBar/stickyBar';
import Carousel from './carouselSection';
import Flawless from './flawlessSection';
import PowerfulSection from './powerfulSection';
import './ezeeModule.css';
import InnovationMain from './InnovationSection/Main';
import Specifications from '@/components/TechnicalSpecifications/Specifications';
import Faqs from '@/components/Faqs/Faqs';
import { faqsData, aboutSpecificationsData, aboutSpecificationsData2, slides } from './data';
import Banner from './Banner';
import AutoSwiper from '@/components/LoopCarousel/auto-swiper';


  export const metadata = {
  title: "Crown Electric Ezee – 650W Three Wheeler Electric Scooter in Pakistan",
  description: "Crown Electric Ezee is a 650W three-wheeler electric scooter in Pakistan, offering a 50–55 km range, ample storage, and a smooth, eco-friendly ride for daily commutes.",
  alternates: {
    canonical: "/crown-electric-ezee",
  },
  openGraph: {
    title: "Crown Electric Ezee – 650W Three Wheeler Electric Scooter in Pakistan",
    description: "Crown Electric Ezee is a 650W three-wheeler electric scooter in Pakistan, offering a 50–55 km range, ample storage, and a smooth, eco-friendly ride for daily commutes.",
    url: "https://crownelectricmobility.com/crown-electric-ezee",
    type: "website",
  },
};

export default function Ezee() {

    const heading = 'Ezee is Everywhere';
    const colors = [
        { color: '#121212', percentage: 50 },
        { color: '#c51f26', percentage: 80 },
        { color: '#121212', percentage: 100 },
    ];

    return (
        <>
            <main>
               <Banner />
               <StickyBar
                    title="Crown Electric Ezee"
                    description='Experience a revolutionary blend of performance and control with the Crown Electric Ezee, a game-changing 650W three wheeler electric scooter in Pakistan. With unmatched precision, smooth stability, and effortless handling, the Ezee elevates your everyday ride to a whole new level.'
                    gradient1="#410D09"
                    gradient2="#121212"
                    textColor="text-red-300"
                    price='230,000'
               />
                <Carousel />
                <Flawless />
                <PowerfulSection />
                <InnovationMain />
                <AutoSwiper slideData={slides} heading={heading} colors={colors}/>
                <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} isGraphene={true}/>
                <Faqs data={faqsData} />
            </main>
        </>
    );
}

