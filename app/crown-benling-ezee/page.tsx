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
import EzeeLoopIMG from '../..//public/assets/Ezee/Ezee-LoopIMG.webp'
import { faqsData, aboutSpecificationsData, aboutSpecificationsData2 } from './data';
import LoopMain from '@/components/LoopCarousel/loop-main';
import Banner from './Banner';

export const metadata = {
  title: 'Crown Benling - Ezee',
//   description: '',
  metadataBase: new URL('https://crownelectricmobility.com'), 
  alternates: {
    canonical: '/crown-benling-ezee',
  },
  openGraph: {
    title: 'Crown Benling - Ezee',
    // description: '',
    url: 'https://crownelectricmobility.com/crown-benling-ezee',
    siteName: 'Crown Electric Mobility',
    type: 'website',
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
                    title="Crown Benling Ezee"
                    description='Experience a revolutionary blend of performance and control that redefines your everyday ride. With unmatched precision and effortless handling, the Ezee takes your journey to the next level.'
                    gradient1="#410D09"
                    gradient2="#121212"
                    textColor="text-red-300"
                />
                <Carousel />
                <Flawless />
                <PowerfulSection />
                <InnovationMain />
                <LoopMain imageSrc={EzeeLoopIMG} heading={heading} colors={colors} />
                <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
                <Faqs data={faqsData} />
            </main>
        </>
    );
}

