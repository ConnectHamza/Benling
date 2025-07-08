import React from 'react'
import KnightWeb from "../../public/assets/Home/Header/web/knight-rider.webp"
import FlashBannerMobile from '../../public/assets/Knight-Rider/Knight-Rider-Mobile.webp'

import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Electric Knight Rider"
                subtitle="Experience unmatched strength and control with the Crown Electric Knight Rider, a rugged 1500W electric motorcycle in Pakistan. Built for power rides and high-speed performance, it delivers reliable travel across Pakistan’s diverse road conditions with confidence and style."
                imageSrc={KnightWeb.src}
                mobileImageSrc={FlashBannerMobile.src}
                textColor='md:text-white text-black'
                price='240,000'
                href='/brouchers/Crown_Benling_Knight_Rider_Brochure.pdf'
            />
        </div>

    )
}

export default Banner