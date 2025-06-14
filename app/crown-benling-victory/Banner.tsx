import React from 'react'
import VelocityWeb from "../../public/assets/Home/Header/web/velocity.webp"
import VelocityMob from "../../public/assets/Home/Header/mobile/velocity.webp"
import RoshniBannerMbl from '../../public/assets/RoshniX/Roshni-Banner-Mobile.webp'
import HeroSection from '@/components/Herocontainer/Herocontainer'



const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Victory - Unleash Urban Power"
                subtitle="The Crown Victory offers strong performance, modern design, and affordability. Built with a 1000W motor and 72V 30Ah Lithium Iron Phosphate battery , it delivers up to 120 km range and 55 km/h speed —ideal for city rides. Stylish, lightweight, and built to impress."
                buttonText="Explore More"
                imageSrc={VelocityWeb.src}
                mobileImageSrc={VelocityMob.src}                
                price='265,000'
                href='/brouchers/Crown_Benling_Victory_Brochure.pdf'
                textColor='text-black-30'
                color='text-black-30'
            />
        </div>
    )
}

export default Banner