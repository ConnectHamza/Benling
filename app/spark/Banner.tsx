import React from 'react'
import MiniBanner from '../../public/assets/Spark/main.png'
import HeroSection from '@/components/Herocontainer/Herocontainer'
import BannerMobile from '../../public/assets/Spark/main-mobile.webp'

const Banner = () => {
    return (
        <div className='pt-[75px]'>
            <HeroSection
                title="Benling Redefining Electric Mobility"
                subtitle="Discover cutting-edge electric vehicles designed for performance, sustainability, and style."
                buttonText="Explore More"
                imageSrc={MiniBanner.src}
                mobileImageSrc={BannerMobile.src}
            />
        </div>

    )
}

export default Banner