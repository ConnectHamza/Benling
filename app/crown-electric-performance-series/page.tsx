import React from 'react'
import PerformanceBanner from '../../public/assets/PerformanceSeries/PerformanceBanner2.webp'
import PerformanceBannermob from '../../public/assets/PerformanceSeries/Banner-mob.webp'
import StickyBar from '@/components/StickyBar/stickyBar'
import PerformanceCarousel from './performance-carousel'
import { bikes, Slides } from './data'
import FeatureSection from './feature'
import SeriesComparison from './series-comparison'
import ShopSlider from '../home/ShopSectoin'
import BlogSection from '../home/BlogSection'
import Faqs from '@/components/Faqs/Faqs'
import { faqsData } from '../home/data'
import Image from 'next/image'
import BikesImg from '../../public/assets/PerformanceSeries/Crown-Electric-Mobility-Performance-Series-Bikes.webp'
import BikesBg from '../../public/assets/PerformanceSeries/Crown-Electric-Mobility-Performance-Series-Bikes-bg.webp'
import HeroSection from '@/components/Herocontainer/HeroSlider'

const PerformanceSeries = () => {
    return (
        <div>
            <div className='md:mt-[-50px]'>
                <HeroSection slides={Slides} />
            </div>
            <div className='relative'>
                <StickyBar
                    title="About Performance Series"
                    description="Crown Electric Performance Series features next-gen electric scooters coming with Lithium-LiFePO₄ batteries, built for high performance, faster charging, and longer life. Designed for riders who demand strength, speed, and reliability on every ride."
                    gradient1="#185A72"
                    gradient2="#06202C"
                    textColor="text-white"
                    color="white"
                    showPrice={false}
                    isLithium={true}
                />
            </div>
            <div className='md:py-40 py-20'>
                <PerformanceCarousel heading='Choose Your Perfect Ride' subText='Explore Crown Electric scooter lineup, each model built with key features to suit your ride style and everyday needs.'
                    items={bikes} autoplay={true} />
            </div>
            <div>
                <FeatureSection />
            </div>
            <div>
                <SeriesComparison />
            </div>
            <div>
                <ShopSlider />
            </div>
            <div>
                <BlogSection />
            </div>
            <div>
                <Faqs data={faqsData} />
            </div>
        </div>
    )
}

export default PerformanceSeries