import React from 'react';
import EzeeBanner from '../../public/assets/Ezee/Ezee-banner.webp'
import StickyBar from '../components/StickyBar/sticky-bar';

import Carousel from './carouselSection';
import Flawless from './flawlessSection';
import PowerfulSection from './powerfulSection';
import './ezeeModule.css';
import InnovationMain from './InnovationSection/Main';
<<<<<<< HEAD
import Specifications from '@/components/TechnicalSpecifications/Specifications';
import Faqs from '@/components/Faqs/Faqs';
=======
import Specifications from '@/app/components/TechnicalSpecifications/Specifications';
import Faqs from '@/app/components/Faqs/faqs';
import LoopMain from '@/app/components/LoopCarousel/loop-main';
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002
import EzeeLoopIMG from '../..//public/assets/Ezee/Ezee-LoopIMG.webp'
import { faqsData, aboutSpecificationsData, aboutSpecificationsData2 } from './data';
import LoopMain from '@/components/LoopCarousel/loop-main';
import Banner from './Banner';



export default function Ezee() {

    const heading = 'Ezee is Everywhere';
    const colors = [
        { color: '#121212', percentage: 50 },
        { color: '#c51f26', percentage: 80 },
        { color: '#121212', percentage: 100 },
    ];


    return (
        <main>
            <Banner />
            <StickyBar
                title="Crown Benling Ezee"
                headingPartOne="Experience a revolutionary blend of performance and control that redefines your everyday ride. With unmatched precision and effortless handling, "
                headingPartTwo="the Ezee takes your journey to the next level."
                colorOne="#ffffff"
                colorTwo="#f15822"
                gradients={"bg-gradient-to-br from-[#410D09] to-[#121212]"}
            />
            <Carousel />
            <Flawless />
            <PowerfulSection />
            <InnovationMain />
<<<<<<< HEAD
            <LoopMain imageSrc={EzeeLoopIMG} heading={heading} colors={colors} />
=======
            <LoopMain imageSrc={EzeeLoopIMG.src} heading={heading} colors={colors} />
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002
            <Specifications data={aboutSpecificationsData} data2={aboutSpecificationsData2} />
            <Faqs data={faqsData} />
        </main>
    );
}

