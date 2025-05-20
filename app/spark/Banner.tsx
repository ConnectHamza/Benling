import React from 'react'
import SparkWeb from "../../public/assets/Home/Header/web/spark.webp"
import HeroSection from '@/components/Herocontainer/Herocontainer'
import BannerMobile from '../../public/assets/Spark/main-mobile.webp'

const Banner = () => {
    return (
        <div className='pt-[75px]'>
            <HeroSection
                title="Benling Redefining Electric Mobility"
                subtitle="Discover cutting-edge electric vehicles designed for performance, sustainability, and style."
                buttonText="Explore More"
                imageSrc={SparkWeb.src}
                mobileImageSrc={BannerMobile.src}
            />
        </div>

    )
}

export default Banner