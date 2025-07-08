import React from 'react'
import RoshnixWeb from "../../public/assets/Home/Header/web/roshnix.webp"
import RoshniBannerMbl from '../../public/assets/RoshniX/Roshni-Banner-Mobile.webp'
import HeroSection from '@/components/Herocontainer/Herocontainer'


const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Electric Roshni X"
                subtitle="Upgrade to the Crown Electric Roshni X — a next-generation 1500W electric scooter in Pakistan featuring an ergonomic design and high battery range. Built for tomorrow’s urban riders, it delivers power, comfort, and smart commuting for modern city life."
                buttonText="Explore More"
                imageSrc={RoshnixWeb.src}
                mobileImageSrc={RoshniBannerMbl.src}
                textColor='text-black'
                price='235,000'
                href='/brouchers/Crown_Benling_Roshni_X_Brochure.pdf'
                color='black'
            />
        </div>

    )
}

export default Banner