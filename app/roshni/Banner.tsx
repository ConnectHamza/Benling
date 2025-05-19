import React from 'react'
import RoshniBanner from '../../public/assets/Roshni/Roshni.png'
import RoshniMobile from '../../public/assets/Roshni/Roshni-mobile.webp'

import Button from '@/components/Button/Button'
import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    return (
        <div className='pt-[75px]'>
            <HeroSection
                title="Roshni Brighten Every Journey"
                subtitle="Experience the future of urban mobility with the Roshni electric scooter. Stylish, efficient, and eco-friendly, it’s crafted for smooth rides and a distinctive, modern look."
                buttonText="Explore More"
                imageSrc={RoshniBanner.src}
                mobileImageSrc={RoshniMobile.src}
            />
        </div>

    )
}

export default Banner