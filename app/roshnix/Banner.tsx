import React from 'react'
import RoshnixWeb from "../../public/assets/Home/Header/web/roshnix.webp"
import RoshniBannerMbl from '../../public/assets/RoshniX/Roshni-Banner-Mobile.webp'
import HeroSection from '@/components/Herocontainer/Herocontainer'


const Banner = () => {
    return (
        <div className='pt-[75px]'>
            <HeroSection
                title="The Era of Smart Electric Commuting"
                subtitle="Upgrade to Roshni X, a next-generation electric scooter with ergonomic design, and high battery range built for tomorrow’s urban riders in Pakistan."
                buttonText="Explore More"
                imageSrc={RoshnixWeb.src}
                mobileImageSrc={RoshniBannerMbl.src}
                textColor='text-black'
            />
        </div>

    )
}

export default Banner