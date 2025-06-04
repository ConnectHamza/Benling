import React from 'react'
import FairyWeb from "../../public/assets/Home/Header/web/fairy.webp"
import HeroSection from '@/components/Herocontainer/Herocontainer'
import BannerMobile from '../../public/assets/Home/Header/mobile/fairy.webp'

const Banner = (textColor: string) => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Benling Fairy - Crafted for Roads, Styled for You"
                subtitle="Bold performance meets sleek design. Ride confidently with advanced tech, smart safety, and effortless style."
                imageSrc={FairyWeb.src}
                mobileImageSrc={BannerMobile.src}                
                textColor='text-black'
                price='250,000'
                href='/brouchers/Crown_Benling_Fairy_Brochure.pdf'
                color='black'
            />
        </div>

    )
}

export default Banner