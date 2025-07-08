import React from 'react'
import FairyWeb from "../../public/assets/Home/Header/web/fairy.webp"
import HeroSection from '@/components/Herocontainer/Herocontainer'
import BannerMobile from '../../public/assets/Home/Header/mobile/fairy.webp'

const Banner = (textColor?: any) => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Electric Fairy – Crafted for Roads, Styled for You"
                subtitle="The Crown Electric Fairy is a premium 1000W electric scooter in Pakistan, combining bold performance with a sleek, modern design. Built for confident rides on local roads, it features advanced electric technology, enhanced safety, and effortless style — perfect for those who want power with personality."
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