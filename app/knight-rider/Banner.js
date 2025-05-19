import React from 'react'
import FlashBanner from '../../public/assets/Knight-Rider/Knight-Rider-Banner.webp'
import FlashBannerMobile from '../../public/assets/Knight-Rider/Knight-Rider-Mobile.webp'

import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    return (
        <div className='pt-[75px]'>
            <HeroSection
                title="Rule the Roads with Electric Power"
                subtitle="Experience unmatched strength and control with Knight Rider, a rugged electric scooter built for power rides, high-speed performance, and reliable travel on Pakistan’s diverse roads."
                buttonText="Explore More"
                imageSrc={FlashBanner.src}
                mobileImageSrc={FlashBannerMobile.src}
            />
        </div>

    )
}

export default Banner