import React from 'react'
<<<<<<< HEAD
import RoshnixWeb from "../../public/assets/Home/Header/web/roshni.webp"
import RoshniMobile from '../../public/assets/Roshni/Roshni-mobile.webp'
=======
import RoshniBanner from '../../public/assets/Roshni/Roshni-Banner.webp'
import Button from '@/app/components/Button/button'
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002

import Button from '@/components/Button/Button'
import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    return (
        <div className='pt-[75px]'>
            <HeroSection
                title="Roshni Brighten Every Journey"
                subtitle="Experience the future of urban mobility with the Roshni electric scooter. Stylish, efficient, and eco-friendly, it’s crafted for smooth rides and a distinctive, modern look."
                buttonText="Explore More"
                imageSrc={RoshnixWeb.src}
                mobileImageSrc={RoshniMobile.src}
            />
        </div>

    )
}

export default Banner