import React from 'react'
import FlashBanner from '../../public/assets/flash/main.png'
import FlashBannerMobile from '../../public/assets/flash/main-mobile.webp'

import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    return (
        <div className='pt-[75px]'>
            <HeroSection
                title="Ride the Future Today with Firefly"
                subtitle="Discover cutting-edge electric vehicles designed for performance, sustainability, and style."
                buttonText="Explore More"
                imageSrc={FlashBanner.src}
                mobileImageSrc={FlashBannerMobile.src}
            />
        </div>

    )
}

export default Banner