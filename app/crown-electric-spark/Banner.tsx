import React from 'react'
import SparkWeb from "../../public/assets/Home/Header/web/spark.webp"
import HeroSection from '@/components/Herocontainer/Herocontainer'
import BannerMobile from '../../public/assets/Spark/main-mobile.webp'

const Banner = (textColor: string) => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Electric Spark"
                subtitle="The Crown Electric Spark delivers a bold and powerful ride as a top-tier 600W electric scooter in Pakistan. With sleek modern styling, advanced safety features, and reliable electric performance, it's built to handle Pakistan’s roads with confidence and style."
                buttonText="Explore More"
                imageSrc={SparkWeb.src}
                mobileImageSrc={BannerMobile.src}                
                price='145,000'
                href='/brouchers/Crown_Benling_Spark_Brochure.pdf'
                textColor='text-black-30'
                color='black-30'
            />
        </div>

    )
}

export default Banner