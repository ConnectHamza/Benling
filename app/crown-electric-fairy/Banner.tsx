import React from 'react'
import FairyWeb from "../../public/assets/Home/Header/web/fairy.webp"
import HeroSection from '@/components/Herocontainer/Herocontainer'
import BannerMobile from '../../public/assets/Home/Header/mobile/fairy.webp'

const Banner = (textColor?: any) => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Benling Fairy - Crafted for Roads, Styled for You"
                subtitle="The Crown Benling Fairy delivers bold performance wrapped in sleek, modern design. Ride with confidence on Pakistan’s roads, powered by advanced electric technology, enhanced safety features, and effortless style."
                imageSrc={FairyWeb.src}
                mobileImageSrc={BannerMobile.src}                
                textColor='text-black'
                price='165,000'
                href='/brouchers/Crown_Benling_Fairy_Brochure.pdf'
                color='black'
            />
        </div>

    )
}

export default Banner