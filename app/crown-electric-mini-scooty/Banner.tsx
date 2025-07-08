import React from 'react'
import MiniWeb from "../../public/assets/Home/Header/web/mini-scooty.webp"
import MiniBannerMobile from '../../public/assets/mini-scooty/main-mobile.webp'
import HeroSection from '@/components/Herocontainer/Herocontainer'

const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Electric Mini Scooty"
                subtitle="Turn heads with the Crown Electric Mini Scooty — a sleek 450W electric scooter in Pakistan designed for young, urban riders. Lightweight, efficient, and perfect for effortless short-distance commutes, it's the smart choice for navigating city streets with ease."
                buttonText="Explore More"
                imageSrc={MiniWeb.src}
                mobileImageSrc={MiniBannerMobile.src}
                price='99,999'
                href='/brouchers/Crown_Benling_Mini_Scooty_Brochure.pdf'
            />
        </div>

    )

}

export default Banner