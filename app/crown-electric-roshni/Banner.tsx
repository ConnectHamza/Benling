import React from 'react'
import RoshnixWeb from "../../public/assets/Home/Header/web/roshni.webp"
import RoshniMobile from '../../public/assets/Roshni/Roshni-mobile.webp'

import Button from '@/components/Button/Button'
import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Electric Roshni"
                subtitle="Discover the Crown Electric Roshni, a stylish 1200W electric scooter in Pakistan built for vibrant city living. With its modern design and efficient performance, it’s the ideal ride for urban commuters seeking a smarter, greener way to move across Pakistan."
                buttonText="Explore More"
                imageSrc={RoshnixWeb.src}
                mobileImageSrc={RoshniMobile.src}
                price='215,000'
                href='/brouchers/Crown_Benling_Roshni_Brochure.pdf'
            />
        </div>

    )
}

export default Banner