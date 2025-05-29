import React from 'react'
import SparkWeb from "../../public/assets/Home/Header/web/spark.webp"
import HeroSection from '@/components/Herocontainer/Herocontainer'
import BannerMobile from '../../public/assets/Spark/main-mobile.webp'

const Banner = () => {
    return (
        <div className='pt-[75px]'>
            <HeroSection
                title="Engineered for Confidence, Designed for Style"
                subtitle="The Spark electric scooter offers a powerful ride with modern styling. Ride confidently with advanced safety and electric performance, made for Pakistan's roads."
                buttonText="Explore More"
                imageSrc={SparkWeb.src}
                mobileImageSrc={BannerMobile.src}
            />
        </div>

    )
}

export default Banner