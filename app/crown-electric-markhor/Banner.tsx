import React from 'react'
import MarkhorWeb from "../../public/assets/Home/Header/web/markhor.webp"
import MarkhorMob from "../../public/assets/Home/Header/mobile/markhor.webp"
import RoshniBannerMbl from '../../public/assets/RoshniX/Roshni-Banner-Mobile.webp'
import HeroSection from '@/components/Herocontainer/Herocontainer'



const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Markhor The Vintage Way"
                subtitle="Crown Cherry combines bold style with powerful performance, offering a smooth and efficient ride for urban commuters."
                buttonText="Explore More"
                imageSrc={MarkhorWeb.src}
                mobileImageSrc={MarkhorMob.src}                
                price='380,000'
                href='/brouchers/Crown_Benling_Markhor_Brochure.pdf'
            />
        </div>
    )
}

export default Banner