import React from 'react'
import MarkhorWeb from "../../public/assets/Home/Header/web/markhor.webp"
import MarkhorMob from "../../public/assets/Home/Header/mobile/markhor.webp"
import RoshniBannerMbl from '../../public/assets/RoshniX/Roshni-Banner-Mobile.webp'
import HeroSection from '@/components/Herocontainer/Herocontainer'



const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Electric Markhor - Power. Performance. Precision."
                subtitle="Crown Markhor is a powerful, smart, and secure electric bike built for high performance, heavy-duty use, and bold, sustainable mobility."
                buttonText="Explore More"
                imageSrc={MarkhorWeb.src}
                mobileImageSrc={MarkhorMob.src}                
                textColor='text-black-30'
                color='black-30'
                price='380,000'
                href='/brouchers/Crown_Benling_Markhor_Brochure.pdf'
            />
        </div>
    )
}

export default Banner