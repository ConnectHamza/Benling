import React from 'react'
import ChampionWeb from "../../public/assets/Home/Header/web/champion.webp"
import ChampionMob from "../../public/assets/Home/Header/mobile/champion.webp"
import RoshniBannerMbl from '../../public/assets/RoshniX/Roshni-Banner-Mobile.webp'
import HeroSection from '@/components/Herocontainer/Herocontainer'



const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Electric Champion - The Range Star"
                subtitle="Built with immense range of more than 220KM in single charge, Crown Champion is the ultimate choice with speed and durability with 72V60Ah Lithium Iron Phosphate Battery."
                buttonText="Explore More"
                imageSrc={ChampionWeb.src}
                mobileImageSrc={ChampionMob.src}                
                price='325,000'
                href='/brouchers/Crown_Benling_Champion_Brochure.pdf'
            />
        </div>
    )
}

export default Banner