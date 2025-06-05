import React from 'react'
import ChampionWeb from "../../public/assets/Home/Header/web/champion.webp"
import RoshniBannerMbl from '../../public/assets/RoshniX/Roshni-Banner-Mobile.webp'
import HeroSection from '@/components/Herocontainer/Herocontainer'


const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Powerful, Stylish, and Built for the Urban Explorer"
                subtitle="Turn heads with the Crown Benling Champion—built for thrill-seekers and commuters with bold style, durability, and performance for city streets and long routes."
                buttonText="Explore More"
                imageSrc={ChampionWeb.src}
                mobileImageSrc={RoshniBannerMbl.src}                
                // price='235,000'
                // href='/brouchers/Crown_Benling_Roshni_X_Brochure.pdf'
            />
        </div>

    )
}

export default Banner