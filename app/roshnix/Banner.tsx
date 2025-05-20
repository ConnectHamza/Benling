import React from 'react'
import RoshnixWeb from "../../public/assets/Home/Header/web/roshnix.webp"
import RoshniBannerMbl from '../../public/assets/RoshniX/Roshni-Banner-Mobile.webp'
import HeroSection from '@/components/Herocontainer/Herocontainer'


const Banner = () => {
    return (
        <div className='pt-[75px]'>
            <HeroSection
                title="Benling Redefining Electric Mobility"
                subtitle="Discover cutting-edge electric vehicles designed for performance, sustainability, and style.."
                buttonText="Explore More"
                imageSrc={RoshnixWeb.src}
                mobileImageSrc={RoshniBannerMbl.src}
                textColor='text-black'
            />
        </div>

    )
}

export default Banner