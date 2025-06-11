import React from 'react'
import VelocityWeb from "../../public/assets/Home/Header/web/velocity.webp"
import VelocityMob from "../../public/assets/Home/Header/mobile/velocity.webp"
import RoshniBannerMbl from '../../public/assets/RoshniX/Roshni-Banner-Mobile.webp'
import HeroSection from '@/components/Herocontainer/Herocontainer'



const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Powerful, Sleek, and Built for Urban Thrills"
                subtitle="Bold and dynamic, the Crown Benling Victory redefines commuting with power and style. Perfect for thrill-seekers, it offers smooth acceleration and a striking presence, delivering efficiency and freedom on every ride."
                buttonText="Explore More"
                imageSrc={VelocityWeb.src}
                mobileImageSrc={VelocityMob.src}                
                price='265,000'
                // href='/brouchers/Crown_Benling_Champion_Brochure.pdf'
                textColor='text-black-30'
                color='text-black-30'
            />
        </div>
    )
}

export default Banner