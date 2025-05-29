import React from 'react'
import FlashWeb from "../../public/assets/Home/Header/web/flash.webp"
import FlashBannerMobile from '../../public/assets/flash/main-mobile.webp'

import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    return (
        <div className='pt-[75px]'>
            <HeroSection
                title="Advanced Electric Scooter with Speed"
                subtitle="Designed for the modern commuter, Flash combines speed, safety, and smart features like digital display and dual disc brakes—making it the go-to electric scooter in Pakistan."
                buttonText="Explore More"
                imageSrc={FlashWeb.src}
                mobileImageSrc={FlashBannerMobile.src}
            />
        </div>

    )
}

export default Banner