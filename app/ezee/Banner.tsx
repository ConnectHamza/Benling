import React from 'react'
import FireflyIMG from '../../public/assets/Ezee/Ezee-banner.png'
import HeroSection from '@/components/Herocontainer/Herocontainer';

const Banner = () => {
  return (
    <HeroSection
      title="Benling Redefining Electric Mobility"
      subtitle="Discover cutting-edge electric vehicles designed for performance, sustainability, and style."
      buttonText="Explore More"
      imageSrc={FireflyIMG.src}
    />
  )
}

export default Banner