import React from 'react'
<<<<<<< HEAD
import FireflyWeb from "../../public/assets/Home/Header/web/firefly.webp"
import FireflyIMGMobile from '../../public/assets/Firefly/Firefly-Banner-mobile.webp'

import HeroSection from '@/components/Herocontainer/Herocontainer'
=======
import FireflyIMG from '../../public/assets/Firefly/Firefly-Banner.webp'
import Button from '@/app/components/Button/button'
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002
const Banner = () => {
    return (
        <div className='pt-[75px]'>
            <HeroSection
                title="Embrace Tomorrow Now with Firefly"
                subtitle="Step into the era of comfort with the Firefly electric scooter. Sleek, powerful, and eco-friendly, it’s designed for effortless rides and standout style."
                buttonText="Explore More"
                imageSrc={FireflyWeb.src}
                mobileImageSrc={FireflyIMGMobile.src}
            />
        </div>

    )
}

export default Banner