import React from 'react'
import RoshnixWeb from "../../public/assets/Home/Header/web/roshni.webp"
import RoshniMobile from '../../public/assets/Roshni/Roshni-mobile.webp'

import Button from '@/components/Button/Button'
import HeroSection from '@/components/Herocontainer/Herocontainer'
const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Roshni – Bright, Bold, and Electric"
                subtitle="Discover Roshni, the stylish electric scooter made for vibrant city living. With modern design and efficient performance, it’s your perfect ride for a greener Pakistan."
                buttonText="Explore More"
                imageSrc={RoshnixWeb.src}
                mobileImageSrc={RoshniMobile.src}
                price='230,000'
                href='/brouchers/Crown_Benling_Roshni_Brochure.pdf'
            />
        </div>

    )
}

export default Banner