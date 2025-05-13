import React from 'react'
import FlashBanner from '../../public/assets/flash/main.png'
import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    return (
        <HeroSection
        title="Ride the Future Today with Firefly"
        subtitle="Discover cutting-edge electric vehicles designed for performance, sustainability, and style."
        buttonText="Explore More"
        imageSrc={FlashBanner.src}
    />
    )
}

export default Banner