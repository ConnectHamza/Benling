import React from 'react'
import CherryWeb from "../../public/assets/Home/Header/web/cherry.webp"
import CherryMobile from "../../public/assets/Home/Header/mobile/cherry.webp"
import HeroSection from '@/components/Herocontainer/Herocontainer'



const Banner = () => {
    return (
        <div className='pt-[0px]'>
                <HeroSection
                    title="Crown Electric Cherry The Vintage Way"
                    subtitle="Crown Cherry combines bold style with powerful performance, offering a smooth and efficient ride for urban commuters."
                    buttonText="Explore More"
                    imageSrc={CherryWeb.src}
                    mobileImageSrc={CherryMobile.src}
                    price='380,000'
                    href='/brouchers/Crown_Benling_Cherry_Brochure.pdf'
                    textColor='text-black-30'
                    color='text-black-30'
                />
        </div>
    )
}

export default Banner