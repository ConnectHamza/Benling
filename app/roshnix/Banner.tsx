import React from 'react'
import RoshniBanner from '../../public/assets/RoshniX/Roshni-Banner.png'
import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    return (
        <HeroSection
        title="Benling Redefining Electric Mobility"
        subtitle="Discover cutting-edge electric vehicles designed for performance, sustainability, and style.."
        buttonText="Explore More"
        imageSrc={RoshniBanner.src}
    />
    )
}

export default Banner