import React from 'react'
import RaftaarWeb from "../../public/assets/Home/Header/web/raftaar.webp"
import RaftaarMob from "../../public/assets/Home/Header/mobile/raftaar.webp"
import HeroSection from '@/components/Herocontainer/Herocontainer'



const Banner = () => {
    return (
        <div className='pt-[0px]'>
            <HeroSection
                title="Crown Electric Raftaar: Big Power, Bigger Thrill"
                subtitle="Massive torque for instant acceleration. Powered by a high-capacity 72V40Ah Lithium Iron Phosphate battery for lasting performance."
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