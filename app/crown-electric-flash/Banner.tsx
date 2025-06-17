import React from 'react'
import FlashWeb from "../../public/assets/Home/Header/web/flash.webp"
import FlashBannerMobile from '../../public/assets/flash/main-mobile.webp'

import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Advanced Electric Scooter with Speed"
                subtitle="Designed for the modern commuter, Flash combines speed, safety, and smart features like digital display and dual disc brakes—making it the go-to electric scooter in Pakistan."
                imageSrc={FlashWeb.src}
                mobileImageSrc={FlashBannerMobile.src}
                price='250,000'
                href='/brouchers/Crown_Benling_Flash_Brochure.pdf'
            />
        </div>

    )
}

export default Banner