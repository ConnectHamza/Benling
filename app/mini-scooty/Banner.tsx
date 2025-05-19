import React from 'react'
import MiniBanner from '../../public/assets/mini-scooty/main.png'
import MiniBannerMobile from '../../public/assets/mini-scooty/main-mobile.webp'
import HeroSection from '@/components/Herocontainer/Herocontainer'

const Banner = () => {
    return (
        <div className='pt-[75px]'>
            <HeroSection
                title="Benling Redefining Electric Mobility"
                subtitle="Discover cutting-edge electric vehicles designed for performance, sustainability, and style."
                buttonText="Explore More"
                imageSrc={MiniBanner.src}
                mobileImageSrc={MiniBannerMobile.src}
            />
        </div>

    )

}

export default Banner