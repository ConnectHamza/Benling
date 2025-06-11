import React from 'react'
import PerformanceBanner from '../../public/assets/PerformanceSeries/PerformanceBanner2.webp'
import PerformanceBannermob from '../../public/assets/PerformanceSeries/Banner-mob.webp'
import StickyBar from '@/components/StickyBar/stickyBar'
import PerformanceCarousel from './performance-carousel'
import { bikes } from './data'
import FeatureSection from './feature'
import SeriesComparison from './series-comparison'
import ShopSlider from '../home/ShopSectoin'
import BlogSection from '../home/BlogSection'
import Faqs from '@/components/Faqs/Faqs'
import { faqsData } from '../home/data'
import Image from 'next/image'
import BikesImg from '../../public/assets/PerformanceSeries/Crown-Electric-Mobility-Performance-Series-Bikes.webp'
import BikesBg from '../../public/assets/PerformanceSeries/Crown-Electric-Mobility-Performance-Series-Bikes-bg.webp'

const PerformanceSeries = () => {
    return (
        <div>
            <head>
                <title>Crown Benling - Performance Series</title>
            </head>
            {/* Desktop */}
            <div className='relative h-[100vh] bg-cover bg-center bg-no-repeat hidden md:flex flex-col justify-start items-center py-20 z-40' style={{ backgroundImage: `url(${BikesBg.src})` }}>
                <h1 className='text-black font-magistral md:text-7xl text-xl font-bold text-center' data-aos="zoom-out">Performance Series</h1>
                <div className='bg-black-30 flex items-end justify-center p-2 rounded-md mt-4' data-aos="zoom-in">
                    <h3 className='text-white font-magistral md:text-3xl text-lg font-bold text-center'>Lithium-LiFePO<span className='text-sm'>4</span></h3>
                </div>
                    <Image className='absolute top-0' alt='Performance Series Bikes' src={BikesImg}/>
            </div>
            {/* Mobile */}
            <div className='h-[65vh] bg-cover bg-center bg-no-repeat flex flex-col md:hidden justify-start items-center py-20 z-40' style={{ backgroundImage: `url(${PerformanceBannermob.src})` }}>
                <h1 className='text-black font-magistral md:text-7xl text-xl font-bold text-center'>Performance Series</h1>
                <div className='bg-black-30 flex items-end justify-center p-2 rounded-md mt-4'>
                    <h3 className='text-white font-magistral md:text-3xl text-lg font-bold text-center'>Lithium-LiFePO<span className='text-xs'>4</span></h3>
                </div>
            </div>
            <div className='relative'>
                <StickyBar
                    title="About Performance Series"
                    description="Crown Benling Performance Series features next-gen electric scooters coming with Lithium-LiFePO₄ batteries, built for high performance, faster charging, and longer life. Designed for riders who demand strength, speed, and reliability on every ride."
                    gradient1="#185A72"
                    gradient2="#06202C"
                    textColor="text-white"
                    color="white"
                />
            </div>
            <div className='md:py-40 py-20'>
                <PerformanceCarousel heading='Choose Your Perfect Ride' subText='Explore Crown Benling’s electric scooter lineup, each model built with key features to suit your ride style and everyday needs.'
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