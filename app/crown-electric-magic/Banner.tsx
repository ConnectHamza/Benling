import React from 'react'
import MagicWeb from "../../public/assets/Home/Header/web/magic.webp"
import HeroSection from '@/components/Herocontainer/Herocontainer'
import BannerMobile from '../../public/assets/Home/Header/mobile/magic.webp'

const Banner = (textColor: string) => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Electric Magic - Ride the Funk. Feel the Magic."
                subtitle="Crown Electric Magic is a sleek and practical electric bike built for everyday use. Equipped with advanced Graphene battery technology, it offers a comfortable riding experience and is ideal for short city commutes."
                buttonText="Explore More"
                imageSrc={MagicWeb.src}
                mobileImageSrc={BannerMobile.src}                
                price='99,999'
                href='/brouchers/Crown_Benling_Magic_Brochure.pdf'
                textColor='text-white'
                color='white'
            />
        </div>

    )
}

export default Banner