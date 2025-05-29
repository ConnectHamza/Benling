import React from 'react'
import MiniWeb from "../../public/assets/Home/Header/web/mini-scooty.webp"
import MiniBannerMobile from '../../public/assets/mini-scooty/main-mobile.webp'
import HeroSection from '@/components/Herocontainer/Herocontainer'

const Banner = () => {
    return (
        <div className='pt-[75px]'>
            <HeroSection
                title="Compact, Stylish, and Made for City Life"
                subtitle="Turn heads with Mini Scooty, the perfect electric scooter for young and urban riders. Lightweight, efficient, and designed for effortless short-distance commutes across Pakistan."
                buttonText="Explore More"
                imageSrc={MiniWeb.src}
                mobileImageSrc={MiniBannerMobile.src}
            />
        </div>

    )

}

export default Banner