import React from 'react'
import KnightWeb from "../../public/assets/Home/Header/web/knight-rider.webp"
import FlashBannerMobile from '../../public/assets/Knight-Rider/Knight-Rider-Mobile.webp'

import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Knight Rider"
                subtitle="Experience unmatched strength and control with Knight Rider, a rugged electric scooter built for power rides, high-speed performance, and reliable travel on Pakistan’s diverse roads."
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