import React from 'react'
import FireflyWeb from "../../public/assets/Home/Header/web/firefly.webp"
import FireflyIMGMobile from '../../public/assets/Firefly/Firefly-Banner-mobile.webp'

import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    return (
        <div className='pt-[75px]'>
            <HeroSection
                title="Ride the Future Today with Firefly"
                subtitle="Experience the future of urban mobility with the Firefly electric scooter. Sleek, powerful, and eco-friendly, it’s designed for effortless rides and standout style."
                buttonText="Explore More"
                imageSrc={FireflyWeb.src}
                mobileImageSrc={FireflyIMGMobile.src}
            />
        </div>

    )
}

export default Banner