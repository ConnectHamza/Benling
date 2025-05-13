import React from 'react'
import MiniBanner from '../../public/assets/mini-scooty/main.png'
import HeroSection from '@/components/Herocontainer/Herocontainer'

const Banner = () => {
    return (
        <HeroSection
            title="Benling Redefining Electric Mobility"
            subtitle="Discover cutting-edge electric vehicles designed for performance, sustainability, and style."
            buttonText="Explore More"
            imageSrc={MiniBanner.src}
        />
    )

}

export default Banner