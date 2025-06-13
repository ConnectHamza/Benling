import React from 'react'
import RaftaarWeb from "../../public/assets/Home/Header/web/raftaar.webp"
import RaftaarMob from "../../public/assets/Home/Header/mobile/raftaar.webp"
import HeroSection from '@/components/Herocontainer/Herocontainer'



const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Benling Raftaar Sleek, Smart, & Ready for the Fast Lane"
                subtitle="Conquer the city in style with the Crown Benling Raftaar—built for go-getters with speed, efficiency, and bold looks. Perfect for weaving through traffic or cruising open roads with smooth performance and urban agility."
                buttonText="Explore More"
                imageSrc={RaftaarWeb.src}
                mobileImageSrc={RaftaarMob.src}
                price='299,000'
                href='/brouchers/Crown_Benling_Raftaar_Brochure.pdf'
                textColor='text-white'
            />
        </div>
    )
}

export default Banner