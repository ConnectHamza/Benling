import React from 'react'
import FireflyIMG from '../../public/assets/Firefly/Firefly-Banner.webp'
import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    return (
        <HeroSection
            title="Ride the Future Today with Firefly"
            subtitle="Experience the future of urban mobility with the Firefly electric scooter. Sleek, powerful, and eco-friendly, it’s designed for effortless rides and standout style."
            buttonText="Explore More"
            imageSrc={FireflyIMG.src}
        />
    )
}

export default Banner